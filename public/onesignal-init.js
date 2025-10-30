window.OneSignalDeferred = window.OneSignalDeferred || [];
   OneSignalDeferred.push(async function(OneSignal) {
     await OneSignal.init({
       appId: "c8b1aa7c-66f2-4778-9749-1a11d4c2a670", // <-- Metti qui il tuo App ID
       serviceWorkerParam: { scope: '/aiutatemi/' },
       serviceWorkerPath: '/aiutatemi/OneSignalSDKWorker.js',
       path: '/aiutatemi/',
     });
   });
