/*
 * Service worker: keeps small site files that are needed on every visit.
 *
 * - Files that never change under their name (gallery thumbnails, icons) are served from the
 *   cache first and fetched only once.
 * - Lists that grow when artworks are added (gallery/images.txt, gallery2d.json) are served from
 *   the cache at once and refreshed in the background for the next visit.
 * - Everything else (app bundles, large images, model and index files) goes to the network; the
 *   pages that need large files cache them themselves.
 *
 * Owner: this file. Lifecycle: on activation every cache not in KEEP_CACHES is deleted, so
 * bumping CACHE_NAME drops the old site cache.
 */

const CACHE_NAME = 'site-assets-v3'
const KEEP_CACHES = [CACHE_NAME, 'transformers-cache', 'image-search-index-v1', 'yolo-model-v1']

const CACHE_FIRST = [
  /^\/gallery\/[\w-]+\/[\w-]+-(lqip\.jpg|128\.avif)$/,
  /^\/(favicon\.ico|favicon-\d+x\d+\.png|android-chrome-\d+x\d+\.png|apple-touch-icon\.png)$/,
]
const REFRESH_IN_BACKGROUND = [/^\/gallery\/images\.txt$/, /^\/gallery2d\.json$/]

function strategyFor(request) {
  if (request.method !== 'GET') return null
  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return null
  if (CACHE_FIRST.some((pattern) => pattern.test(url.pathname))) return 'cache-first'
  if (REFRESH_IN_BACKGROUND.some((pattern) => pattern.test(url.pathname))) return 'refresh'
  return null
}

/** Fetches from the network and stores complete (200) responses. */
async function fetchAndStore(request) {
  const response = await fetch(request)
  if (response.status === 200) {
    const cache = await caches.open(CACHE_NAME)
    await cache.put(request, response.clone())
  }
  return response
}

async function cacheFirst(request) {
  return (await caches.match(request)) ?? fetchAndStore(request)
}

async function serveAndRefresh(event) {
  const cached = await caches.match(event.request)
  const refreshed = fetchAndStore(event.request)
  if (!cached) return refreshed
  event.waitUntil(
    refreshed.catch((error) => console.warn('Background refresh failed', event.request.url, error)),
  )
  return cached
}

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys()
      await Promise.all(
        names.filter((name) => !KEEP_CACHES.includes(name)).map((name) => caches.delete(name)),
      )
      await self.clients.claim()
    })(),
  )
})

self.addEventListener('fetch', (event) => {
  const strategy = strategyFor(event.request)
  if (strategy === 'cache-first') event.respondWith(cacheFirst(event.request))
  else if (strategy === 'refresh') event.respondWith(serveAndRefresh(event))
})
