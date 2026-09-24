/* RF Impact - Service Worker */
const CACHE = 'rf-impact-v14';
const OFFLINE = './hors-ligne.html';
const ASSETS = [
  './',
  './index.html',
  './hors-ligne.html',
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

// Precache asset par asset : addAll rejette les reponses redirigees (308 des URL .html
// sur Cloudflare Pages). On recopie chaque reponse sans le drapeau "redirected".
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => Promise.all(ASSETS.map((u) =>
      fetch(u, { cache: 'reload' }).then((res) => {
        if (!res || !res.ok) return;
        const body = res.clone().body;
        const clean = res.redirected
          ? new Response(body, { status: res.status, statusText: res.statusText, headers: res.headers })
          : res.clone();
        return c.put(u, clean);
      }).catch(() => {})
    ))).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Recopie une reponse avant de la cacher : neutralise le drapeau "redirected"
// (Cloudflare Pages reecrit /page.html en /page avec une redirection 308).
function cachePut(req, res) {
  if (!res || !res.ok || res.status !== 200) return;
  const body = res.clone().body;
  const clean = res.redirected
    ? new Response(body, { status: res.status, statusText: res.statusText, headers: res.headers })
    : res.clone();
  caches.open(CACHE).then((c) => c.put(req, clean)).catch(() => {});
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // laisser passer cartes, polices, etc.

  // Navigations : reseau d'abord, repli sur le cache, dernier recours la page hors ligne.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => { cachePut(req, res); return res; })
        .catch(() => caches.match(req).then((cached) => cached || caches.match(OFFLINE)))
    );
    return;
  }

  // Autres requetes (CSS, JS, images, manifeste) : cache d'abord.
  e.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => { cachePut(req, res); return res; }).catch(() => undefined);
    })
  );
});
