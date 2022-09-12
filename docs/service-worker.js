importScripts("/assets/js/workbox-v5.1.4/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v5.1.4"});

self.__precacheManifest = [{"url":"/assets/css/prism.css","revision":"f996ac7d30bd5e3d45812be1222f45d3"},{"url":"/assets/css/theme.css","revision":"00d386c96629e8e5cfbebd8f1461c235"},{"url":"/assets/css/theme.css.map","revision":"e24ece0147996a02aebe8d2b33398a43"},{"url":"/assets/js/form.js","revision":"e3d6d112f46e9b41846c2093cd47a526"},{"url":"/assets/js/jquery.min.js","revision":"dc5e7f18c8d36ac1d3d4753a87c98d0a"},{"url":"/assets/js/lazyload.js","revision":"8dffb45dc6a0d1befff5298da03acbfa"},{"url":"/assets/js/lunr.js","revision":"07ee3b3e9e4a47a20a35fe6a94b11046"},{"url":"/assets/js/lunrsearchengine.js","revision":"58ff34cab06e8a66dc4df2e8e0385f58"},{"url":"/assets/js/prism.js","revision":"69cc8bab93e758aff5386a2c9265a871"},{"url":"/assets/js/sw-register.js","revision":"b949b1c1d4589a63885e8c6cec70510f"},{"url":"/assets/js/theme.js","revision":"ae1c3bc9d0a4367a78d9bdf70a814867"},{"url":"/manifest.json","revision":"86742588d22569562f04f830b5927e3f"},{"url":"/service-worker.js","revision":"767b6c46e34ad0e89fc5fea47f23f950"},{"url":"/assets/fonts/casper-icons.svg","revision":"240264149a475160ef8115aeda3cbafd"},{"url":"/assets/images/posts/acompanhamentos/PureDeBatata.webp","revision":"630bdcd66c071bf9c8f8e7c0bdc1e61d"},{"url":"/assets/images/posts/biscoitos/BeliscaoDeGoiabada.webp","revision":"f67c06a10949298b0681a043be555cb4"},{"url":"/assets/images/posts/biscoitos/BiscoitosAmanteigados.webp","revision":"b53768a796799801de5a7c7845acbfd6"},{"url":"/assets/images/posts/biscoitos/CookieDeChocolate.webp","revision":"bca28702d4e5c87613c3c412e5b9d3ed"},{"url":"/assets/images/posts/bolos/BoloDeCenouraComChocolate.webp","revision":"4d501aab6b1b9551b28aa3fa6f9c1e8a"},{"url":"/assets/images/posts/bolos/BoloDeChocolate.webp","revision":"48a218f3730515f6f7b4ef9785333283"},{"url":"/assets/images/posts/bolos/BoloDeCoco.webp","revision":"4b7109f2ee3a29a9ea935cb0811dd4de"},{"url":"/assets/images/posts/bolos/BoloDeFuba.webp","revision":"4c9b342f8a7e16ea38fd374cd43f6e5d"},{"url":"/assets/images/posts/bolos/BoloDeLaranja.webp","revision":"789ecae3b5a1ac75eeddbdf91e6d0c00"},{"url":"/assets/images/posts/bolos/BoloPaoDeQueijo.webp","revision":"e9433fec975b45b23c4edde29be22820"},{"url":"/assets/images/posts/bolos/BoloSimples.webp","revision":"b86e8097bcbbba74949a2d853f291085"},{"url":"/assets/images/posts/bolos/BrownieDeChocolate.webp","revision":"f4f3469ed75615d224434f5bd4598023"},{"url":"/assets/images/posts/doces/Cajuzinho.webp","revision":"e248e86a6252f2fa26e0db30ff0b73a0"},{"url":"/assets/images/posts/massas/MacarraoAlhoEOleo.webp","revision":"35af9e4c11d1da81ace62eafce4e6ae9"},{"url":"/assets/images/posts/massas/MacarraoDeForno.webp","revision":"c54928a3320a7d7895041d6cd6bdf4a7"},{"url":"/assets/images/posts/paes/PaoDeQueijo.webp","revision":"d500b0034d78f26769af8cf4ff8ab0ef"},{"url":"/assets/images/posts/prato-unico/ArrozDeFornoDeCalabresa.webp","revision":"8190271411df1ac3fa84d29089a3390b"},{"url":"/assets/images/posts/prato-unico/LinguicaAssadaComBatatas.webp","revision":"533a6f5c28ea4cdf2dbd111f8af9e6a7"},{"url":"/assets/images/posts/pudins/PudimDeFarinhaDeTrigo.webp","revision":"3c4e36fdd23574b0b9230ab9e5c46f93"},{"url":"/assets/images/posts/pudins/PudimDeTapioca.webp","revision":"7700dd3e983093d645bef7d6decf6aed"},{"url":"/assets/images/posts/pudins/PudimDeVinho.webp","revision":"ab54d3552787454bb2df920140ea2711"},{"url":"/assets/images/posts/salgados/CoxinhaDeFrango.webp","revision":"ed1c23bbbc88f3369e5aee006278166b"},{"url":"/assets/images/posts/salgados/Kibe.webp","revision":"308d876e4ee69d71e12b9f70c48f241b"},{"url":"/assets/images/posts/salgados/Pastel.webp","revision":"85c04f0f7aec2b01b060222b3f880eab"},{"url":"/assets/images/posts/tortas/TortaDeHamburguer.webp","revision":"499f1467c023526f9676bc17e0f39129"},{"url":"/assets/images/static/authors/luana.webp","revision":"959c7a8ad72df9e80871ed67ac1f5060"},{"url":"/assets/images/static/favicon.ico","revision":"eb25af972aaddef6cf034c358a8c6c40"},{"url":"/assets/images/static/logo.png","revision":"04c875163f140cce3f0cdddf7102769a"},{"url":"/assets/images/static/pwa/144.png","revision":"2fc9d01013e152bc619f87cb913da18f"},{"url":"/assets/images/static/pwa/192.png","revision":"29646b10ce374211706441d83aeac468"},{"url":"/assets/images/static/pwa/512.png","revision":"6ed3c41422cc6242fcaa2980f971cd63"},{"url":"/assets/images/static/pwa/96.png","revision":"49f490e0f060d211cc5af6e69493cc3b"},{"url":"/404.html","revision":"af5f7638e32e58d71ef04dde7c8b0b91"},{"url":"/about.html","revision":"3b24605729abe25538481748bfefee7a"},{"url":"/author.html","revision":"66cfa9381c654580430add73c5c4ff42"},{"url":"/biscoitos-amanteigados/index.html","revision":"d429c6f77818e55126e5e5fa47683123"},{"url":"/bolo-de-cenoura-com-chocolate/index.html","revision":"f7895a5e04668b2767b7b97b731b3f23"},{"url":"/bolo-de-chocolate/index.html","revision":"37bddaa9774a55d9e6601124baada870"},{"url":"/bolo-de-coco/index.html","revision":"e7be010cd6ca5bed3448998a849054c9"},{"url":"/bolo-de-fuba/index.html","revision":"7422ec2d2d3839fcf3cc9ce1baaf573f"},{"url":"/brownie-de-chocolate/index.html","revision":"083bc4d2ff06836ede8c2be7d2ae8d1d"},{"url":"/categories.html","revision":"0baa69ec9ff308b5a08cd35b29d7f6e0"},{"url":"/category/acompanhamentos/index.html","revision":"7f5ccb5f4fe9bd06dc30d196f7b27cd4"},{"url":"/category/biscoitos/index.html","revision":"d235e1dbb2e9c0b3481658340b0da865"},{"url":"/category/bolos/index.html","revision":"0db5c42c3d2443ab566b933c781a7e02"},{"url":"/category/massas/index.html","revision":"c79f69e34c51274058fd4c56a7c56930"},{"url":"/category/pudins/index.html","revision":"9db6417d4ba24cecedc481a234e642bb"},{"url":"/category/pães/index.html","revision":"f1fac7a67decaec961d459df35cbd91e"},{"url":"/category/salgados/index.html","revision":"20a501f027599b80850b5054935586dc"},{"url":"/contact-sucess/index.html","revision":"4a1d31b76c286e6d4fb34c724c9f27b0"},{"url":"/contact.html","revision":"6a830a3f41c773242716a259c3934996"},{"url":"/coxinha-de-frango/index.html","revision":"6c91de5b93dbc3b760c0e7f1708742e1"},{"url":"/google25008c19ca68a028/index.html","revision":"22e63471663425605aef3c361ba7a6d8"},{"url":"/index.html","revision":"bbc43eb404cb9ec36b1addcd495c22ae"},{"url":"/kibe/index.html","revision":"3e318e0caa8a68d7164d2239c9938e64"},{"url":"/macarrao-alho-e-oleo/index.html","revision":"6491383b1e90ae8888706c31582178d7"},{"url":"/page2/index.html","revision":"1229844652a46009c401f85ffafaf7a1"},{"url":"/pao-de-queijo/index.html","revision":"cc2e2c9c2cb9a4977bd4c8695a9deae8"},{"url":"/pudim-de-farinha-de-trigo/index.html","revision":"fbb024e69625bad4235e22e956d205e1"},{"url":"/pure-de-batata/index.html","revision":"a99b37e14aff1ad8e1bbfd6f20fa1bee"},{"url":"/tags.html","revision":"3a585f37d6091dcb391e941f89de5253"},{"url":"/pudim-de-farinha-de-trigo/","revision":"da2028d7a55d4b32958cd1d17c5d5548"},{"url":"/pao-de-queijo/","revision":"fbb73c47f25729217d9fdb73eae446ed"},{"url":"/macarrao-alho-e-oleo/","revision":"0f9b429009846fa5b0fbe5741bbad7c5"},{"url":"/kibe/","revision":"c974a5346f347fbac5f969b60f143fb7"},{"url":"/coxinha-de-frango/","revision":"c4a8fea4c3e6b882040be729d2ee4adf"},{"url":"/brownie-de-chocolate/","revision":"9652b8245f3eed1ad8641df81c4c3a48"},{"url":"/pure-de-batata/","revision":"a249c7d94bbdf21da8c45fdd29880771"},{"url":"/bolo-de-coco/","revision":"e2d21861ed45165ded1593a21f293a62"},{"url":"/bolo-de-chocolate/","revision":"98c0beb1df693d89102780e9544a5763"},{"url":"/bolo-de-cenoura-com-chocolate/","revision":"f35c3b5bb18238e11f66451f43f79349"}];

// service-worker.js

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'receitinhas',
    suffix: 'v1.0',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `NetworkFirst` strategy for html
workbox.routing.registerRoute(
    /\.html$/,
    new workbox.strategies.NetworkFirst()
);

// use `NetworkFirst` strategy for css and js
workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.NetworkFirst()
);

// use `CacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(images|img|icons)/,
    new workbox.strategies.CacheFirst()
);

// use `StaleWhileRevalidate` third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    new workbox.strategies.StaleWhileRevalidate()
);
