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

var precacheConfig = [["/20180524模拟赛-word/index.html","d344c636b73d0f287f1e1f0e1256d112"],["/20190409模拟赛T1/index.html","ea3b9149a402fce7417aafbbe9869bf1"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","5b30c19c883625e9095e79b42954fb61"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","40e45ea66e0327346da768bf69a8ef6c"],["/CF1045B/index.html","522e99f4fc1f282d38967b67a6eeee16"],["/CF1137F/index.html","c401489d9454f661013cbd9ff7082c03"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","3957ef35b1ce9998f66da2d315a2a234"],["/CF1264D/index.html","a56f0419c2a4aa7696e58273bcc6cc39"],["/CF1288F/index.html","8a0d93cd03d0d90622a5deacfe95763f"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","a66e125507f200789f4792ff92f1a6b5"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","7a89ce93476007bf50be8701e254dfd1"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","9bcf56734303ee52e743859eab1399c8"],["/CF449C/index.html","af67152f58734a230b7fa04f082b813e"],["/CF512D/index.html","f0b6645e14ed25057680dec88a6d5a38"],["/CF516D/index.html","b8ba713dd01664d60a20bfa19dae1073"],["/CF551C/index.html","d3b14c0de61dfde0ce6186614abc44d3"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","bc2d53402ec878ebe5eef2de2be38323"],["/CF576D/index.html","5150a323cf34693914d1f83009ee945d"],["/CF708E/index.html","1e61eeba72fb6cd446379011d9446969"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","c6c4848cdb5e4fd91d8b873b9cd1c8ce"],["/CF875E/index.html","005485391ad24f5a52a87d755672b6b3"],["/CF986B/index.html","f98f3a8b1baf969dc3a740fa5030db57"],["/CSP2019后做的一些题/index.html","d6f3363fe10d778ad2a63569ac780cf1"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","e0ec6ec038ec7063d706829a38281817"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","67dc89cf48eba7cf383b4d561e6a4892"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","7b38e770ca5475bc73dff2247d2e061b"],["/SP1026/index.html","a43812cd6623d2fe578deb456e574698"],["/SP4063/index.html","43ea9ac875e1a655f5df882df32934d0"],["/UVa11600/index.html","6cb563708cdad9ded43441ff502487c1"],["/UVa12421/index.html","def52dc2845e9214443d315c695c5303"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","27496970f4d3e92bc65fe0aff9338ad2"],["/[HEOI2015]公约数数列/index.html","c9542aab9e4e6610fad17b2a5e7d5216"],["/[北京省选集训2019]图的难题/index.html","f7aa8d24e5726e63340d162728bb1786"],["/about/index.html","998a606a9a44934e6297685006701d2e"],["/agc005_c/index.html","b89cbc168e0447b1e03e173b566e42bf"],["/agc006_f/index.html","5912527a4c8eee3dcd51bece0a1906cc"],["/agc012_d/index.html","60f5379812df87f802ab9e67aa40abd0"],["/agc013_c/index.html","8f3de61a21f67d4425e1b52f079d3925"],["/agc014_d/index.html","1e0c35594250cc6f71be8667515562f0"],["/agc024_d/index.html","f949c2baa4b0bbc44c9bbb702a28e0a8"],["/agc029_f/index.html","6155365f8b5d0187809d1031830ce780"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","81324fc25c66c1cf24c352ed93ec5dd1"],["/agc041_d/index.html","e4e2b4e9b67649f1697094a8e9219f3e"],["/agc041_e/index.html","a7380ccffa43557725e69beb17e30524"],["/agc041_f/index.html","7755fe22441664e08f3fdd39027b9fa4"],["/agc043_c/index.html","02cfdf013fd1b7ef403d763d07b660d3"],["/agc043_d/index.html","40222f49da7d1813674ac2f7e5cb82d6"],["/arc068_c/index.html","34cc0130a2235f21efd5dbdbeffaadf7"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","53db0917e07827d590db580d2dfa9e72"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","0527b0f6543597151c5b10319a234d96"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","7cb0b32bbc437c24b1cc5b13e0e94785"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","b0c9a3f316c194081c3b1eb3155204c5"],["/archives/2018/11/index.html","ddad785ee955b810368d25562c5e7739"],["/archives/2018/12/index.html","45e6eb83ea6e1472cfae511c23cdb100"],["/archives/2018/index.html","ce58e2f96fa8eedd97adf99cf7aeec17"],["/archives/2019/01/index.html","678fe0e191e5eb4a1313e5b106999dc5"],["/archives/2019/02/index.html","2ff38eff53d66d371e294ffdf9083369"],["/archives/2019/03/index.html","bb3948feb8e810f019e0323fe25145e5"],["/archives/2019/04/index.html","7790e2abcedf6ee40e80688662a9dd1e"],["/archives/2019/08/index.html","08b338ecb91d76a4d2b2013a7285a700"],["/archives/2019/09/index.html","9072242479385a5830bcc44d00a4db06"],["/archives/2019/10/index.html","39c93a96f00ca8b208ecdf654f04e20e"],["/archives/2019/12/index.html","61f368b82c3a0697be8171f5eb5db4b1"],["/archives/2019/index.html","104007b2fbbdf5cbab0a3b99fbf7cd2a"],["/archives/2019/page/2/index.html","8cdfde17c74cc986c24c913788b63523"],["/archives/2019/page/3/index.html","4d9eb5fc79b692c1b030c8f00b8326e6"],["/archives/2019/page/4/index.html","bf5e7ed9b4e3eb598065273528755fa9"],["/archives/2020/01/index.html","4c97711460e7102c0f92577551685429"],["/archives/2020/02/index.html","dfaf3271040f72d421549181750df19e"],["/archives/2020/03/index.html","b57c60d28a30e0376ab330b1a3dabd00"],["/archives/2020/04/index.html","a06ac4c5990eb7fe3fdfef7b673a8e2c"],["/archives/2020/index.html","63bdd54c171d8242ec5d6f72c3ec6166"],["/archives/2020/page/2/index.html","3bf45ec497ff8e525aa96da56e53ce4e"],["/archives/2020/page/3/index.html","9d61a699d12fe55d6e5b7fc3bc98aa8b"],["/archives/index.html","dbe6ca723d59a000c605d81ccf6d72fd"],["/archives/page/2/index.html","e7976222edf39a00828723b2b7d74b76"],["/archives/page/3/index.html","e7976222edf39a00828723b2b7d74b76"],["/archives/page/4/index.html","e7976222edf39a00828723b2b7d74b76"],["/archives/page/5/index.html","e7976222edf39a00828723b2b7d74b76"],["/archives/page/6/index.html","e7976222edf39a00828723b2b7d74b76"],["/archives/page/7/index.html","e7976222edf39a00828723b2b7d74b76"],["/categories/index.html","55fc261e549cf1abeaaffc8f3fff44d4"],["/categories/公告/index.html","7fee38a3ed5c8a2ce43a6765ef3ef668"],["/categories/出题/index.html","a958e1e25ebf4dace555c5c1f801ab3b"],["/categories/小小结/index.html","59999608c4b39aff3a52782c6f8ec6cc"],["/categories/模板/index.html","7f6e8347b69b20a58db666d88db85090"],["/categories/毒瘤/index.html","91550e51d9b86b0a49147faaacbf66a1"],["/categories/随笔/index.html","30cdc776f3ae958ef9d41b345930957c"],["/categories/题解/index.html","51c1cf803638e95f4805ed6d48015fca"],["/categories/题解/page/2/index.html","c9405b62e9400919ec37fe6329259828"],["/categories/题解/page/3/index.html","6bb10630832becb9a73ebd05558232da"],["/categories/题解/page/4/index.html","ef486304e41db09a55b7d5d8e58c59e3"],["/categories/题解/page/5/index.html","f9e97cd295d72be39da00b7ad165b68d"],["/categories/题解/page/6/index.html","f022806fc2a31355e372577e36d39995"],["/cfdpproblems/index.html","84d6710feda70d27ed7e1e1292ce23db"],["/css/style.css","286f19eb6431141c33c459646d1ce93f"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","b47f71db7fcd9d5ea6d91fd33f9add41"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","05feb0039b819572fda004bdc210a7c9"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","2d3aae9dd5182daf92f0b93cd4bcebfc"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","3a1df7b7c2bf61480908cc043977e674"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","a2eccb2d63a8bd2b75da70f4f7c1b23e"],["/js/search.js","81c23620cd137dc28862e86e5bc6f841"],["/js/valine.js","35d183a806e561c7483060417c51bc60"],["/page/2/index.html","2912d6e4f53c4b03416dd700b8f7bd99"],["/page/3/index.html","4ff6ef25dbebace31e060ea05b843539"],["/page/4/index.html","f87f936a56c910f13857796715577672"],["/page/5/index.html","e32d9dd0510bab7e3664401f5ab61630"],["/page/6/index.html","108be3ebc56fd6aeec1b9dee450900f0"],["/page/7/index.html","e2c7d59c3621b82fb7829d232b7fadaf"],["/schedule/index.html","4ee9469e7e93022e702bc033ef190007"],["/simpson/index.html","1626d0887ad08b709bed8e47d0b21bbb"],["/sitemap/index.html","063248f0f9265dd5477d69cd3a02386c"],["/tags/AtCoder/index.html","8df4125d7c3c450c41d4f6af96daa215"],["/tags/AtCoder/page/2/index.html","cbe325145521d7b167c9e5abc6d80072"],["/tags/CodeForces/index.html","44ef7d06d31895b4e1714537c39868bf"],["/tags/CodeForces/page/2/index.html","f16f70893ab00f1f229f457210f99844"],["/tags/CodeForces/page/3/index.html","40aeefebd4556b43ac5cf414b978bdae"],["/tags/DP/index.html","fc1f504e918d68255acaa2f4c55ef44d"],["/tags/DP/page/2/index.html","f76272cce20444a82e960a1a093b8262"],["/tags/FFT/index.html","42495e563e503b862c1ba940d3f1391d"],["/tags/LCT/index.html","f5dfc25e29d13476ceaf94b2f69d4972"],["/tags/Lucas/index.html","315fe35db9dfa0650a0e123837971c10"],["/tags/SPOJ/index.html","fae4de4811eddd8d42668ff97d71e472"],["/tags/USACO/index.html","0a4684eb783ec921543538e364272374"],["/tags/UVa/index.html","bd59d6e0f11eefdb83963646745619da"],["/tags/ZJOI/index.html","0bacb1bd342f4add541340e5221fc5ab"],["/tags/hash/index.html","9dc3d7b03112fdf4d3cdbf55e897f8db"],["/tags/index.html","58b4e0e798c752522ffe84be9036de9d"],["/tags/two-points/index.html","5cde6d530f55ab938b00e1b5b4f95d17"],["/tags/二分/index.html","b031e4c1bab0d1b4a4c9b67966325c4a"],["/tags/出题/index.html","41f8a2e23fb6be05f77541f1a04540ec"],["/tags/分块/index.html","f6394e71370ed6e0f2d5ca0a4bed6d11"],["/tags/博弈/index.html","e51f30b92676c30e0325ef393b972338"],["/tags/卡常/index.html","b2f48fd51e6f5af33a5b4f4fede51b2b"],["/tags/图论/index.html","d99447985b5c2eb94813b5cb9ff1c868"],["/tags/字符串/index.html","3de1e4d6b2531a017ee4cc7b1776ef7f"],["/tags/并查集/index.html","5ef9ec01b7e2b768bf9f47b75a0bdc31"],["/tags/搜索/index.html","4010fede038667e200330f55eb879d1e"],["/tags/数学/index.html","0da10d4554feee0b56ae3e2ffaf584c3"],["/tags/数学/page/2/index.html","b33025400c6abc47c2de548638f30cee"],["/tags/数据结构/index.html","dc365686d7c38ecd6189e2e360aacdfa"],["/tags/数论/index.html","5f466e8db2d691880fb6147556b7a3ed"],["/tags/最短路/index.html","fe9ea1a6e29aa23eaf415674c298bbd8"],["/tags/构造/index.html","27cd1b1bf28a87642e128413180058d2"],["/tags/树状数组-线段树/index.html","fa3b6554fe2cca5a938cf7e444193171"],["/tags/树的重心/index.html","428fc3c35b9dd75ee1f032d3fb614265"],["/tags/模拟/index.html","02b742a2013bf7f4bb1f25b9e4af2e46"],["/tags/模拟赛/index.html","75e160847e5c75bd61666b75d5cf18e8"],["/tags/生成树/index.html","835100a3c8c9bc3304a0f21f24250bd4"],["/tags/网络流/index.html","e4417abd33c52fc660224b57d3aba9d2"],["/tags/记忆化搜索/index.html","7f05932bc0f394b789746e397a486521"],["/tags/贪心/index.html","cdfb824347ad9eba6560aae0c689bbe0"],["/zkw线段树优化dijkstra/index.html","a3ac4a859ed5111085cacf529bb059c2"],["/一道有趣的计数问题bywzp/index.html","18bb33c79b55f0a26827a84cb8f3bd49"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","740f2c4d8bd570be5657c445c41bb636"],["/做题记录/index.html","05b3eae8e208e634079af2d2816c8570"],["/换个主题/index.html","bdffaebfdd51e73b005f423a7e3bb91d"],["/整数分解求乘积最大/index.html","886423d885b89c53ae0f092069746611"],["/毒瘤/index.html","9ab768d10e77e99d283178d3279cab65"],["/浮点数开根/index.html","adadf0259948ea8f4144d2db89db3774"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","c70e6438ae0f7e1f6cb33a6aec279a2c"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","1dcde975a16599efec040571ee33fac9"],["/第二次出模拟赛/index.html","acc7e98f309aa4e30588e807ff66fedf"],["/线段树入门/index.html","dc0955a2cd317d5c208cbbdaf01e1fc5"],["/航空管制/index.html","9a7f92565674e9a5e745f9d1237e78ae"],["/造一棵树/index.html","1991e32bd989f91f324ce1f6f29a61bd"]];
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







