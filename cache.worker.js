const CACHE_NAME = 'my-app-cache-v1'
const CACHE_TTL = 10 * 60 * 1000 // 10 minutes in milliseconds

const CACHES_TO_KEEP = [CACHE_NAME, 'transformers-cache', 'image-embeddings-cache-v1']
const CACHE_URL_FORMATS = [
  '-lqip.jpg',
  '-128.avif',
  'gallery/images.txt',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'apple-touch-icon.png',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon.ico',
  'gallery2d.json',
  'plutchik-wheel_de.png',
]

// Helper function to create a cache entry with timestamp
async function putWithTimestamp(cache, request, response) {
  const timestamp = Date.now()
  // Copy existing headers to preserve Content-Type and other metadata
  const headers = new Headers(response.headers)
  headers.set('cache-timestamp', timestamp.toString())

  // Create a new Response from the original body (as ArrayBuffer) so we can attach our headers
  const body = await response.clone().arrayBuffer()
  const responseWithTimestamp = new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })

  await cache.put(request, responseWithTimestamp)
}

// Helper function to check if cache entry is still valid
function isCacheValid(cachedResponse) {
  const timestamp = cachedResponse.headers.get('cache-timestamp')
  if (!timestamp) {
    return false
  }
  const age = Date.now() - parseInt(timestamp)
  return age < CACHE_TTL
}

self.addEventListener('install', (event) => {
  console.log('Service worker installing.')
  self.skipWaiting()
  event.waitUntil(caches.open(CACHE_NAME).catch(console.error))
})

self.addEventListener('activate', (event) => {
  console.log('Service worker activating.')
  self.clients.claim()
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!CACHES_TO_KEEP.includes(cacheName)) {
            console.warn('Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    console.debug('██ Cache ignores', event.request.method, event.request.url)
    return
  }

  const url = new URL(event.request.url)
  if (url.origin !== self.location.origin) {
    console.debug('██ Cache ignores', event.request.url)
    return
  }

  if (!CACHE_URL_FORMATS.some((format) => url.pathname.includes(format))) {
    console.debug('██ Cache ignores', event.request.url)
    event.respondWith(fetch(event.request))
    return
  }

  event.respondWith(
    (async () => {
      const cachedResponse = await caches.match(event.request)

      // Check if we have a valid cached response
      if (cachedResponse && isCacheValid(cachedResponse)) {
        console.debug('░░ OK cached', event.request.url)
        return cachedResponse
      }

      // Cache is either missing or expired, fetch fresh data
      try {
        console.debug('██ Cache outdated, fetch online', event.request.url)
        const networkResponse = await fetch(event.request)
        if (networkResponse && networkResponse.status === 200) {
          const cache = await caches.open(CACHE_NAME)
          await putWithTimestamp(cache, event.request, networkResponse.clone())
          return networkResponse
        }
      } catch (error) {
        console.warn('Network fetch failed:', event.request.url, error)
      }

      // If network fails and we have an expired cache, return it anyway
      if (cachedResponse) {
        console.log('Returning expired cache due to network failure:', event.request.url)
        return cachedResponse
      }

      // No cache and no network, let the request fail
      throw new Error('No cache available and network request failed')
    })(),
  )
})
