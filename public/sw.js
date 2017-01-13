var cacheName="simple-sw-v1";
var cacheFile = ["/index.html"];
// importScripts('serviceworker-cache-polyfill.js');
defaultGif = "https://media.giphy.com/media/OKWYoNoxTgQIU/giphy.gif";
fetch("/", {'mode': 'no-cors'})
self.addEventListener('install', function(event) {
 	console.log('instaled')
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      
      return cache.addAll(cacheFile);
    })
  );
});
self.addEventListener('activate', function(event) {
	console.log('activated');
  var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
self.addEventListener('fetch', function(event) {
	console.log('fetched')

  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      // return response || fetch(event.request);
        if(response){
        	console.log("Serviceworker found in cache", event.request.url);
        	return response;
        }
              var requestClone = event.request.clone();
        	     return fetch(requestClone)
        		  .then(function(response){
                  console.log('fetched response', response);
            			if(!response|| response.status !== 200){
            				console.log("service worker failed to response from fetch")
            				return response;
            			}
            			var responseClone = response.clone();
            			caches.open(cacheName)
                      .then(function(cache) {
              				  cache.put(event.request, responseClone);
              			  })
                  return response;
        		  })

        		.catch(function(err){
        			console.log("Some error while fetching and cloning", err);
              return fetch(defaultGif);
        		})
    })
    .catch(error=>{
            console.log("Some error while fetching and cloning outside", error);
            return fetch(defaultGif);
    })
  );
});
