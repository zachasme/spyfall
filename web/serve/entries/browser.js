var readyForMainLoad
if (location.origin.match(/localhost/)) {
  System.trace = true
  readyForMainLoad = System.import('capaj/jspm-hot-reloader').then(function(HotReloader){
    hr = new HotReloader.default('http://localhost:1338')  // chokidar-socket-emitter port
  })
}
Promise.resolve(readyForMainLoad).then(() => {
  System.import('spyfall').then(function () {
    console.log('ran at ', new Date())
  })
})
