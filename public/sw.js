let cacheName="simple-sw-v1"
let cacheFile = ["/index.html"]
defaultGif = "https://media.giphy.com/media/OKWYoNoxTgQIU/giphy.gif"

self.addEventListener('install', event => {
    console.log('instaled')
    event.waitUntil(
        caches.open(cacheName)
        .then(cache=> {return cache.addAll(cacheFile)})
  )
})

self.addEventListener('activate', event =>{
    console.log('activated')
    let cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1']

    event.waitUntil(
        caches.keys()
        .then(cacheNames=> {
            return Promise.all(
                cacheNames.map(cacheName=> {
                    if (cacheWhitelist.indexOf(cacheName) === -1) 
                        return caches.delete(cacheName)
                })
            )
        })
    )
})

self.addEventListener('fetch', event=>{
    console.log('fetched')

    event.respondWith(    
        caches.match(event.request)
        .then(response=> {
            if(response)
                return response
            
            let requestClone = event.request.clone()
            return fetch(requestClone)
              
            .then(response=>{
                if(!response|| response.status !== 200)
                    return response
                
                let responseClone = response.clone()
                caches.open(cacheName)
                .then(cache=>cache.put(event.request, responseClone))
                return response
            })

            .catch(err=>{return fetch(defaultGif)})
        })
        .catch(error=>{return fetch(defaultGif)})
    )
})