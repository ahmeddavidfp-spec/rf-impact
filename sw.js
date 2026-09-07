/* RF Impact - Service Worker (offline-first for the app shell) */
const CACHE = 'rf-impact-v10';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './assets/logo.svg',
  './assets/icon.svg',
  './assets/og.svg',
  './assets/team/ronald.jpg',
  './assets/gallery/door-before.svg',
  './assets/gallery/door-after.svg',
  './assets/gallery/hail-before.svg',
  './assets/gallery/hail-after.svg',
  './assets/gallery/fender-before.svg',
  './assets/gallery/fender-after.svg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Don't cache external map/font tiles - go to network
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        // Only cache valid (200) responses - never 404s or errors.
        if (res && res.ok && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
