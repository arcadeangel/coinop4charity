const CACHE_NAME = 'coinop4c-v3-stick-attract';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch(() => {
        // Fail silently if some assets 404 during first install
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Network-first for navigation, cache-first for other assets
  const dest = event.request.destination;
  const url = new URL(event.request.url);
  const isHtml = event.request.mode === 'navigate' || dest === 'document' || url.pathname.endsWith('.html') || url.pathname === '/' || url.pathname === '/index.html';
  if (isHtml) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match('/') || caches.match('/index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((response) => {
        // Optionally cache new responses
        return response;
      }).catch(() => cached);
    })
  );
});
