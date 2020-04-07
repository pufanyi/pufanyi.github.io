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

var precacheConfig = [["/20180524模拟赛-word/index.html","6654f1c8c02d67752c78a5f822c71cc0"],["/20190409模拟赛T1/index.html","ee53a440d1158c37ae75690cbfac00af"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","15346633b071b0caf118a4938ce4b501"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","afabce0b42bb4ac5c81629bc9bc3b7aa"],["/CF1045B/index.html","7a2793d5ebbcfaf97a5d12c7e62cbd23"],["/CF1137F/index.html","f5dd1fa6f164ec472041f3f6af133869"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","f3c952217a50567c1f64102c114b4f41"],["/CF1264D/index.html","220d72a816ab2b91a72db2933c642f5e"],["/CF1288F/index.html","3a4879677b3f9e2cf84e4ae1d79b2324"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","d4b505fbf5082f73fec76fa8eb5a726a"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","adddb08059f7a9802fe86c65e6fd8daa"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","759377dc7eca956af5d67fa419dfe59b"],["/CF449C/index.html","a4d6c4e18cc07929d5407e2188ba4f71"],["/CF512D/index.html","8c5087afef0bb241b49b9ccf6d17fd35"],["/CF516D/index.html","b9f2f5475efe253a5b53ffd733444ea8"],["/CF551C/index.html","937e421490c99f2ec0cffffd7cf3155a"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","398d65cab9110b18aaa5fd53fb078f9d"],["/CF576D/index.html","921f8fbfef64e607365668c68f8da62a"],["/CF708E/index.html","fa95f1847543f492a22007c119d5b309"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","d2b79517b4965f21e8304221995d5abf"],["/CF875E/index.html","233ef7172cc155abe6f16c11c68413f7"],["/CF986B/index.html","cd8585d7846628193789bf5c76b470a8"],["/CSP2019后做的一些题/index.html","c03086b5662aa4f896278d83d410987f"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","ab15579e03b36b0f79a36840a3ed106a"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","3beb1402ac3f9516ec007a0fe4937ec3"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","5e2fb43236402b9b6b236b70c20ecbef"],["/SP1026/index.html","e219828237402d0eb59068b8605a3f3e"],["/SP4063/index.html","4bb9558d578de135239288a8179f02f2"],["/UVa11600/index.html","93b3c2a3518af0496ff6d54fb5a958fa"],["/UVa12421/index.html","e2339c8a3309c9c0a33fa5363a85fdfe"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","5c83e05f94781bd42fbcc44a7765d2b5"],["/[HEOI2015]公约数数列/index.html","047cde7c36ba8d747649254aeec701f8"],["/[北京省选集训2019]图的难题/index.html","eb6621137b23aa6c13e16665284494cd"],["/about/index.html","3aa59183130acaafd5d6559028fcc85f"],["/agc005_c/index.html","a41f31c72e2a172d4dca21e218b26634"],["/agc006_f/index.html","a8a1d0174a26ca83bfe7d55947d0c138"],["/agc012_d/index.html","2c6f2c72a5794bd99bf5391dfa266131"],["/agc013_c/index.html","9bf1ddb53cbfdac2395783ed70086dcf"],["/agc014_d/index.html","3cef5f1da23d3bd541e21d2e7ef22b3e"],["/agc024_d/index.html","88a301ca752f0e6224af6f9a1b754f12"],["/agc029_f/index.html","d398eae08a7e10ff9bb145dd4c65627e"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","4ffbe4078eaa937c238068c524c6bcd9"],["/agc041_d/index.html","721c77a25da8d230d33053e9a8df2f2f"],["/agc041_e/index.html","9ec434e184a06b8fbb5b50c8c17f13e4"],["/agc041_f/index.html","f4eeee0b63b57496f482749edbdfaef9"],["/agc043_c/index.html","b4fd8f7007a39db4709ed0a400b49900"],["/agc043_d/index.html","6519961262778249552527be3e38af84"],["/arc068_c/index.html","ba80e497886dc38a81ab386f3103f583"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","66780d5c06fca344851763fd6793db5c"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","3209e809f40043c95cc1a9d9d9b15196"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","522568f559ca9af32587226dec262d48"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","a5391eb0ca26d7e21fb54b5f4e0ccb06"],["/archives/2018/11/index.html","e44ac8be154a35f26253b692b9daaca0"],["/archives/2018/12/index.html","85d7ba696c0583d409df0d9b87faee4e"],["/archives/2018/index.html","373e44bb72fd1d682e69ac7beb8fd33c"],["/archives/2019/01/index.html","a9db07332d49f5dceb9b0d388d537201"],["/archives/2019/02/index.html","89f207fb09768a1f61ed8551a74e8521"],["/archives/2019/03/index.html","595281f2665372c250b55700a278048d"],["/archives/2019/04/index.html","9675cfd05689f5276132341affb59a4f"],["/archives/2019/08/index.html","4c084bdcbea8a3549f5cf6521af47808"],["/archives/2019/09/index.html","51afae77b4632e690332ae07a8d04124"],["/archives/2019/10/index.html","fad3a16aeb29b0cf198498b6f7649da4"],["/archives/2019/12/index.html","85f57ecd22ca17903c134c17133d7b36"],["/archives/2019/index.html","b986d8603c870dafb99e4ad47a006324"],["/archives/2019/page/2/index.html","3eb2f862b9bcdadc62b9eceb20d324b5"],["/archives/2019/page/3/index.html","eae3706f07f55b6a4909091bef185a97"],["/archives/2019/page/4/index.html","4416d164963d2b4d183cfadc2b6bab6a"],["/archives/2020/01/index.html","86df764c57ecc506be521b9262a0e1d0"],["/archives/2020/02/index.html","3a1178e5eb94a3f52ab7418cf6a1885d"],["/archives/2020/03/index.html","e423b29445cb5568dfed7c4b9dccda8f"],["/archives/2020/04/index.html","6b910e36c87451393401ac3659a1bd65"],["/archives/2020/index.html","71eeb6d5d4c453aeb02b46914d78e7d6"],["/archives/2020/page/2/index.html","925fb8296a81c86b5f1ac0ebda2b1812"],["/archives/2020/page/3/index.html","c0ed1d60e2d224f568abbffb77442a46"],["/archives/index.html","51630d8ef256e6f059de0644b5ffff0d"],["/archives/page/2/index.html","abbaa9ef05abc6fd56e2b7a5a793820f"],["/archives/page/3/index.html","abbaa9ef05abc6fd56e2b7a5a793820f"],["/archives/page/4/index.html","abbaa9ef05abc6fd56e2b7a5a793820f"],["/archives/page/5/index.html","abbaa9ef05abc6fd56e2b7a5a793820f"],["/archives/page/6/index.html","abbaa9ef05abc6fd56e2b7a5a793820f"],["/archives/page/7/index.html","abbaa9ef05abc6fd56e2b7a5a793820f"],["/categories/index.html","d4d2fb32aa5701115d79cd743750fe71"],["/categories/公告/index.html","e31ed20dd503e20671f335459e9332b0"],["/categories/出题/index.html","dad408424195ca3434a31b52a95a43ba"],["/categories/小小结/index.html","d75bc694fdfdebc9c8d8a959c4b21b50"],["/categories/模板/index.html","d9e6b0da2b7e924ba3539827ed795a21"],["/categories/毒瘤/index.html","7e8897673553af18b1fd98a7d92eca41"],["/categories/随笔/index.html","65c5e217af58c194009571eb855b58a2"],["/categories/题解/index.html","57c9ab122f490490a2c92031bcaf3527"],["/categories/题解/page/2/index.html","13fb6d0b41077d79b63b11f298266c1b"],["/categories/题解/page/3/index.html","11a6760b0510eb97869fcfafc8754c2f"],["/categories/题解/page/4/index.html","bd981cd6683a14d6bbd019fa09098c3d"],["/categories/题解/page/5/index.html","43a6a12031b8e5046ecc6028c8689dcb"],["/categories/题解/page/6/index.html","1880de39719aac38b168086e1e2ec2f6"],["/cfdpproblems/index.html","52a0298aeb984fc6f230c1d72c91d4ab"],["/css/style.css","8efa10b135d7a0c2d7ac97f72e9529d5"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","5f773137a6f5cc11f8dfcd4856d5ba03"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","4e7f88a97e78630c7595ae72258ca08f"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","35c2aaef4495976a0bf349a45af32ad3"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","df39ef4f4f24b8e08fec47c406ce4beb"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","e7267b0cd0357df75c7950c742532bcf"],["/js/search.js","d9069294b48a24bcfa54a6fc30d3e8e2"],["/js/valine.js","7c861d05c6631b2700327045a5767d08"],["/page/2/index.html","11d89cd17b3d930aeaef50f1ecb98b72"],["/page/3/index.html","92ed8eccd071ff14fcee8d19cc9d1b0f"],["/page/4/index.html","d19b85a0f841ee87e563bee93dd55721"],["/page/5/index.html","9e810a2d0d955695c74b8cfec15bee56"],["/page/6/index.html","5b7f3214b19e363f3f8e37248a296fc9"],["/page/7/index.html","187095034ba23b35defdca6dd02103ad"],["/schedule/index.html","bbcc155c940baf660395206ed7881308"],["/simpson/index.html","137d309705ac940bd4c72c321a2989c3"],["/sitemap/index.html","072d74991e0f22bf27f85eddcbf5a05d"],["/tags/AtCoder/index.html","fdbb5e750c6cc306ed98f59aad02a06f"],["/tags/AtCoder/page/2/index.html","2baa10725b9376983bb91eb64b651247"],["/tags/CodeForces/index.html","51983cde793a83504b8a084ab0b9bf5e"],["/tags/CodeForces/page/2/index.html","7384e285c4bd06e5cf734d99f83728f4"],["/tags/CodeForces/page/3/index.html","d2980c23600d09699d6ce84b5d601af5"],["/tags/DP/index.html","94def3d526d543ae5ebce710603c1c95"],["/tags/DP/page/2/index.html","e64561b0962a0b9f4dd9e3724bcfa008"],["/tags/FFT/index.html","19a1727edd18662eb057a32a8dd56b4b"],["/tags/LCT/index.html","ea06cbc3257824393509b618a00e3843"],["/tags/Lucas/index.html","75e96a66658cce04a958d5ce3c74b6ec"],["/tags/SPOJ/index.html","3b19f5671ddfbecd85bc4163f92c72c9"],["/tags/USACO/index.html","3b9db843911f2bd38e8c82359ae633e1"],["/tags/UVa/index.html","01eab5885eb88b179c95128799197684"],["/tags/ZJOI/index.html","bbbabfd509e741990cfc0af965f8b5c1"],["/tags/hash/index.html","a20e5b4e076f266584c7e12e13d982a1"],["/tags/index.html","eb34865b02a77189e40563b4a6846cfa"],["/tags/two-points/index.html","ecfc8244b09d3ab3ced7b7217ac7562d"],["/tags/二分/index.html","35fe3ee7f7c501f0d7053566557c9c60"],["/tags/出题/index.html","7aa37a3ad16c4bcdfe432ccc6e47690e"],["/tags/分块/index.html","605002953e8811052259b5d233f3569a"],["/tags/博弈/index.html","aa95f7fffab79ced7b97344aa8b42bae"],["/tags/卡常/index.html","763e341f4030db2ab302decf7f2bb384"],["/tags/图论/index.html","33eb7ec4c7d65e6730c5def1fc5d1e3e"],["/tags/字符串/index.html","e49c9ad0f8411e128ed5c427f2aa2f5e"],["/tags/并查集/index.html","b54fd90666ecd8628a2dd0118bfc263d"],["/tags/搜索/index.html","5b44b1f1300093cd4cbc9f45a95aaec8"],["/tags/数学/index.html","c5e8b09fa0166cf3521c0509f1cda564"],["/tags/数学/page/2/index.html","a25610c9fca2127aba6ab57dcc9227c7"],["/tags/数据结构/index.html","eb0bca96ce582eff182686b92d0ae160"],["/tags/数论/index.html","073c23917b8dda9988dd2abce9521015"],["/tags/最短路/index.html","ca47999dc4f1d9adcdedf5b31a7d65f9"],["/tags/构造/index.html","9f4dcaa08260c5ccb463f3aa3a16e746"],["/tags/树状数组-线段树/index.html","f2e5d443e73913d73512757ed5ea9d2a"],["/tags/树的重心/index.html","e9a3a70d9cdace8921ef6a939326d5e6"],["/tags/模拟/index.html","867662dfe7b08d33d3b4112570da94b7"],["/tags/模拟赛/index.html","a28596b46ab279b086499dcb3898b9a3"],["/tags/生成树/index.html","8b0091857def8eb4abf4344d8da7e4c6"],["/tags/网络流/index.html","db7a275752bc4afdcca9866a6fc84648"],["/tags/记忆化搜索/index.html","1308b4199c4e476f999bcc3e459f1daf"],["/tags/贪心/index.html","718f1b38fe33ff299fc2f92277671597"],["/zkw线段树优化dijkstra/index.html","9cbfc69bdf83357bf31dfc3ca0f512eb"],["/一道有趣的计数问题bywzp/index.html","028cee768321d4b5c303e4e78b7269ff"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","0c7f6ebc067ef872b2912003bd4b98df"],["/做题记录/index.html","8f2030c71b278d8be52c454b7fdf47a9"],["/换个主题/index.html","0b736af019b896bca0276e2f51f6f207"],["/整数分解求乘积最大/index.html","3ec324f2b49f793d46f655e755e58956"],["/毒瘤/index.html","00a6b7b62845f1222409fd19c0fe4e44"],["/浮点数开根/index.html","2236063cf20db021899f2f7dbefa0926"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","80e2a73ff990f6459fdda7d78d9e6484"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","87e6c875411abd58bf0a9b1d89a4ffca"],["/第二次出模拟赛/index.html","cbb8d5d3dfed34f0d833e6976bde1b99"],["/线段树入门/index.html","d3b3f4d7eb267e8a8496c703497048e4"],["/航空管制/index.html","e3a6f8b3f45e162586f24396d3d0ab0f"],["/造一棵树/index.html","4cf435f5231e767252a30114567cd491"]];
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







