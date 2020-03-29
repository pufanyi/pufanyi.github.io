/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/20180524模拟赛-word/index.html","590ae5cbf7ac2488f428bbbf9a8492fa"],["/20190409模拟赛T1/index.html","d2b3822ce32b9462e32e4f25d0fe10f5"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","211b6fbc9936d2f6cbfda87613351946"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","6ac03503582f1c41e284e870c102dd3f"],["/CF1045B/index.html","7399020134e2d4a3eaf14c8d036adce6"],["/CF1137F/index.html","87592798e2f19c196092c45534b7ae72"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","1f13222f9cf8b5354f9363794200e1a7"],["/CF1264D/index.html","ddf2c02e17320b837328838b79ea40ac"],["/CF1288F/index.html","769f1d937ad6dc828f60053d2874ce62"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","13aa85b66743ee719c2a690ce58aeac9"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","c902d17b378f96b6c8cc94ab68b92424"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","080a2c1420afc04fa3d3add64346f633"],["/CF449C/index.html","3cfd399bf9a5d1b094df77eb4abbbbf6"],["/CF512D/index.html","312bdcb621800280073d35017c1512ee"],["/CF516D/index.html","50f2a89c6e19c2aaa45f0e94eea3a40f"],["/CF551C/index.html","82aabde31f17bc414a6f1b8be76290c3"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","5a969de551571fef4aef56a213e64394"],["/CF576D/index.html","7104efbfc7911056a5975d720ceba923"],["/CF708E/index.html","a55cdda0140e28c4548595186651a54c"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","002f904e1a096878cd124a6d17aebb20"],["/CF875E/index.html","c12969ef4f6e28841765cc4b932dd452"],["/CF986B/index.html","abba931c9b12d2ab87509c192268da41"],["/CSP2019后做的一些题/index.html","c6c96c5e1d2f9cc626fa1b78780e9e5d"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","a309347678f3ac35d5def59da95e2f20"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","f1bcbad8fffa77e80b6ff85c00098f8c"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","f8d3760d26c225d29a150dd4d9437205"],["/SP1026/index.html","a13fe2eb2c281300817952c56a4b725c"],["/SP4063/index.html","156c7a2436ad50707efe3e4e482c17b5"],["/UVa11600/index.html","636a584099acff82f308ce37f9e87cc3"],["/UVa12421/index.html","a12f4a0b32c4c71d5652723249a7e26a"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","09cff405332dae820a2744d41e5580f3"],["/[HEOI2015]公约数数列/index.html","100fe8355129e5fc2d1ea780a2ccf00f"],["/[北京省选集训2019]图的难题/index.html","38a0c7d811c466f4fb3a519379a4fbad"],["/about/index.html","d5c3ff1564d64caf9a4be3c2f8e6cd7a"],["/agc005_c/index.html","037ee8eb05e3f244bf54e57905bfd1d5"],["/agc006_f/index.html","dc5f05d5fad6fb036139125bb672e4f5"],["/agc012_d/index.html","9c16125d9b79e73eb32eeb518603bde8"],["/agc013_c/index.html","b3de7bf39160c41e9edce54f56933b39"],["/agc014_d/index.html","a161aa66c7ea6733d6cb09bad6969a5e"],["/agc024_d/index.html","b847ad78b7a9f7fa750b7a30a0eb3219"],["/agc029_f/index.html","92d82b4aa5c9264c9a4fc4dfacdce7ac"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","ce939728c967d30c61ea501491b9b24a"],["/agc041_d/index.html","8c517b6fae9ab290ae69dc43926ae1d1"],["/agc041_e/index.html","f840c4ac12b4fb19fd4decb5bdd847ed"],["/agc041_f/index.html","9319ecfdb9aee5d3b93ae352403fbeea"],["/arc068_c/index.html","148f7beb4af1443aead91ecf9d7ce47a"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","02176c3e233e7bc028f82ed68a73dbd7"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","db0051a5d1a363f271c9ddf624588b37"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","5b8d4a734d841244960b853e5d774597"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","478b204bf331e233d911ef1bc2c7421d"],["/archives/2018/11/index.html","8c06e59bfacfdc62a800240fa72a622a"],["/archives/2018/12/index.html","ae13d1771a01dfb01e8af6243e3ae6c9"],["/archives/2018/index.html","0b6de14f3afcab19e9cbe8fd0ff8d924"],["/archives/2019/01/index.html","d61374998fa2dfadd9b198b1c2f109e1"],["/archives/2019/02/index.html","5c550ab58e049dbf034ce224510ecd62"],["/archives/2019/03/index.html","a9b14036c69bdc0726bdb59c753a8873"],["/archives/2019/04/index.html","95a42c5a451f6e71f1ec23b8f6c8c63a"],["/archives/2019/08/index.html","7564eef03d8c77ec62fd7582acb3cbfc"],["/archives/2019/09/index.html","27421c2650f7a46c89f1edd802bf4a72"],["/archives/2019/10/index.html","16f9fbbf6444b0155a5d535481017aca"],["/archives/2019/12/index.html","c92c891c3ec17e5ca9ec3d19434843bd"],["/archives/2019/index.html","3aa98c6e0d88b87fe857d7b2550c9d51"],["/archives/2019/page/2/index.html","0f79926836935726fee89af269884f37"],["/archives/2019/page/3/index.html","79eeb3a2b73c2968a98dd40a559edfd2"],["/archives/2019/page/4/index.html","df83bfc08e7bf57a2b03911c6cfb3bfe"],["/archives/2020/01/index.html","05dee04271d4420c3d38e711616b5008"],["/archives/2020/02/index.html","bac69ba18978d1b763b0f3b3bf022371"],["/archives/2020/03/index.html","1f13e02349ebfc55fbbf6ba40739b31e"],["/archives/2020/index.html","48618d55f973262f74e40f317b832134"],["/archives/2020/page/2/index.html","6ae37800f214bab237f6ee75a0764026"],["/archives/index.html","dabdbd7fe7b6279bdc1110ba93d6ec44"],["/archives/page/2/index.html","10d2053a4bbd9d8c9b69c5db33ad8456"],["/archives/page/3/index.html","10d2053a4bbd9d8c9b69c5db33ad8456"],["/archives/page/4/index.html","10d2053a4bbd9d8c9b69c5db33ad8456"],["/archives/page/5/index.html","10d2053a4bbd9d8c9b69c5db33ad8456"],["/archives/page/6/index.html","10d2053a4bbd9d8c9b69c5db33ad8456"],["/archives/page/7/index.html","10d2053a4bbd9d8c9b69c5db33ad8456"],["/categories/index.html","05285df93a1a7403ade4f4cdf5f0a4d3"],["/categories/出题/index.html","397687d20570d33ea467eb4160e9179f"],["/categories/小小结/index.html","de78f42d3e0b72a43e024dbd437309f5"],["/categories/模板/index.html","e68b373b363a0607a99d2fc12e116a80"],["/categories/毒瘤/index.html","57a5add1533495e8512adca32b1e71b3"],["/categories/随笔/index.html","905290868b0d7effe301cf70f5ece224"],["/categories/题解/index.html","4b9c727b04e8afae163a70440a0caccb"],["/categories/题解/page/2/index.html","85168827c37cc24a74d66902e72e71a6"],["/categories/题解/page/3/index.html","907dbe016b03d285db70875303166110"],["/categories/题解/page/4/index.html","29c511dd24d4d275e6642d54c8df681a"],["/categories/题解/page/5/index.html","2de99537dd631b9f3ab5f69db53af0ae"],["/cfdpproblems/index.html","19f73f0f394582aecb54e2500063ca0d"],["/css/style.css","fd7e80f2066543cb41f79be540407b59"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","a36458e1875bc1d2431255188ddc017b"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","91544e9863bb19be81e3d8dc22088916"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","a15fba53224029de4df751baf557bd51"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","c83a470c48a6c3ba6d11e8db892443b2"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","79a4e01ea271440362672c35551af2ab"],["/js/search.js","efdd5978406d605cdb2ef636992edc53"],["/js/valine.js","5a8fc8df7e0a1b0b693d9dee1a406fb0"],["/page/2/index.html","0e7c4788e743d0f4d06e725855afee20"],["/page/3/index.html","539bf3203bd32bac51bd54b5a33dd829"],["/page/4/index.html","93189dbaf5521b0e2918f3e53bf22ed0"],["/page/5/index.html","e46ec5efb39df50ed35723f18d32c633"],["/page/6/index.html","bc680018990ae854998d62781aee23ef"],["/page/7/index.html","eb8aedca46a0267038ca42d54133f283"],["/schedule/index.html","101eb29c963b23e68b8df08448e8b826"],["/simpson/index.html","17f56d4dcb1f0691d64263fc8e2202d8"],["/sitemap/index.html","c349ea2dec6637b0d05ad97b877c70e0"],["/tags/AtCoder/index.html","6ad550b3706a58fa379120105428ac04"],["/tags/AtCoder/page/2/index.html","9d59870a5082e2ea15112ec3070dc258"],["/tags/CodeForces/index.html","8833093af8aa30abaa94e709f56d6a57"],["/tags/CodeForces/page/2/index.html","9c65bcff358539722a28de2cf98a6b84"],["/tags/CodeForces/page/3/index.html","de60a51aea941ef0c857bda2e50b24e6"],["/tags/DP/index.html","e94d3a4702fa6a6b7b854e4de07def32"],["/tags/DP/page/2/index.html","bda2d4719745e1e0534f5c5f5e70d16a"],["/tags/FFT/index.html","82222668903ee6ec91c72f3973284494"],["/tags/LCT/index.html","16b2f04fbd3c1fbf6b511b5b594918c7"],["/tags/Lucas/index.html","d597155fd054d6d207b0210ccf1fdcfb"],["/tags/SPOJ/index.html","b4b09e7bc48a5d3f165fef37e003efc3"],["/tags/USACO/index.html","ae4aaa71fded464a5e46ac690772e51e"],["/tags/UVa/index.html","bb9380fec306359cd39bfc8e787e48d6"],["/tags/ZJOI/index.html","0d56c0e800639abe94cde965a386b9fe"],["/tags/hash/index.html","88fab35d8ea4ac69e31d50d8835e2a86"],["/tags/index.html","b115ed9eae1a8712f95c9bb282931b26"],["/tags/two-points/index.html","2c5f7e844c2a617bbdba17bc650e1821"],["/tags/二分/index.html","cd05184c9b1963433cedcc75b5cde050"],["/tags/出题/index.html","0d77ba1114aa241a3ab9383b5942d527"],["/tags/分块/index.html","a4a2f57260f092aafeb793e8466f5c2f"],["/tags/博弈论/index.html","6b02d18c40785811681fc83f83a2599c"],["/tags/卡常/index.html","d8194736cd87e837010ae32ffa8474e2"],["/tags/图论/index.html","cca76ae7a341fc7086067e7c551e839b"],["/tags/字符串/index.html","dad36bd62f1effda74a1b627329a0611"],["/tags/并查集/index.html","dee9879139c06d003df4b04d3c7e88be"],["/tags/搜索/index.html","f98b0c86aa6dfc14e7626c4d7c65cfaf"],["/tags/数学/index.html","f312c774e8625592a938efb39d8b08a8"],["/tags/数学/page/2/index.html","ac31211c0079bd0ac0ae474db3399ef9"],["/tags/数据结构/index.html","7b637c70eb0950fbc2c8e9b9166171f4"],["/tags/数论/index.html","a1ef1bcedd7a99b256fb19aacea5eb6f"],["/tags/最短路/index.html","2c15d752be38515a44c94aba628da121"],["/tags/构造/index.html","ac92f08bc3949379373c0e2f93051cfa"],["/tags/树状数组-线段树/index.html","f0bc963a1c02cfa2e3813014fdf91d65"],["/tags/树的重心/index.html","d77f0f370d515ae9425651d27cb27772"],["/tags/模拟/index.html","90543e82d701600df3e2bfc0628f8bfe"],["/tags/模拟赛/index.html","716331fbe7f9b0795007888c73efab74"],["/tags/生成树/index.html","13428d4835053a1f26a0097e8a6183f9"],["/tags/网络流/index.html","4a15f513785233881447106dce34050f"],["/tags/记忆化搜索/index.html","494cf255e6e2fe5f7e0cb470cfccc609"],["/tags/贪心/index.html","9a357d67c74f547916c6a8c57a2fb362"],["/zkw线段树优化dijkstra/index.html","d1a0275ebc35de1f3554d1b024a351e6"],["/一道有趣的计数问题bywzp/index.html","5ab3713ef9d291957e89d94ccce0ae52"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","d940f5822cd29154dd135b6f26d142e7"],["/做题记录/index.html","4997e4c1b6e6711376fbc3d1f880efa7"],["/换个主题/index.html","3ee8472659d08281d4b08d958ea655c7"],["/整数分解求乘积最大/index.html","f4cb8aea28d4c6908f6926adfe5b7895"],["/毒瘤/index.html","8bde8e5ac70931affebadcb8b203465d"],["/浮点数开根/index.html","a69ec5858908976f9c8e8a40162161bd"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","8d96735e593fb6a65f153ac7e475958e"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","f997bbe4b9274af967af3dc501b75340"],["/第二次出模拟赛/index.html","55208290892acf40eac6427ad0df8b3a"],["/线段树入门/index.html","1f91d0bd1ef47fffd85259377d6bb616"],["/航空管制/index.html","05a94d49279879d70a349711b6ad0dd1"],["/造一棵树/index.html","9e6ff081f9b343dd48232da4778597a1"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







