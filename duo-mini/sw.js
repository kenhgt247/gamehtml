const CACHE = "duo-mini-v1";
const APP_SHELL = ["/", "/index.html", "/sw.js", "/content/path.json"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);

  // Stale-while-revalidate for content JSON
  if (url.pathname.startsWith("/content/")) {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(e.request);
      const fetchPromise = fetch(e.request).then((res) => {
        cache.put(e.request, res.clone());
        return res;
      }).catch(() => null);
      return cached || (await fetchPromise) || new Response("Offline", { status: 503 });
    })());
    return;
  }

  // Cache-first for app shell
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(e.request);
    if (cached) return cached;
    const res = await fetch(e.request);
    cache.put(e.request, res.clone());
    return res;
  })());
});