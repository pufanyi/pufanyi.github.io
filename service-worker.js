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

var precacheConfig = [["/20180524模拟赛-word/index.html","2b16700aa4c95b184b27bfb0932b8763"],["/20190409模拟赛T1/index.html","a023ed66137773635136b55f5774e87a"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","15346633b071b0caf118a4938ce4b501"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","6a495270635c46dec362741165ffc2ba"],["/CF1045B/index.html","244d8d899315b63034c3279ee845c9f6"],["/CF1137F/index.html","d43b15562cd28ab56c14d89259ecbc47"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","233d56a60d8bd1fa3b88bb7e9f21ed47"],["/CF1264D/index.html","bb78d41fc0b318bf9d900e273918eec2"],["/CF1288F/index.html","94772ec100224137f93065269055ff57"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","da4f899dd5032e4122ae137e64369e26"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","3f8254135d42737ee7c0f1dda4f1a925"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","34430ee929414023278af990750de1c1"],["/CF449C/index.html","dba17339e3c34d6b165cce0157bec8ac"],["/CF512D/index.html","269df30e302850237e1f59b6c799811c"],["/CF516D/index.html","322908c8ce77ba5141b6d7e7bd389adf"],["/CF551C/index.html","9f8211150a6ef736a1789ca102dbda0f"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","267c48c90f9f50aa045737d57571bb62"],["/CF576D/index.html","473334f2c02148d0c374fecca1ac113f"],["/CF708E/index.html","24d91e2d0551cb81df189de4845e7df0"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","f45afa77def28ffae9857784807ac108"],["/CF875E/index.html","8f6b5bc190116d780d40a9d60690b814"],["/CF986B/index.html","799808958c1f38d19449ba92c83ade69"],["/CSP2019后做的一些题/index.html","0260b36e85b7ea3096a16f70245ee5cc"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","fb656f290ebbdcc91a209412ec4c824a"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","9e4b6609a342fe3c7743bab286a386a0"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","ba78cbd30bbe22f65209935e6249677d"],["/SP1026/index.html","44e04fcb04433d95a6d482d1c56bf22a"],["/SP4063/index.html","9865e3355638185c7a41e744edb4fbd0"],["/UVa11600/index.html","f39837eef6fdaeff7ea85ec3849fc8fc"],["/UVa12421/index.html","36f32564e9af0ea536be924076fe360e"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","0a89b0735abd333a4b81468b34c62d22"],["/[HEOI2015]公约数数列/index.html","a1b38ad0fea15a3c30a22edadd408b0b"],["/[北京省选集训2019]图的难题/index.html","b78cefa2f0abc3a5112d92449694436b"],["/about/index.html","5aa9e9085f7425390ae8d5bba77ebf7b"],["/agc005_c/index.html","9c6e2a75b3a544b71d0baf2e04d0b0b2"],["/agc006_f/index.html","947a3475fc98c58336e6471790014e79"],["/agc012_d/index.html","8e45ada3c51a2ff5fdf9c1bb86b3d957"],["/agc013_c/index.html","ac643ad9d98b0a2ce2df591e74841945"],["/agc014_d/index.html","10bb21556af4c689fa7b5d044848668a"],["/agc024_d/index.html","d93e8e7a12528c0a6c066a89119694fc"],["/agc029_f/index.html","bcc50eda59760f0243c7cc773787103c"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","6e1a6091031f786f2741fd72d6e02370"],["/agc041_d/index.html","a52ddb9ae2437e4c84c74ec9c66adffe"],["/agc041_e/index.html","f40745dcb8e857b8277c25d098dda0ce"],["/agc041_f/index.html","d712b288943aa0b2b61d2fd95b3baf80"],["/agc043_c/index.html","716846bc4186f63bb35d2a2ad39b7637"],["/agc043_d/index.html","7847aa24921cb2431470cc8a63a30c0c"],["/arc068_c/index.html","be2c1b1ed1cc7870c46e470ad06e78f5"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","aa86e406c370ff2b245aa840097fafa2"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","eb43aa07bbd4083d738d6df8636a6c61"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","52e3481c71a60968cec20ed3dbd97815"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","d2a22d1a1064a4e3f296128ad442742d"],["/archives/2018/11/index.html","6fc5d7515c040d34a7214659efe04fc0"],["/archives/2018/12/index.html","a1471df3de37c65421225544847b5beb"],["/archives/2018/index.html","de5ec648ff0f405c212c808dbf23ecfe"],["/archives/2019/01/index.html","ec70c76b53c4f39b35030fea1cfe8aca"],["/archives/2019/02/index.html","8eba6882524fcf991e40cdeaacd8fdc3"],["/archives/2019/03/index.html","263b378ffcd8d1c5d6a90c1afa8f4929"],["/archives/2019/04/index.html","d17dc94c120e78f964b8867923e458da"],["/archives/2019/08/index.html","edb6b55cf0db408eea9408972df5970a"],["/archives/2019/09/index.html","819fe171ebe425141200caa67a5d5cb5"],["/archives/2019/10/index.html","505cf0dcfff540bb7bd31f760dca5f17"],["/archives/2019/12/index.html","2131410d1c69edccfbcb8d9af4a8c498"],["/archives/2019/index.html","2a38b12944f13bf4bdf512d438edb9cd"],["/archives/2019/page/2/index.html","65f98a54274319930ba294857326b217"],["/archives/2019/page/3/index.html","7a959e43e61141274837d1758acc5966"],["/archives/2019/page/4/index.html","93bc2c2290e39832c0524dd61f620f11"],["/archives/2020/01/index.html","bcc0528be450790841f13f74efdfb3e1"],["/archives/2020/02/index.html","b781a570234fc89f1637c37c8662b3c6"],["/archives/2020/03/index.html","4311cfd2a0837f68d3a68850e71d06b0"],["/archives/2020/04/index.html","6d388811cc02065418449bf7ef9b5f9d"],["/archives/2020/index.html","bd08db10f348c6476561cb31a99be717"],["/archives/2020/page/2/index.html","be88f3d468d1b8868f94b962c640f5e7"],["/archives/2020/page/3/index.html","0a343b0614fbec6778f6dc92afd9d413"],["/archives/index.html","da1f6c9abb5cfe47ac8027f281278907"],["/archives/page/2/index.html","bc09fb5707dd3cce51e6a14d7274f929"],["/archives/page/3/index.html","bc09fb5707dd3cce51e6a14d7274f929"],["/archives/page/4/index.html","bc09fb5707dd3cce51e6a14d7274f929"],["/archives/page/5/index.html","bc09fb5707dd3cce51e6a14d7274f929"],["/archives/page/6/index.html","bc09fb5707dd3cce51e6a14d7274f929"],["/archives/page/7/index.html","bc09fb5707dd3cce51e6a14d7274f929"],["/categories/index.html","472b5229e8f5e9bb74cad30c0f7f5dfe"],["/categories/公告/index.html","c3c2068edc1bb63f3f15c8e5f7038e73"],["/categories/出题/index.html","81f02ecdb1de726f2076d005fd613a5e"],["/categories/小小结/index.html","26c11a878f4bba5031c5968862606863"],["/categories/模板/index.html","2566ffea17a11a03eccdc2d7cb23259d"],["/categories/毒瘤/index.html","6ea59508ef01311ac45d05f6bd2f4a8a"],["/categories/随笔/index.html","0d5fe1f635bb1a12f8726853d8865bcc"],["/categories/题解/index.html","e558f6c6419d1513918a124c4731ba96"],["/categories/题解/page/2/index.html","040acb4a3afdd8a2d156258f3d7071d7"],["/categories/题解/page/3/index.html","a5205a6e226969a357955be7f3140602"],["/categories/题解/page/4/index.html","43214a830b93a6ad08f4023c81d6666b"],["/categories/题解/page/5/index.html","575f4b14a755dba206a16cd87cfa0620"],["/categories/题解/page/6/index.html","c43c1c5fa103cbb3534143c04c752023"],["/cfdpproblems/index.html","3a921bc9ff70c0aa1af5cda2f5c6519f"],["/css/style.css","8efa10b135d7a0c2d7ac97f72e9529d5"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","8f7881a16eab4a80ca56695cacc1fdfd"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","7d125c1b2d76e6662808421669e39de1"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","224de51c4449594908b74b2fd8c75b84"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","df39ef4f4f24b8e08fec47c406ce4beb"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","ec60f2ae829039242d35dd8ec5392ca9"],["/js/search.js","d9069294b48a24bcfa54a6fc30d3e8e2"],["/js/valine.js","7c861d05c6631b2700327045a5767d08"],["/page/2/index.html","7a99886683c3a4c18fdb31dde3f516bc"],["/page/3/index.html","736117051f076639213b0d0077015a68"],["/page/4/index.html","df57cfe8546ee5f73ef8ebab8bd5d492"],["/page/5/index.html","63b06a5a5629c1907422ecab503e2b3a"],["/page/6/index.html","56b00a51ea2456212a5dcc866afa6f7f"],["/page/7/index.html","30e37f6ea15ff0ffb029eab968f8d758"],["/schedule/index.html","4303110fc7938938d241ef653b5d77d8"],["/simpson/index.html","8fc444646cb613a598110245f5fdbeca"],["/sitemap/index.html","e94796704b268070725ec5bd20dc6e26"],["/tags/AtCoder/index.html","0713ce7f23a3311b4b5642ce401f49ab"],["/tags/AtCoder/page/2/index.html","45a1a01324d57ef90b278c388d3a082e"],["/tags/CodeForces/index.html","dd5e4e3c9d70afee84d12ee84da5962c"],["/tags/CodeForces/page/2/index.html","efa8d2a20c15e65b341c7409af0407b5"],["/tags/CodeForces/page/3/index.html","7fdc55a906708935bd772fdca6edf2ad"],["/tags/DP/index.html","2db0dfaee7393d9563efa0750e01ac7d"],["/tags/DP/page/2/index.html","01e092eff1e36ae743a534d7f6f71218"],["/tags/FFT/index.html","145856a063cd4be429da0929595870be"],["/tags/LCT/index.html","3b34181129988c104b4905a87141b23a"],["/tags/Lucas/index.html","05bf444b7563715152689f2c1eaba1e7"],["/tags/SPOJ/index.html","154284d4e59685d660551ed9be9c5582"],["/tags/USACO/index.html","c42dc9f750d99edfbad896c72bff51fe"],["/tags/UVa/index.html","50bd0ea8c5d7408e0055fc31632598d8"],["/tags/ZJOI/index.html","c78af8571e31d57b5254c775a849fc07"],["/tags/hash/index.html","7d13f445a079dcc1e146ab31990769b0"],["/tags/index.html","4cdb55b6b60c142c4e2ae6ea16469781"],["/tags/two-points/index.html","8e408ac712f05222f80144d294528743"],["/tags/二分/index.html","14951e8a23e8ba8ebe199d3bde5e360e"],["/tags/出题/index.html","c9c008114901855bb8170cf81f79f5c6"],["/tags/分块/index.html","c207ca566e82fad2b71b5bc5a18f077d"],["/tags/博弈论/index.html","b3760684f3f1f01689d6e3a0d3ab158a"],["/tags/卡常/index.html","b1134dba43a4832a670ddbedb2090271"],["/tags/图论/index.html","91527b3106e7c8373bec566dbc2c890e"],["/tags/字符串/index.html","fc46e12d63bf5bd86fb9c3311d0a8aee"],["/tags/并查集/index.html","21c074aea18f5cec5dcf461e504703d2"],["/tags/搜索/index.html","144ba7aaf495fdf196c849a3d6a6619f"],["/tags/数学/index.html","9dfd72e3011b078eab4f50101a038443"],["/tags/数学/page/2/index.html","e571187167be83c048ec951539ed8c1b"],["/tags/数据结构/index.html","70753eecabb759ac021d224c53c8d045"],["/tags/数论/index.html","58fff33937baedfd415254c8eb98707c"],["/tags/最短路/index.html","2fb91c7c684ff575cbc68699050f65a1"],["/tags/构造/index.html","f5b4bc7f74c09b536649fa958fc37cff"],["/tags/树状数组-线段树/index.html","03baf01c7767df5a2bad3c7bf7669dc7"],["/tags/树的重心/index.html","908874c6e7f638ae70fa6e4373ce0044"],["/tags/模拟/index.html","9471a328b7622e26c4f3804f7266322a"],["/tags/模拟赛/index.html","47bba22bdbaecbdbf15bfe3cc4a5dd46"],["/tags/生成树/index.html","a37b87217ed1ea9d81b58c5a047b9e56"],["/tags/网络流/index.html","022f66a6e3ba44b9d0dc2de0df26c5c6"],["/tags/记忆化搜索/index.html","a07d3a06344cf8292c82ed043e5be943"],["/tags/贪心/index.html","898ded31a3ee8418b24c2f610cc005d8"],["/zkw线段树优化dijkstra/index.html","0a525ef864c30375bd0bb768c8f7f75b"],["/一道有趣的计数问题bywzp/index.html","7972ac426f27a4b1017d6f03c4395b4a"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","1df8ecd49faa004440dd75db39bfb2b8"],["/做题记录/index.html","151a76d746fc0dd3a8d19b5edc1ce0bd"],["/换个主题/index.html","0407530b71656e8ace8df144db4df1df"],["/整数分解求乘积最大/index.html","bb9cf57429e0ee7a7b392a8374197d19"],["/毒瘤/index.html","ab3bcfbb85a91772ab30ee9a4bb84a4a"],["/浮点数开根/index.html","442e108e73d9d7055278932301e9157a"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","8b8e5b226b2723eb724228e6546a4b42"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","4e7544fa2f24d74d12b036d1c67c0e15"],["/第二次出模拟赛/index.html","dc22e491451c820b8cb0e8fec4a70fb7"],["/线段树入门/index.html","ce979ae3c628b094c42fde40f56ad46f"],["/航空管制/index.html","dea09bc3f464083e81ee7e10db897acc"],["/造一棵树/index.html","225e22ba8f2c70f6729a215fab367676"]];
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







