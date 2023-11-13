'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "7a1d76a8729d1add7a6ce2a4b4db043f",
"favicon.png": "ea44a087a4df3cb68844a1fb7d74167e",
"icons/Icon-192.png": "a45d97279e902dd85a7219f905500b1b",
"icons/Icon-512.png": "a3bbf0d568f48ce2a7fb694ddd98789b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin": "5ece8aa254c18c52c541e41c58397841",
"assets/AssetManifest.bin.json": "c2dd3ff7df52223bfbc8dedb88137ca0",
"assets/assets/input.json": "a79b84ea42b705d4bfbfadec82944945",
"assets/assets/images/quran-ayat.png": "6d629ecc0d4fd7d2f47a896cb6d6f77b",
"assets/assets/images/ayat-kursi-icon.png": "0dce0ea55972f9fd3b4e97ce78d372b8",
"assets/assets/images/dhikr.png": "c7fb679a040732ff17cc524f391285e8",
"assets/assets/images/audio-icon.png": "db5e3b41dd8f0f49859629911ba90783",
"assets/assets/images/oneword.png": "d6960f1d5d26f8c8fe3c97f544a98606",
"assets/assets/images/dhikr-icon.png": "7089ed53c9741ebb4e2eaf0a6ba4583b",
"assets/assets/images/quran-ayat-screenshot.png": "c217837c544c0f64c10b252e4cad6b4a",
"assets/assets/images/ayat-kursi-screenshot.png": "bbb88de8ac3061196fac3b2f322f45ea",
"assets/assets/images/quran-blind-screenshot.png": "3e056876fd715de45e22a4b4bd9b49be",
"assets/assets/images/quran-chatbot-icon.png": "33b35b8723da84bb4f05ae98d9c1e3bb",
"assets/assets/images/quran-blind-icon.png": "d994dceb7c39f6ea6c5d4e2d9c5f0447",
"assets/assets/images/oneword-icon.png": "b88e99e492ce2a461f074108b5bf69a0",
"assets/assets/images/scrolling.png": "99e4a8e919a409ba48415ee5dbf74193",
"assets/assets/images/Icon-512.png": "a3bbf0d568f48ce2a7fb694ddd98789b",
"assets/assets/images/quran-chatbot.png": "31e7c67ca75f0b7e217207f8e5076a2d",
"assets/assets/images/audio.png": "ecf3fd67759e3fe7d69d54453bcc412e",
"assets/assets/images/scrolling-icon.png": "84f0fdbafd9b7cbc215df7b1f1dde39c",
"assets/AssetManifest.json": "4a96da8f8ecbfe8b4828017dff20f250",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "c822cb0285f3692a5f7653964d234ae2",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"index.html": "d6bb5ef149ed9bd5bc9c27cf60ce3280",
"/": "d6bb5ef149ed9bd5bc9c27cf60ce3280",
"main.dart.js": "ce6b5a371733c8624160a893943b4940",
"manifest.json": "b1d5272476618e9fed4078f08eff90eb",
"version.json": "6a04da9dc8e86836976c78a79594335c",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/chromium/canvaskit.wasm": "3a3463bdb5bbb2aa2347c6bafe247e80",
"canvaskit/chromium/canvaskit.js.symbols": "18fb854debda3017412f11aaf7dee165",
"canvaskit/chromium/canvaskit.js": "bc979fce6b4b3cc75d54b0d162cafaa7",
"canvaskit/canvaskit.wasm": "65898a03c39ab27f58c3dba4c0b47d20",
"canvaskit/skwasm.wasm": "823f96b249efe763e5042f98f84362f9",
"canvaskit/skwasm.js.symbols": "4fe06170b7d5152a9191cd7ffae38baa",
"canvaskit/canvaskit.js.symbols": "9cb87df4b280285ab6b31116e6a678ca",
"canvaskit/canvaskit.js": "321aa0c874f6112cabafc27a74a784b4",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
