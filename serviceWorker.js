const staticCache='staticv1';
const dyanamicCache='dyanamicv1';

const assets=['./','./pd.html','./pd.js','./pd.css','./activities.html','./activities.js','./activities.css'];

self.addEventListener('install',(evt)=>{
    evt.waitUntil()
    caches.open(staticCache)
    .then((cache)=>{
        console.log('caching assets...');
        cache.addAll(assets);
    })
});


self.addEventListener('activate',(evt)=>{
    evt.waitUntil(
     caches.keys()
     .then((keys)=>{
         return Promise.all(
             keys.filter((key)=>key!=staticCache)
             .map(key=>caches.delete(key))
         );
     })
    )
 });

 
 self.addEventListener('fetch',(evt)=>{
    evt.respondWith(
        caches.match(evt.request)
        .then((cahceRes)=>{
            return cahceRes || fetch(evt.request)
            .then(fetchRes=>{
                return caches.open(dyanamicCache)
                .then(cache=>{
                    cache.put(evt.request.url,)

                });
            })
        }).catch()
    );
})
