const CACHE_NAME = 'my-app-cache-v1'
const CACHE_TTL = 10 * 60 * 1000 // 10 minutes in milliseconds

const CACHES_TO_KEEP = [CACHE_NAME, 'transformers-cache', 'image-embeddings-cache-v1']
const CACHE_URL_FORMATS = [
  '-lqip.jpg',
  '-128.avif',
  'gallery/images.txt',
  'gallery2d.json',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'apple-touch-icon.png',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon.ico',
  'plutchik-wheel_de.png',
  '2d-tutorial.webm',
  '2d-tutorial-alt.png',
  'pixi.min.js',
  'viewport.min.js',
  'huggingface_transformers.js',
  'ort-wasm-simd-threaded.jsep.mjs',
  'ort-wasm-simd-threaded.jsep.wasm',
]

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

function isCacheValid(cachedResponse) {
  const timestamp = cachedResponse.headers.get('cache-timestamp')
  if (!timestamp) {
    return false
  }
  const age = Date.now() - parseInt(timestamp)
  return age < CACHE_TTL
}

async function fetchAndCache(request) {
  const networkResponse = await fetch(request)
  if (!networkResponse || networkResponse.status !== 200) {
    return networkResponse
  }

  const cacheClone = networkResponse.clone()
  caches.open(CACHE_NAME).then((cache) => {
    putWithTimestamp(cache, request, cacheClone).catch(console.error)
  })
  return networkResponse
}

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    console.debug('██ Cache ignores', event.request.method, event.request.url)
    return
  }

  const url = new URL(event.request.url)
  if (!CACHE_URL_FORMATS.some((format) => url.pathname.endsWith(format))) {
    console.debug('██ Cache ignores', event.request.method, event.request.url)
    return
  }

  event.respondWith(
    (async () => {
      const cachedResponse = await caches.match(event.request)
      if (!cachedResponse) {
        console.debug('██ NO Cache found, fetch online', event.request.url)
        return fetchAndCache(event.request)
      }

      if (!isCacheValid(cachedResponse)) {
        console.debug('▒▒ Cache expired, use cache and refresh afterwards', event.request.url)
        fetchAndCache(event.request).catch(console.error)
        return cachedResponse
      }

      console.debug('░░ OK cached', event.request.url)
      return cachedResponse
    })(),
  )
})
