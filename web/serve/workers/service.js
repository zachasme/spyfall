import router from 'shared/router'

const version = '__VERSION__'

/**
 * Typically during the install step, you'll want to cache some static assets.
 * If all the files are cached successfully, then the service worker becomes
 * installed. If any of the files fail to download and cache, then the install
 * step will fail and the service worker won't activate
 * (i.e. won't be installed). If that happens, don't worry, it'll try again
 * next time. But that means if it does install, you know you've got those
 * static assets in the cache.
 */
async function install() {
  const cache = await caches.open('static-' + version)
  await cache.addAll([])

  // `skipWaiting()` forces the waiting ServiceWorker to become the
  // active ServiceWorker, triggering the `onactivate` event.
  // Together with `Clients.claim()` this allows a worker to take effect
  // immediately in the client(s).
  self.skipWaiting()
}

/**
 * When we're installed, the activation step will follow and this is a great
 * opportunity for handling any management of old caches.
 *
 * One common task that will occur in the activate callback is cache management.
 * The reason you'll want to do this in the activate callback is because if you
 * were to wipe out any old caches in the install step, any old service worker,
 * which keeps control of all the current pages, will suddenly stop being able
 * to serve files from that cache.
 */
async function activate() {
  // `claim()` sets this worker as the active worker for all clients that
	// match the workers scope and triggers an `oncontrollerchange` event for
	// the clients.
  await self.clients.claim()
}

async function handleFetch(request) {
  // first check if request is in cache
  const cached = await caches.match(request)
  if (cached) {
    return cached
  }

  // then, see if router can handle it
  const routed = await router.match(request.url)
  if (routed) {
    /**
     * return some kind of default payload
     */
    return routed.fetchData()
  }

  // otherwise fall back to network fetch
  const networked = await fetch(request)
  return networked
}

async function handleMessage(event) {
  const { data } = event
  if (data.type === 'supportsWebp') {
    const supportsWebp = data.value;
    const cache = await caches.open('static-' + version);
    await cache.addAll(supportsWebp ? [] : []);
  }
}

self.addEventListener('install', event => event.waitUntil(install(event)))
self.addEventListener('activate', event => event.waitUntil(activate(event)))
self.addEventListener('fetch', event => event.respondWith(handleFetch(event)))
self.addEventListener('message', handleMessage)
