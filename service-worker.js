const CACHE_NAME = "momotaro-audio-cache-v1";
const FILES_TO_CACHE = [
  "index.html",
  "manifest.json",
  "Kiwi_maru.ttf",
  "musics/さんぽ.mp3",
  "musics/シャキーン3.mp3",
  "musics/桃first.mp3",
  "musics/桃second.mp3",
  "musics/ちゃんちゃん.mp3",
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
