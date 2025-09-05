const CACHE_NAME = "momotaro-audio-cache-v1";
const FILES_TO_CACHE = [
  "index.html",
  "manifest.json",
  "Kiwi_maru.ttf",
  "musics/sampo.mp3",
  "musics/syakin.mp3",
  "musics/momofirst.mp3",
  "musics/momosecond.mp3",
  "musics/shyan.mp3",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
