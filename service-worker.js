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

var precacheConfig = [["/20180524模拟赛-word/index.html","f21da4bab673523c1a612bc941534dd1"],["/20190409模拟赛T1/index.html","f07a33921bfa03793f7220513b5da941"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","5b30c19c883625e9095e79b42954fb61"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","97ba49d244a0cfa6ff4a4c2ef3237412"],["/CF1045B/index.html","8ebdc9edeaf82884ecdedb7e0b14afff"],["/CF1137F/index.html","de2fec9dbe26fb3c93389001173c3ce2"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","c8bcc81d1f4e0a0a9f33c7ce67ac26b2"],["/CF1264D/index.html","442388889032924f47ba8e60198c2cbd"],["/CF1288F/index.html","02aa77ee61d60859b741f76997c79e7e"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","18c4a7bd1e75d64f659db0ef8d496c2f"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","19165e14a0527b471f41543fc93ce927"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","20927a5c1aa0924b9ed900149acd4a03"],["/CF449C/index.html","8f1681926ab832daf6ad6e96fc33c709"],["/CF512D/index.html","1951a95e89c5f1e93ef4c8760132742d"],["/CF516D/index.html","2eb8c44f9f92dfd2416af4c8818a179c"],["/CF551C/index.html","47f7d0dec7dd1d77b2e4ddce5951eecf"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","be754d9daf9bbf02a09f835ff6c52f28"],["/CF576D/index.html","28ee38c31a1f9a665c6f03946d0efa94"],["/CF708E/index.html","dcd5b74f2b97ec0423cd31a0e10e6f0b"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","6353b66494607e6e7c8dd687cf053de3"],["/CF875E/index.html","937cbb24750f634fdc871246db4223b8"],["/CF986B/index.html","731577044b9338e1980bc61f3b07b52e"],["/CSP2019后做的一些题/index.html","a138b3ec1e458464f820520ada7d7d0e"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","c2927edac8cba5e0c64242a1606be23b"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","243b567fccf7f2b75636e84ceec15753"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","98f1218c0400aac1b1020493165295a3"],["/Rho/index.html","4b155d083e26e749e3c888027a01b32f"],["/SP1026/index.html","8023b78247dc1e6117ca75f7ce5c37dc"],["/SP4063/index.html","5d6a3835b74dda71d4edaaeec71e1994"],["/UVa11600/index.html","21dd909dff4cec597996206a57d1e904"],["/UVa12421/index.html","9d31bfbc2777e9e60249c3821d3efc89"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","5ba0ca7d18ff742e0f3850283547e352"],["/[HEOI2015]公约数数列/index.html","d38ceb09ab2d4d3a7105ef8990996880"],["/[北京省选集训2019]图的难题/index.html","8562411275e0f20d491a2e101ee07814"],["/about/index.html","aeca8e4e8e2a3406286544f811cff58a"],["/agc005_c/index.html","1ce55ff3ef58327ac0568be9fe735f69"],["/agc006_f/index.html","4576084275d35828feeb4e1a6fb261e9"],["/agc012_d/index.html","21eda37eab0b779fbd58e27f7442f943"],["/agc013_c/index.html","63bb55f18392dd8240693946cc0acee0"],["/agc014_d/index.html","a02fc15e98c2cfe4572128371a4ce6aa"],["/agc024_d/index.html","e44fc7c5278977475cc9908e70b493b9"],["/agc029_f/index.html","241de74afc482dfc28eed850a384b484"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","e336e75cda2841ebd708e5fec2077158"],["/agc041_d/index.html","04256ab048d90d89c722e0da71a51ae5"],["/agc041_e/index.html","520fca2fed77ca172a2f09dbf289f32d"],["/agc041_f/index.html","ecd0b05c5e059168c26d2c800fc7655e"],["/agc043_c/index.html","b764dcae1abe9de35257468092230210"],["/agc043_d/index.html","2ac84d8c3bdd888d748905b2f710c8c6"],["/arc068_c/index.html","92f07a79d15a6d4f5dd345051b30fca1"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","8fda6027b635bfb6a688209a7a4ebce3"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","ca02b0b17e92872d68a2b7967ad9b91a"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","993c27e95bc0f8fa31c36c23806b1036"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","18c3d1a272666c273a1f32deb3d6df16"],["/archives/2018/11/index.html","344a0293e29bb1fef001163f427d75b8"],["/archives/2018/12/index.html","9eb63ebb0e3ee88f65980cf3523cb9f9"],["/archives/2018/index.html","70a9041bcfd5e0076d3492b6d786e3c6"],["/archives/2019/01/index.html","b2a2d3cbb511dcb4c8d2604386e5489c"],["/archives/2019/02/index.html","2a0f7889d460f4dc8d8f06df23066675"],["/archives/2019/03/index.html","a3b6531c6d6633ccddbcd46338db9ec0"],["/archives/2019/04/index.html","6faf4ceeae86fd2e202c34147f3790be"],["/archives/2019/08/index.html","8760ee4a4940f6af76cb67fb7e30912a"],["/archives/2019/09/index.html","fb67567a5bf41e2629792d9fe0301e27"],["/archives/2019/10/index.html","03dc47eaa700c50fbf572b6d65be7078"],["/archives/2019/12/index.html","780543f889ba3f2de35ba6cf353c92c4"],["/archives/2019/index.html","e0bcb8d50776b7175e0ab57227aff325"],["/archives/2019/page/2/index.html","2ae030c7eabbc745282e6f8e372ca95a"],["/archives/2019/page/3/index.html","de6a2c270dae72f8e77160f791022e4f"],["/archives/2019/page/4/index.html","3af7df5c79fa4d2a2b7e934227081779"],["/archives/2020/01/index.html","1ebad089a7c5d5cfd32d170eb19489c3"],["/archives/2020/02/index.html","ec880c2d013ac1770f44d8c4f1cab9bd"],["/archives/2020/03/index.html","80b2e60762f5f4ed12e0c2cc5b0f5e6f"],["/archives/2020/04/index.html","7f816510ba06ea89962053c584938abf"],["/archives/2020/index.html","fba49b31bbbd075e3ade8f86772821d4"],["/archives/2020/page/2/index.html","6e0975f0f2c9f5e9263ef628ff48fa65"],["/archives/2020/page/3/index.html","d1a06d6a006cd931fb94cf594779c806"],["/archives/index.html","05cc5079a27d87ac1969a5c134b04198"],["/archives/page/2/index.html","39f96586b27dff7f1f40d629f416b957"],["/archives/page/3/index.html","39f96586b27dff7f1f40d629f416b957"],["/archives/page/4/index.html","39f96586b27dff7f1f40d629f416b957"],["/archives/page/5/index.html","39f96586b27dff7f1f40d629f416b957"],["/archives/page/6/index.html","39f96586b27dff7f1f40d629f416b957"],["/archives/page/7/index.html","39f96586b27dff7f1f40d629f416b957"],["/categories/index.html","0281f555e8bad62fa6d51e4e80253b73"],["/categories/公告/index.html","5014832d2374a86a2fe4aed94a28f6cd"],["/categories/出题/index.html","2c697dd7194d5e3ba0ca2415d5e2099f"],["/categories/小小结/index.html","1beebb7b9df3d2ac59dd1e4763cb000a"],["/categories/模板/index.html","039e8a58afbe1dae20454b50b22e1726"],["/categories/毒瘤/index.html","aa5901fa14a6d607b56959061ea44b7a"],["/categories/随笔/index.html","e7613e2688180db2ac0580195d82d820"],["/categories/题解/index.html","d926f52f4ef52475420dae697f195476"],["/categories/题解/page/2/index.html","23f04b92a819b88397af5846ac82541f"],["/categories/题解/page/3/index.html","5d922508aaea8145f0fe5db76c071cd1"],["/categories/题解/page/4/index.html","83330c7faf8b460f640282eca1dcf916"],["/categories/题解/page/5/index.html","934017e722447e49dd8dbcde8b79a0ee"],["/categories/题解/page/6/index.html","b93c30c2c963f2f8a43e55c33d38566c"],["/cfdpproblems/index.html","ee578f0d4dfcfeccc988d1157ca8b36f"],["/css/style.css","286f19eb6431141c33c459646d1ce93f"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","cac7ab1e1411aef84bf5cab57e154cd4"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","c3376ff92aa0c7a16f4d21262255dda5"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","79149beac69b3f65ed04909168ff8d1a"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","3a1df7b7c2bf61480908cc043977e674"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","f7c2e070f1c5c2698bac88dfaac3ae85"],["/js/search.js","81c23620cd137dc28862e86e5bc6f841"],["/js/valine.js","35d183a806e561c7483060417c51bc60"],["/page/2/index.html","10d59e8e88bb60f137815c35c968395a"],["/page/3/index.html","54629332c50b0f3494263390b535c1cd"],["/page/4/index.html","bb8847cd6818451e5b13e6de54376d37"],["/page/5/index.html","7f7c1ae517051eec09c95aa0b969ec71"],["/page/6/index.html","1794d2d76fcb1ea7300ae8bf8ef15943"],["/page/7/index.html","2be79dc0e868c6a6ea18308424306ccb"],["/schedule/index.html","8be795a9b4e67e4bf1d18dffd904ab30"],["/simpson/index.html","79bb16736d94a6e82901e0939062b05b"],["/sitemap/index.html","210c07019468e14bf0f4d106cd11b9dc"],["/tags/AtCoder/index.html","9b0d9d9a93aea08f9249b1e0582a5c83"],["/tags/AtCoder/page/2/index.html","88596ba0f839482e956a46ef0b1fcbc9"],["/tags/CodeForces/index.html","bb23230afe79cdb33f25d84d69234d35"],["/tags/CodeForces/page/2/index.html","77229e6498051b3b3caef8aa447d84f7"],["/tags/CodeForces/page/3/index.html","4f81ab98ca1d2d08aa0d662007548193"],["/tags/DP/index.html","87a356606cc3bd9036b0ceacc209a087"],["/tags/DP/page/2/index.html","e644ca346f6e742d7c9120936ee494e4"],["/tags/FFT/index.html","ce14dc7c1fda9dc8e0067e6b41cf7989"],["/tags/LCT/index.html","ed32608a2c7da653df7183a313684f31"],["/tags/Lucas/index.html","c916e66f9cdf019c7c2e81b964cf156d"],["/tags/SPOJ/index.html","d39469d8a24adc89ff4f1ded84bdd9eb"],["/tags/USACO/index.html","61b3d527ac3c108df3d5a29cc76363e9"],["/tags/UVa/index.html","9cbc2843ae45a30d4d2bb83fcdf9965c"],["/tags/ZJOI/index.html","798a3c544d8574d04d94bb910293e11f"],["/tags/hash/index.html","2e16386b50b60994b7f69f280414f71a"],["/tags/index.html","33ef14524aafe30fe6f2bb422527e704"],["/tags/two-points/index.html","3d75207bd0416ec231fe3db5b2d43c41"],["/tags/二分/index.html","5de5acd87f97c399ddb314cc7b10ad74"],["/tags/出题/index.html","50cd06a36538607600f1ea7cf798e7ad"],["/tags/分块/index.html","8bf890219a73624f79b4c129b5851117"],["/tags/博弈/index.html","d6cdc3f9296abe4fffe2241d73ac28a0"],["/tags/卡常/index.html","5f237bd5c255b526ffeee35cf56f3215"],["/tags/图论/index.html","d13d298701a95714941e4e4736f261fe"],["/tags/字符串/index.html","80e55d39cc264e9f3554c75cee1cb995"],["/tags/并查集/index.html","3679e54a38f103c308dcbcdddb181a8f"],["/tags/搜索/index.html","69d9352deb5460699f0898bb0379f29f"],["/tags/数学/index.html","bcec80f9c3f62239412d0e63381df799"],["/tags/数学/page/2/index.html","6ac5c5a8d4be60c988806fa1b7e6b854"],["/tags/数据结构/index.html","2821d0feff3363ec3ce77a078092de52"],["/tags/数论/index.html","ee906862d698d7075c4e70d845e8aec8"],["/tags/最短路/index.html","e2ac204784c2fdfb107886af04f75a9c"],["/tags/构造/index.html","4a0e93c6879f811acd1c8f6842a617cb"],["/tags/树状数组-线段树/index.html","13d0b3e9b29615767719b0225420c259"],["/tags/树的重心/index.html","99616c399f6d1ebb3c1dcc71f5168802"],["/tags/模拟/index.html","8d202c1e8155a6c04890cc889ec02ffd"],["/tags/模拟赛/index.html","a5459cd29dd1a8bc1db3a897eceb79f9"],["/tags/生成树/index.html","726a3f4eb421fed514c393e2fdadc5a3"],["/tags/网络流/index.html","d76121314ba19330ede34d54dc00846b"],["/tags/记忆化搜索/index.html","6a35768898a17f3e34fe3ed9c0691ac9"],["/tags/贪心/index.html","06b65abf981e26c89775b51867aec488"],["/zkw线段树优化dijkstra/index.html","5ba5b320ec4f310c3fbb7a915c15928c"],["/一道有趣的计数问题bywzp/index.html","957d8ea5a27603ad0896e9304cdd5631"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","adb6841153cff2fefe6a7bdb7752e6f2"],["/做题记录/index.html","3767066ea587cb06ba2fbb151e63d517"],["/换个主题/index.html","11ad660ed276428c83d138d9ec246d59"],["/整数分解求乘积最大/index.html","d0b1b192a7f9097b80bf7d8341a9472c"],["/毒瘤/index.html","5b1727e8852b616d12a17d7dcf45db08"],["/浮点数开根/index.html","d2c1aa8629e8c14083fed3acf7f2ac0b"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","8fcfcde132e5e39e186f7dc6e2ba0f37"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","7b3b8098b5b47e5766f790592a2bf952"],["/第二次出模拟赛/index.html","a1b6d706540571a9893c1ed2a35d3234"],["/线段树入门/index.html","eb44344436ca979c4e5f708250205fc2"],["/航空管制/index.html","ae732542933e72cdc18661dff4f2cae6"],["/造一棵树/index.html","b4062472a7d61cdacec234bb1031e062"]];
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







