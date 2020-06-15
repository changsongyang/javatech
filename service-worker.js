/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "02b865c2ccbda156de1685c047b50ed8"
  },
  {
    "url": "assets/css/0.styles.b1ca5b54.css",
    "revision": "71f8c74baf04b5fc54db0bd965e74a91"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8f36aa81.js",
    "revision": "934e4cd05157b2a8cbf09e68f6e1f7ca"
  },
  {
    "url": "assets/js/11.1776e3d4.js",
    "revision": "20bb923159d6e769badd0c911b86c339"
  },
  {
    "url": "assets/js/12.9d4dc7b3.js",
    "revision": "464abcef11e010c2e5097fc832944f9e"
  },
  {
    "url": "assets/js/13.d3d1e272.js",
    "revision": "64c2bf80751a15ff372e1683433b44ec"
  },
  {
    "url": "assets/js/14.1ab0cf52.js",
    "revision": "a7be259577d6f1654c665c1615abed3b"
  },
  {
    "url": "assets/js/15.dee17285.js",
    "revision": "863f3fc80e08d78104ec22e9fb242c70"
  },
  {
    "url": "assets/js/16.11ae99a2.js",
    "revision": "c5eda6d3d211dcb445ae4748432713f4"
  },
  {
    "url": "assets/js/17.b399c85b.js",
    "revision": "40665dfed7eab05a6e61ef07564dcecd"
  },
  {
    "url": "assets/js/18.0bf48b0c.js",
    "revision": "641eea10c8843dd5cc587182ee1affb0"
  },
  {
    "url": "assets/js/19.7a147eac.js",
    "revision": "83f44dcc791053810421da3641870da2"
  },
  {
    "url": "assets/js/20.e0acbaf9.js",
    "revision": "2e56a574dd3569906dfd46db813ff308"
  },
  {
    "url": "assets/js/21.b48ccc1a.js",
    "revision": "928ad21026ecb95dc9d0119f18b4bd2d"
  },
  {
    "url": "assets/js/22.475b3b70.js",
    "revision": "531f0c73def140033d2563916d1641b4"
  },
  {
    "url": "assets/js/23.98d63fac.js",
    "revision": "97a408159ae13781c05cfb15fc5328fc"
  },
  {
    "url": "assets/js/24.c4eef5b6.js",
    "revision": "1385fffa830409e4d92be8f6e02021f6"
  },
  {
    "url": "assets/js/25.cc32c9da.js",
    "revision": "ee1e0e86feae9a4c74a7102e0e006cf7"
  },
  {
    "url": "assets/js/26.0e0a97f2.js",
    "revision": "c6fbd7a5f231858ee39b8caa465aeda5"
  },
  {
    "url": "assets/js/27.d767f58a.js",
    "revision": "9f69583249a1df9a56b3dd4b0def31d6"
  },
  {
    "url": "assets/js/28.c5c0f060.js",
    "revision": "7bb5a843b3c80ead9a0d7c1f310a8fd9"
  },
  {
    "url": "assets/js/29.72fef2e0.js",
    "revision": "06f7ee4233ec2200068575307a3e09c9"
  },
  {
    "url": "assets/js/30.60aae657.js",
    "revision": "9b350f2cd0db205ec3e5e145c954c7b5"
  },
  {
    "url": "assets/js/31.0c1d9fd4.js",
    "revision": "90e85612a8ba9e946acd6b285fee309d"
  },
  {
    "url": "assets/js/32.920510bf.js",
    "revision": "054da264d5cc01e1a200c4e663fcd2f1"
  },
  {
    "url": "assets/js/33.776edd4c.js",
    "revision": "446a675447740120059ae99253430923"
  },
  {
    "url": "assets/js/34.55d4431e.js",
    "revision": "c8877dda991fdf29cd592d0aff8b4bb1"
  },
  {
    "url": "assets/js/35.65fe4d27.js",
    "revision": "63a0db53a7279e61745c92d57f464973"
  },
  {
    "url": "assets/js/36.dd76e530.js",
    "revision": "5765a7c7c248528e3e62c134f63069ec"
  },
  {
    "url": "assets/js/37.efc4b8c5.js",
    "revision": "6e5ef2843448a5053ff2fe956b7274b5"
  },
  {
    "url": "assets/js/38.3c8d26c2.js",
    "revision": "b43abff8532ac49bb4162e1be810a950"
  },
  {
    "url": "assets/js/39.147c5504.js",
    "revision": "2a7ddc0b22f3f19970c49d3ba478fd54"
  },
  {
    "url": "assets/js/4.bd97725c.js",
    "revision": "08613a548c66ed1199b0466608447ab9"
  },
  {
    "url": "assets/js/40.790b906a.js",
    "revision": "96e13988bf4a4e7384f2895d04169a3d"
  },
  {
    "url": "assets/js/41.e499f874.js",
    "revision": "a9aa35ac9935413c1c9ed1279a8037ca"
  },
  {
    "url": "assets/js/42.a0d65f74.js",
    "revision": "cb688167257ef4abf03dfc0aeae55332"
  },
  {
    "url": "assets/js/43.3621c817.js",
    "revision": "18e0cb20c6392a6984ae2fb5d4b5d89c"
  },
  {
    "url": "assets/js/44.29375e1f.js",
    "revision": "be858a0199b429e59c3a13dfe20303cf"
  },
  {
    "url": "assets/js/45.eaa00c50.js",
    "revision": "0c618b41d38e9174780b2c95680370cc"
  },
  {
    "url": "assets/js/46.aaba9765.js",
    "revision": "f710f7b39adb16132ee3e5fa5f80b706"
  },
  {
    "url": "assets/js/47.689d1c8a.js",
    "revision": "ad69a385364aed7c0fd5c2a0d056612d"
  },
  {
    "url": "assets/js/48.38506299.js",
    "revision": "b4f9d3a4b4dd9429dd7e2b524d0b47fb"
  },
  {
    "url": "assets/js/49.18e1fe7f.js",
    "revision": "35650ce5ac9721ff8420ab77df482e13"
  },
  {
    "url": "assets/js/5.c338e437.js",
    "revision": "977df4254a571ea54595bc5067f5ad49"
  },
  {
    "url": "assets/js/50.d8f4cfe2.js",
    "revision": "d848b908af0ad18cd5a8407b27a39c4c"
  },
  {
    "url": "assets/js/51.b2e31e30.js",
    "revision": "39dc386f3ad65fb94409b6065a40e734"
  },
  {
    "url": "assets/js/6.bdd9d1ec.js",
    "revision": "a9ef2316ff5b44628242a27dcdc25cb2"
  },
  {
    "url": "assets/js/7.9e1f57f7.js",
    "revision": "6eaf4ff355d9d47917138cff30c028f7"
  },
  {
    "url": "assets/js/8.4ed351c2.js",
    "revision": "d0104ba118ed3d8e6c41e59af274f011"
  },
  {
    "url": "assets/js/9.1e385419.js",
    "revision": "cf5e5aac6b9fcad3b24e6929eaf2df7d"
  },
  {
    "url": "assets/js/app.f76efadf.js",
    "revision": "7d21c469d9b6540484e2c0590209686d"
  },
  {
    "url": "assets/js/vendors~flowchart.0faa5ee3.js",
    "revision": "bc7fea975a76ce449937af951712aec5"
  },
  {
    "url": "assets/js/vendors~notification.9d6c9654.js",
    "revision": "d6ac604e967948462bdb489a24fe79b5"
  },
  {
    "url": "cache/cache-interview.html",
    "revision": "2beb22db34b573cc6eaa6ada04a631c4"
  },
  {
    "url": "cache/CacheInterview.html",
    "revision": "425d8bce7862991b0a8ba45b603d3994"
  },
  {
    "url": "cache/Caffeine.html",
    "revision": "0aec0d08b1e4fc62d3656b4fabead2bf"
  },
  {
    "url": "cache/Ehcache.html",
    "revision": "e1656854826d428c6edb8200bb363f7d"
  },
  {
    "url": "cache/index.html",
    "revision": "9b457d395446fc092efc3643a66c02a8"
  },
  {
    "url": "framework/index.html",
    "revision": "b5bd3f55a2f3ce5711da68ad7235133f"
  },
  {
    "url": "framework/mybatis.html",
    "revision": "13dfbebcc38d8b425c4bc288a7b6593e"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "6f11ddbd54a6a3080e79aa11470daf4b"
  },
  {
    "url": "lib/bean/dozer.html",
    "revision": "97704a431421135406cee0762a224feb"
  },
  {
    "url": "lib/bean/lombok.html",
    "revision": "c2c4ff4eed74e389738355c93dc5b0f0"
  },
  {
    "url": "lib/index.html",
    "revision": "147ccdfb5289079cb200ff7d59b494bb"
  },
  {
    "url": "lib/javalib-log.html",
    "revision": "e6272713cdaada4f8f5594b74d9dba9c"
  },
  {
    "url": "lib/javalib-util.html",
    "revision": "1f22042fd12b322d03d7f480945a7d6b"
  },
  {
    "url": "lib/javamail.html",
    "revision": "4a5b69ae522fe56fefbfe217d94eeae1"
  },
  {
    "url": "lib/jsoup.html",
    "revision": "bcca2d09442b264cd83ccf51734e7a1f"
  },
  {
    "url": "lib/reflections.html",
    "revision": "4eacadaf6d3271cd4a7e69e524ff1f40"
  },
  {
    "url": "lib/serialized/index.html",
    "revision": "cf1ed9c61c5d4706b553df906de89cbb"
  },
  {
    "url": "lib/serialized/javalib-binary.html",
    "revision": "185df2856f6bc62f9083798d0de269eb"
  },
  {
    "url": "lib/serialized/javalib-json.html",
    "revision": "bdbaa45b32dfb1d9f48c4c6d32b442d8"
  },
  {
    "url": "lib/template/freemark.html",
    "revision": "8652a27a25b7b6335079d11b6a06d91a"
  },
  {
    "url": "lib/template/index.html",
    "revision": "4823c0604f5ccb0ec0758f1cd5c4033f"
  },
  {
    "url": "lib/template/thymeleaf.html",
    "revision": "1b76b4119c0583826da75d1d394fc710"
  },
  {
    "url": "lib/template/velocity.html",
    "revision": "e03f841ad8084f3a943cd00dc2139b2c"
  },
  {
    "url": "lib/thumbnailator.html",
    "revision": "45f431de42d6c2d50f50a518dbbebf1d"
  },
  {
    "url": "lib/zxing.html",
    "revision": "d3deeeac79f1f379fbf34f9601f72f8e"
  },
  {
    "url": "mq/activemq.html",
    "revision": "a45c8b464f1062a184a0631e28b413d5"
  },
  {
    "url": "mq/index.html",
    "revision": "337d351e7b8d9f5a3250e70f380a5635"
  },
  {
    "url": "mq/mq-interview.html",
    "revision": "7d67928a507522add310439f5f0dca6d"
  },
  {
    "url": "mq/rocketmq.html",
    "revision": "85367f7f2fd017a7fbf8ed20a86737db"
  },
  {
    "url": "security/index.html",
    "revision": "e65833f2e7c5a4ec1023fafc6401700f"
  },
  {
    "url": "security/shiro.html",
    "revision": "d0955e707b6b3fff95089dc328598541"
  },
  {
    "url": "security/spring-security.html",
    "revision": "644d0ea88aee09720b6139c3f464fc6c"
  },
  {
    "url": "server/index.html",
    "revision": "3f8a211f62111513b8a61ea502dcc5d0"
  },
  {
    "url": "server/jetty.html",
    "revision": "2013b7eebf2c5a764cabe251430be80f"
  },
  {
    "url": "server/tomcat.html",
    "revision": "4b1550c16d2d7d83c1daabacb7c5244b"
  },
  {
    "url": "soa/dubbo.html",
    "revision": "4f0a484d6b28009fe967591ce030ea88"
  },
  {
    "url": "soa/index.html",
    "revision": "19cdc85a4f5dda8240d8dbb85d119808"
  },
  {
    "url": "soa/netty.html",
    "revision": "ed97f6cd4818feff85db5cc97699afd7"
  },
  {
    "url": "test/index.html",
    "revision": "15609030e0863f7df39e134c8b733a8a"
  },
  {
    "url": "test/jmeter.html",
    "revision": "9361987d39d2b84307ab73eaa2754d06"
  },
  {
    "url": "test/jmh.html",
    "revision": "13b1ae01f1887a89c824d72ba9b511d1"
  },
  {
    "url": "test/junit.html",
    "revision": "38ef5141c8606bf3fe3cbd07b7283b46"
  },
  {
    "url": "test/mockito.html",
    "revision": "05262712fea5ec6a8fe5d9b75bb7d81e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
