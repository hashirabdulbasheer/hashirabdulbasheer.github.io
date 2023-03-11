'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"favicon.png": "62081e46aaeb5022dfff18ade7795a0e",
"assets/NOTICES": "c839e7aac8d62098bd6877ccd5256064",
"assets/assets/sounds/speech_to_text_listening.m4r": "62b001e34f8d0fe37cf0005b6b1b5cd7",
"assets/assets/sounds/speech_to_text_stop.m4r": "49540dd9b77ca0193e33b6a4610ab39a",
"assets/assets/sounds/speech_to_text_cancel.m4r": "ddef79c7875e514ceaea1405abf3f3ab",
"assets/assets/fonts/KFGQPC_Uthmanic_Script_HAFS_Regular.otf": "43269f118299246de0cf264e04ae2680",
"assets/assets/fonts/Manjari-Regular.ttf": "43ce5b696c5f9d3e43df1318865e105c",
"assets/FontManifest.json": "50a897e7b2484a9d58a0084e0c9bb74d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/packages/noble_quran/assets/quran/85.json": "e32695ce23d9993a85aabc0c96d29fe7",
"assets/packages/noble_quran/assets/quran/27.json": "ab6c94d74a04d4df5e941e7092d73955",
"assets/packages/noble_quran/assets/quran/107.json": "f7586644be1be6383823d978ce35fb45",
"assets/packages/noble_quran/assets/quran/42.json": "bd9a3fe9447c945fe380d8c8ea5b5eea",
"assets/packages/noble_quran/assets/quran/39.json": "16c369c45ba1d7f4580588e9b9a498f8",
"assets/packages/noble_quran/assets/quran/38.json": "62fd2ec77e8d43587514760029c15205",
"assets/packages/noble_quran/assets/quran/91.json": "d71c9f8317e49cdbd67872cdcbf7c670",
"assets/packages/noble_quran/assets/quran/111.json": "b9ed1a5b96362165fc5db2f0345b1c24",
"assets/packages/noble_quran/assets/quran/106.json": "7f7ad468142366ab0655b3c31e2dd8b3",
"assets/packages/noble_quran/assets/quran/68.json": "21cf1d4773d9e3550cdab57c72d1fd3c",
"assets/packages/noble_quran/assets/quran/100.json": "e70eb64732510888c01ac2d9b1b4bf50",
"assets/packages/noble_quran/assets/quran/112.json": "61463c61caa53f700d05ae27a27f3311",
"assets/packages/noble_quran/assets/quran/20.json": "8c9dd71d4c1cd4db403a728edbf7a063",
"assets/packages/noble_quran/assets/quran/12.json": "131ef168f43bf9f621b967030a888f04",
"assets/packages/noble_quran/assets/quran/58.json": "e9c1fb04e00d67b0ae2eeb59b9731e66",
"assets/packages/noble_quran/assets/quran/9.json": "e2ec2fae1b04d894534b21c5dd74ebd9",
"assets/packages/noble_quran/assets/quran/51.json": "f06b6e32f8b5cc42c9f96a5314edb1c9",
"assets/packages/noble_quran/assets/quran/41.json": "c86a5515ff4f0ff339a7a6efe5be6ddb",
"assets/packages/noble_quran/assets/quran/8.json": "0e6aa28c106b591b4dacab82a15bad8a",
"assets/packages/noble_quran/assets/quran/50.json": "e7841e0464598bd61ad6995e5de84355",
"assets/packages/noble_quran/assets/quran/53.json": "8ecf35c862a1a490d1da702ccb9be0ab",
"assets/packages/noble_quran/assets/quran/72.json": "b912d46f0a3ddee1adf59914638745e6",
"assets/packages/noble_quran/assets/quran/92.json": "6fdff1ea9c54f6d5ecd1fe4de40ae326",
"assets/packages/noble_quran/assets/quran/0.json": "b6e0ac90804c6ef780e902cf06b3ffe7",
"assets/packages/noble_quran/assets/quran/67.json": "8c0f28dbdf082cc7049356f3a059840b",
"assets/packages/noble_quran/assets/quran/43.json": "a71571aece630bedaa4115cbbc31e42e",
"assets/packages/noble_quran/assets/quran/103.json": "c8daf82cd71fd7bd1f74f06fd627f1ad",
"assets/packages/noble_quran/assets/quran/66.json": "8d667d08efb7020e39633ebd7a5c16e7",
"assets/packages/noble_quran/assets/quran/15.json": "b25561a8662c135367d0f4e52a0f8f06",
"assets/packages/noble_quran/assets/quran/36.json": "79005860a9ccf031f7491abf9e03472f",
"assets/packages/noble_quran/assets/quran/55.json": "8c511496e4a00d40e742cb19a258bd98",
"assets/packages/noble_quran/assets/quran/7.json": "0b07ebd955b5e20dffcd2b2282269923",
"assets/packages/noble_quran/assets/quran/84.json": "287e6e126537e2c1c8d99666fbca3ccc",
"assets/packages/noble_quran/assets/quran/79.json": "8a07400432cdd7e6de3ac34009d155ea",
"assets/packages/noble_quran/assets/quran/4.json": "d59d1d1bcd1ac8fa19d1b969936c41b6",
"assets/packages/noble_quran/assets/quran/95.json": "01f906377d6fe0772b16a6c9f1093015",
"assets/packages/noble_quran/assets/quran/6.json": "71c3dece30ed2a0d27bc4e613047cf2b",
"assets/packages/noble_quran/assets/quran/105.json": "f55707177abc53b7ffcd6a94c5ebd15a",
"assets/packages/noble_quran/assets/quran/96.json": "2ced317b77aa9c3e37c648f48f0af662",
"assets/packages/noble_quran/assets/quran/94.json": "da463c5e4a428ed03506a8b35f042f31",
"assets/packages/noble_quran/assets/quran/77.json": "0b196b8477fa662afd24bee5b2d7d4f4",
"assets/packages/noble_quran/assets/quran/34.json": "4e6b7d212b621cd8262b23902d459bd8",
"assets/packages/noble_quran/assets/quran/62.json": "43463f7e3938f689e6143f7c61e182f1",
"assets/packages/noble_quran/assets/quran/23.json": "442414dd17f7ba1dce376cbb750ce4c5",
"assets/packages/noble_quran/assets/quran/104.json": "7f6cfa477be509f2185c4e50ea184cef",
"assets/packages/noble_quran/assets/quran/35.json": "4e767a806da20a6279787d37a15cfb9d",
"assets/packages/noble_quran/assets/quran/33.json": "2a20104141ee01fe6d8cbf17cd86e396",
"assets/packages/noble_quran/assets/quran/78.json": "cb6196cc36a9acdb82ed23398b0cc0b0",
"assets/packages/noble_quran/assets/quran/19.json": "439323f864b863d31d39b6ffa20a5bdf",
"assets/packages/noble_quran/assets/quran/14.json": "15c4b1b46251c0f6b7dee4a8e9cfea4a",
"assets/packages/noble_quran/assets/quran/74.json": "df26791862f717108d227a69e32a5986",
"assets/packages/noble_quran/assets/quran/61.json": "b4f95329b2ebcc2cc4d3b2524c94fa1f",
"assets/packages/noble_quran/assets/quran/60.json": "656f0c60a0b8e336c0deabcc84477727",
"assets/packages/noble_quran/assets/quran/76.json": "23d3f463c0cb71de269068b73f7d5987",
"assets/packages/noble_quran/assets/quran/44.json": "cdac162652c1f59ab147f7af3e0cacd3",
"assets/packages/noble_quran/assets/quran/47.json": "00e7b1b0df0aca197f50dc701e2a981a",
"assets/packages/noble_quran/assets/quran/18.json": "d0f2ff97267461cef9f2cd093011787b",
"assets/packages/noble_quran/assets/quran/86.json": "3938314d18a6ae64d3dd8d79e81d8a33",
"assets/packages/noble_quran/assets/quran/89.json": "44d1638889a48c94364a6dd44cbbe1d7",
"assets/packages/noble_quran/assets/quran/46.json": "5831ad810aa9f237e2d3fe30acbc429d",
"assets/packages/noble_quran/assets/quran/22.json": "5a3c7810bedd16c095cf4588f125e2c3",
"assets/packages/noble_quran/assets/quran/52.json": "0ac48ef1ea9b4110b2fb55e81cae00b5",
"assets/packages/noble_quran/assets/quran/24.json": "accc3fa5c5f687a5988d578369d04c87",
"assets/packages/noble_quran/assets/quran/63.json": "9abbf6e11a3fc5ef98292fa099a31d48",
"assets/packages/noble_quran/assets/quran/69.json": "5d5543f7a8dfcd047f75b971fb80d838",
"assets/packages/noble_quran/assets/quran/37.json": "d21455b32c4e9514b4b40cbc0be8a262",
"assets/packages/noble_quran/assets/quran/101.json": "e64dc2e7222eca4b709cba54285fa945",
"assets/packages/noble_quran/assets/quran/71.json": "61e15feab86ec764765ac2318130581e",
"assets/packages/noble_quran/assets/quran/56.json": "5455aa37e690b3966e7720a941cd960a",
"assets/packages/noble_quran/assets/quran/45.json": "fb0c14fe7c0e57f6b1e3c643a1fa933f",
"assets/packages/noble_quran/assets/quran/10.json": "fd9471c8c4cd97ae7499da32093a10d2",
"assets/packages/noble_quran/assets/quran/99.json": "ffcef74440c61b954554ea1cfaced714",
"assets/packages/noble_quran/assets/quran/64.json": "979c29f3e64e2cc2557f82a0b8190946",
"assets/packages/noble_quran/assets/quran/110.json": "cd02674f5c3485929eeb2cd40032360b",
"assets/packages/noble_quran/assets/quran/70.json": "7a0ec07ee96ba6751dd7e42badfd6a6c",
"assets/packages/noble_quran/assets/quran/57.json": "26762aa1451b3baafef552bbbdd59927",
"assets/packages/noble_quran/assets/quran/1.json": "46cd4b78dc6a62d0ba10e9ba93bd97c1",
"assets/packages/noble_quran/assets/quran/93.json": "06a59b458d1d49d2f4060f13bdb4f451",
"assets/packages/noble_quran/assets/quran/13.json": "afdb134fbf1b3481cff9b48926ba911e",
"assets/packages/noble_quran/assets/quran/5.json": "0f7eec7fafb72a537bbe467253bf3958",
"assets/packages/noble_quran/assets/quran/88.json": "87ff29d8c2c81048d2ec774fdb6e7fef",
"assets/packages/noble_quran/assets/quran/75.json": "c5e3395fdf7406e44a416b39c24f9e2a",
"assets/packages/noble_quran/assets/quran/83.json": "e8ef5cd2c4a627b7abe2aec62ecbd2d7",
"assets/packages/noble_quran/assets/quran/108.json": "9f6ee830989b3c7dd32a177fcd3be28d",
"assets/packages/noble_quran/assets/quran/59.json": "c4b49b737b3c180a98a7d51d2d077343",
"assets/packages/noble_quran/assets/quran/82.json": "8a9c5f6f9ca4a1d390ec9be4a0422d3d",
"assets/packages/noble_quran/assets/quran/17.json": "aecb1899890a549ac66b453a96c531e5",
"assets/packages/noble_quran/assets/quran/109.json": "ff7cd2dc1c1a1e304a1da76aa2084489",
"assets/packages/noble_quran/assets/quran/29.json": "9582996674d6881e943b3d1b379f3178",
"assets/packages/noble_quran/assets/quran/97.json": "a52b8bce9a37cb6e5580d1b8613af951",
"assets/packages/noble_quran/assets/quran/113.json": "ef521093687e3dc27a1a090b57c6bc74",
"assets/packages/noble_quran/assets/quran/48.json": "c12521d18d1df273ead586c522b6f355",
"assets/packages/noble_quran/assets/quran/73.json": "d1f5e257167e56accd437bf69541d190",
"assets/packages/noble_quran/assets/quran/98.json": "a38a393c97f6a7a07a6eb39f1a4a3d24",
"assets/packages/noble_quran/assets/quran/11.json": "fe877fad819f62e17df77fb65907ba9d",
"assets/packages/noble_quran/assets/quran/54.json": "243e8ad22fea23b1e2f1a4f31c8c1c08",
"assets/packages/noble_quran/assets/quran/28.json": "c9744b098ddd6e089a9c6ec94e291664",
"assets/packages/noble_quran/assets/quran/26.json": "2d28b3a437ece132b0621b651192d3a2",
"assets/packages/noble_quran/assets/quran/87.json": "70f430fa8111ecd05b6034a24123145d",
"assets/packages/noble_quran/assets/quran/65.json": "20143b47a448773a9d99d8dbe3cd126d",
"assets/packages/noble_quran/assets/quran/32.json": "76aa03b4b96124ae4608106dc6b45c3b",
"assets/packages/noble_quran/assets/quran/31.json": "7618783ecb17f0fde49b7f1e6abb0ffc",
"assets/packages/noble_quran/assets/quran/40.json": "6b7a79abd6e0f152c1d2b1bf513acc85",
"assets/packages/noble_quran/assets/quran/16.json": "3fc6f8a6479d4ae60244c9a1351c1fb2",
"assets/packages/noble_quran/assets/quran/3.json": "7764d6160a46ac76fcb276e4383be647",
"assets/packages/noble_quran/assets/quran/30.json": "0b6a0bedcafdd67b8e984dcee5f56af3",
"assets/packages/noble_quran/assets/quran/90.json": "4def039b6223554a481eb4d652fd5864",
"assets/packages/noble_quran/assets/quran/25.json": "7f4d6b912b9c8ce97044421b715438a0",
"assets/packages/noble_quran/assets/quran/102.json": "ac37f1a5830c3c03e2068cbbab1b83c2",
"assets/packages/noble_quran/assets/quran/21.json": "9c3d9b31b68ed46004cbf1a2ab4858b0",
"assets/packages/noble_quran/assets/quran/81.json": "ed218171b062f38dce68c4615e4ff758",
"assets/packages/noble_quran/assets/quran/80.json": "4d82bf53b1198c64f2a2525db715bf6f",
"assets/packages/noble_quran/assets/quran/2.json": "34a7fd82fac44a5da936461edefa5a97",
"assets/packages/noble_quran/assets/quran/49.json": "1e5cc523f8cbfada807a4481d5218ab0",
"assets/packages/noble_quran/assets/quran-transliteration.json": "08ade0d482e30c0d29edbeb0f4027567",
"assets/packages/noble_quran/assets/reciters.json": "47ea987e541410829731604c75191e86",
"assets/packages/noble_quran/assets/translations/ml_karakunnu.json": "3e9c57aec3dc466cafc93bece38e2810",
"assets/packages/noble_quran/assets/translations/9.json": "bc66775d165f6c27f443851848aafb26",
"assets/packages/noble_quran/assets/translations/8.json": "b961fad3e0b9b1ff5ddaa4b76db18dda",
"assets/packages/noble_quran/assets/translations/0.json": "d34449949f837cddb9d9fbd23c098d94",
"assets/packages/noble_quran/assets/translations/7.json": "404f49660f684306115974ce8838310a",
"assets/packages/noble_quran/assets/translations/4.json": "73884327889a0b8a2e4ab04ffc879fce",
"assets/packages/noble_quran/assets/translations/6.json": "dcb52f42cb76499d178fc1b29984a5cd",
"assets/packages/noble_quran/assets/translations/ml_abdulhameed.json": "386741ffac5208f86b55eea668b17f83",
"assets/packages/noble_quran/assets/translations/10.json": "0b7cae0d8a25df4bb213a64cf5bbbede",
"assets/packages/noble_quran/assets/translations/en-abdelhaleem.json": "be9f9b6d3ae2399e0c826fa630d21bac",
"assets/packages/noble_quran/assets/translations/1.json": "c5bc45c120ba2aaa8493af923365c00e",
"assets/packages/noble_quran/assets/translations/5.json": "d823a0f617b48a6d54f6ff892a942cdd",
"assets/packages/noble_quran/assets/translations/sahih.json": "6520ee979eef02309d3d17225fab2d03",
"assets/packages/noble_quran/assets/translations/clear.json": "d54fc47aeb2a8e011bfe225097513bee",
"assets/packages/noble_quran/assets/translations/hilali.json": "d498a8839b94c3ec5f8a0e44ee8d8681",
"assets/packages/noble_quran/assets/translations/3.json": "f44734ddf22640332b62650776a9c1c2",
"assets/packages/noble_quran/assets/translations/2.json": "1b587aff04c42e35c02902d0b6104ff3",
"assets/packages/noble_quran/assets/translations/ur_maududi.json": "146ace7af5dde9823f7f2e4a688a1b6c",
"assets/packages/noble_quran/assets/quran-ar.json": "21dfe73c231a4b80f99733feee5a9288",
"assets/packages/noble_quran/assets/surahlist.json": "58d2d07ecb10f94be5afdff5709441c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "432be763bc5a188362810483cc5fb7e4",
"main.dart.js": "6ebe0d8235927dd9a4b478fc40871ab5",
"manifest.json": "f7c92554154931fdda34a58f860ff76c",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"index.html": "2fc908ae86fd271af407ad808c70dae1",
"/": "2fc908ae86fd271af407ad808c70dae1",
"icons/Icon-192.png": "6d629ecc0d4fd7d2f47a896cb6d6f77b",
"icons/Icon-512.png": "ddf0523e008a304434e47b4958854417",
"version.json": "8039c6da8299e229312510667f07da37"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
