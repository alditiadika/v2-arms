const cacheName = `${process.env.APP_NAME}-${process.env.APP_VERSION}`
console.log(cacheName)
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
        window.location.hostname === '[::1]' ||
        window.location.hostname.match(
          /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
)
export default () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = '/sw.js'
      if (isLocalhost) {
        checkValidServiceWorker(swUrl)
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
                            'worker. To learn more, visit https://goo.gl/SC7cgQ'
          )
        })
      } else {
        registerValidSW(swUrl)
      }
    })
  }
}
const checkValidServiceWorker = (swUrl:string) =>{
  if(process.env.NODE_ENV === 'development') {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister().then(() => {
        window.location.reload()
      })
    })
  } else {
    fetch(swUrl)
      .then((response:Response) => {
        if (
          response.status === 404 ||
                  response.headers.get('content-type')?.indexOf('javascript') ===
                      -1
        ) {
          navigator.serviceWorker.ready.then(registration => {
            registration.unregister().then(() => {
              window.location.reload()
            })
          })
        } else {
          registerValidSW(swUrl)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
const registerValidSW = (swUrl:string) => {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration:ServiceWorkerRegistration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing
        if(installingWorker !== null) {
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                if(!isLocalhost) {
                  const isClearAllCaches = window.confirm(
                    `Hoooraaay!!!, New update available for current version (${
                      cacheName}). Click "Yes" to clear all caches (you must re login)`
                  )
                  if(isClearAllCaches) {
                    localStorage.clear()
                  }
                  console.log(
                    'New content is available; please refresh.'
                  )
                } 
                window.location.reload()
              } else {
                window.location.reload()
                console.log('Content is cached for offline use.')
              }
            }
          }
        }
      }
    })
    .catch(error => {
      console.error('Error during service worker registration:', error)
    })
}