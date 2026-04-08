const CACHE_NAME = 'ev-calc-v1';
const assetsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// حفظ الملفات في الكاش عند التثبيت
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

// جلب الملفات من الكاش عند عدم وجود إنترنت
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event. Request);
    })
  );
});