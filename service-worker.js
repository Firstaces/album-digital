self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("album-cache-v1").then((cache) => {
      return cache.addAll([
        "./AlbumDigitalBebe.html",
        "./manifest.json",
        "./icon-192.png",
        "./icon-512.png",
      ]);
    })
  );
});
