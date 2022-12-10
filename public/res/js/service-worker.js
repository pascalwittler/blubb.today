const cacheName = 'blubb.today-v0.3.0';

const filesToCache = [
  'index.html',
  'manifest.json',
  'res/css/main.css',
  'res/js/main.js',
  'res/js/service-worker.js',
  'res/js/includes/add-menu.js',
  'res/js/includes/local-storage.js',
  'res/js/includes/progress-bar.js',
  'res/js/includes/preogressive-web-app.js',
  'res/js/includes/web-notification.js',
  'res/img/favicon/blubb.today-512x512.png',
  'res/fonts/EncodeSans.woff2',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseToCache = response.clone();

            caches.open(cacheName)
              .then((cache) => {
                cache.put(event.request, responseToCache)
              })

            return response;
          })
      })
  );
})
