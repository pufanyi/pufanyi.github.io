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

var precacheConfig = [["/20180524模拟赛-word/index.html","777b75eea7a45b748af715fada7ad410"],["/20190409模拟赛T1/index.html","9453e1397e57c77b5881fcad3f9c765c"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","15346633b071b0caf118a4938ce4b501"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","ca42716bc7736f1f2308e2073040b7a0"],["/CF1045B/index.html","eb5b290d37f29a4c62d775acea36b038"],["/CF1137F/index.html","4df2e7238b4b90723aa2452ee41efb3f"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","cbfc9b6a4342bf40a9fa561bc2d14123"],["/CF1264D/index.html","f4410fcb41ca03f52e74ddc7289db605"],["/CF1288F/index.html","bb48b8f27b9b862c472f15733fc65376"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","5cd45e1a5a223f3a8632a57a6bb98a28"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","08a68cd03eaec3f97454a0050965df6e"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","9f6d81661f72ed9075144656be551924"],["/CF449C/index.html","9eaaf1aae8e57b3e8c10d454ffb2c887"],["/CF512D/index.html","3906cadf683d33749f403f57f35ac217"],["/CF516D/index.html","9612738a7b831f65ee96ed0d5f49f349"],["/CF551C/index.html","035ce61ee071e0f852788ca2542ed868"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","74c210c42c877ec5348e34d1b1a619c6"],["/CF576D/index.html","74922d0f5fc4567c0ec5b2b19ca42f56"],["/CF708E/index.html","3d75f189da1b8bb456bec5d9d1e2d2ce"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","cbb35e9a4540bb63037ef4347f71b7e0"],["/CF875E/index.html","41acd953a11248c903db23dc71fc38f6"],["/CF986B/index.html","6aea85bab66edc79afb88207899eeeff"],["/CSP2019后做的一些题/index.html","7655f3ab524dd5b69ff0db9eb0dad8c3"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","d2382142b8dc0312e2e1c60fa8406eca"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","d48f0cf78b9c09feea41ed23bf1ee8f7"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","6c96c1bc7a119ac895cbcaac2315395b"],["/SP1026/index.html","8196d13423e66c1030f8cdefdb371098"],["/SP4063/index.html","89ce3411ddadce2dfbb148195444e79d"],["/UVa11600/index.html","e0e5bf6bdd03a381d4f657eb9374a501"],["/UVa12421/index.html","85435da2caf3c52444b64e66e9468587"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","e36e7892b03c51e67c2d49fc65836120"],["/[HEOI2015]公约数数列/index.html","d455e24a949091cfb5a6f1ecb66e95a2"],["/[北京省选集训2019]图的难题/index.html","74ca2696741e549c64295bc2a11e114c"],["/about/index.html","1a758ae3186cfefb47e3d1f02aa7973a"],["/agc005_c/index.html","16a531f9d0729e8264080d52a586619c"],["/agc006_f/index.html","a2197c1f120ab92c8d9cb4d7d2dcc856"],["/agc012_d/index.html","c5c8d01830bab208031af25d65db40a3"],["/agc013_c/index.html","62ea0911f117265f527bf86beec24f27"],["/agc014_d/index.html","ab231fe3415f43ee6ffaf0caa7dc86ca"],["/agc024_d/index.html","1b911a62923e1756e0bbc724610dd0e2"],["/agc029_f/index.html","0332793daadbd5145f215482714aae46"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","fee60940907ea473e7f46b3638e84928"],["/agc041_d/index.html","01afbdc9ecd33d13b9577c4f5098b041"],["/agc041_e/index.html","8cf6dff44f7e615b7b6de22b85060367"],["/agc041_f/index.html","10e7cbbc33a1f0f01030251f26ce228c"],["/arc068_c/index.html","206f1808134243d87175671df82e5850"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","55711ec47f8e659b3bfa8fb3722714cc"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","7b4de17bc5e859fc6ab8af881be234fc"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","7b028c70f513f773bef3cab96e3a1119"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","52994fab64d763d8986b3d3c8c5df26a"],["/archives/2018/11/index.html","69426b5fb61b6c4c7ecf9884a54e2bd5"],["/archives/2018/12/index.html","9610c9dde93319bc9d4fed552b30b082"],["/archives/2018/index.html","b1c6e5442f3b1045c59c233de70ef027"],["/archives/2019/01/index.html","f1d71c1fb1b59eda8c0e55aef9b91fca"],["/archives/2019/02/index.html","ccde8ea1b8b551f188a671c35719b9da"],["/archives/2019/03/index.html","35c3d1663a99bdfefba920623a135c76"],["/archives/2019/04/index.html","1abda7cc0b286d2cbe69f5ae6a9f04db"],["/archives/2019/08/index.html","060242fb71c1ded139764742a2b9808b"],["/archives/2019/09/index.html","8ae44194f7083818f60235366564c552"],["/archives/2019/10/index.html","a18db6de9191b447645be6d81e0fffe2"],["/archives/2019/12/index.html","3927ab98f1dc50a7cab91a3a46fbb0fe"],["/archives/2019/index.html","0ae6a279fe2ad83a99d7e0aa2e8205cd"],["/archives/2019/page/2/index.html","abc8dee030d98e5bd7747c16688308ff"],["/archives/2019/page/3/index.html","df97c66ae9a0f51b3b9d8620612ff500"],["/archives/2019/page/4/index.html","dc7a0886e3d8002e80695a1b50cd611c"],["/archives/2020/01/index.html","1f6f916f2a08e838fd6f6900ad3d2094"],["/archives/2020/02/index.html","229beed5ac6ff5bd9c9d905be40ee625"],["/archives/2020/03/index.html","e1a13f902042ae89976505f32abfa81a"],["/archives/2020/index.html","e28c8e56b50f5b8a7740da8c5d6d7797"],["/archives/2020/page/2/index.html","301436fa1ca73f932df9c2370759d83d"],["/archives/index.html","76696dd9a10f34e1ced7f4ad183e47ba"],["/archives/page/2/index.html","5c21a127300f229bb1d9300e635b6844"],["/archives/page/3/index.html","5c21a127300f229bb1d9300e635b6844"],["/archives/page/4/index.html","5c21a127300f229bb1d9300e635b6844"],["/archives/page/5/index.html","5c21a127300f229bb1d9300e635b6844"],["/archives/page/6/index.html","5c21a127300f229bb1d9300e635b6844"],["/archives/page/7/index.html","5c21a127300f229bb1d9300e635b6844"],["/categories/index.html","a2f37cb882799f2595da15437a51160c"],["/categories/出题/index.html","45fe27d2452e6ab988890efbc1151b38"],["/categories/小小结/index.html","90519fdbe6985420c83c7f5106c3e904"],["/categories/模板/index.html","47b4563bee9917744b20b465cf0eb12d"],["/categories/毒瘤/index.html","0f11ef1f244369ecfb351fd92b98104b"],["/categories/随笔/index.html","23bcd10301f2ca946063c2dc96f4b76a"],["/categories/题解/index.html","882d4bc4f17f35e1ca89d263d1481148"],["/categories/题解/page/2/index.html","7de07022eea3eb082774b91ec4f62ae2"],["/categories/题解/page/3/index.html","093427d5696e850c39df0feb86cc4984"],["/categories/题解/page/4/index.html","c3e8b6395cc6d9c57cb12a685a42d1fb"],["/categories/题解/page/5/index.html","b3bd3a2ab6a070e8c2505863ded0bdca"],["/cfdpproblems/index.html","76693db9bed27a1f51053f3f91995567"],["/css/style.css","8efa10b135d7a0c2d7ac97f72e9529d5"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","697909d6e27be7d4ac438de71bcbe7a2"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","2a8fbf6fe66df697cec89364c0020106"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","f99801c9a03f673b7e7e15a0ed4a097b"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","df39ef4f4f24b8e08fec47c406ce4beb"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","3b7b64d59df306b93d0ac977c225caa3"],["/js/search.js","d9069294b48a24bcfa54a6fc30d3e8e2"],["/js/valine.js","7c861d05c6631b2700327045a5767d08"],["/page/2/index.html","ce7c8d592b105aebd095938f064c8712"],["/page/3/index.html","e72473bcfdf411024cdb556b36829078"],["/page/4/index.html","4ef611b425675ad25dc7c07d35bb438e"],["/page/5/index.html","a9796788dc5b11310a394d05a800e184"],["/page/6/index.html","f1d384a5ff0b939554df5f5d7bcfb522"],["/page/7/index.html","8b0a7091650dffce640091c2bd6e7244"],["/schedule/index.html","54cf2b97399c36fd81afebaf87f5c482"],["/simpson/index.html","162407bc4721314e569dea37a8467c5b"],["/sitemap/index.html","96b6193b800bff127c634d644f6f3b6e"],["/tags/AtCoder/index.html","ec15dd6e4700ae8078efffbf222abc5a"],["/tags/AtCoder/page/2/index.html","a2245b2b17f80f70918307dfbbfbd02f"],["/tags/CodeForces/index.html","a1aef1ec8f479d532762b3d8720cb1bc"],["/tags/CodeForces/page/2/index.html","30cd8a84502ca490b054e1f5e80ec119"],["/tags/CodeForces/page/3/index.html","cd9a4b5332a3dbdb4c56e4a83fe5b811"],["/tags/DP/index.html","8e06607e948bccddb778defe601f2566"],["/tags/DP/page/2/index.html","ace814d41c73104ae216a073e889eec8"],["/tags/FFT/index.html","e26a723c1c6328731fc25b175e7c1ff5"],["/tags/LCT/index.html","b2bdcc29b17a1c26dfaa8342acb37363"],["/tags/Lucas/index.html","0ced4cf1b66c65e04bec928a7b945d21"],["/tags/SPOJ/index.html","3f041f76c94d6e991c53358495e4710a"],["/tags/USACO/index.html","875f0477dfa87cb489d19e54e487572a"],["/tags/UVa/index.html","a76b813593b9821470cef4e4df368f3e"],["/tags/ZJOI/index.html","694aab75c6ad3c7687f66ccd6a7c575f"],["/tags/hash/index.html","a631937b264733ddabfe86a5a72a5d14"],["/tags/index.html","2519b0ee9b06f77d05f1d1c64634cc97"],["/tags/two-points/index.html","25984bd5cb69c38c2c671f85b3149193"],["/tags/二分/index.html","4e6abbeb4a4ef6a9ae554c2f998467dd"],["/tags/出题/index.html","d57e1f239bf4cbc4047ba7dd9c183560"],["/tags/分块/index.html","0a86516a3816397da488f9f706b10c29"],["/tags/博弈论/index.html","0ebaa3de7caebcdfa639635955883642"],["/tags/卡常/index.html","b158a35627f1ccdd34d5be2e1f60f23f"],["/tags/图论/index.html","bff42a221830518fc82a464dd862f677"],["/tags/字符串/index.html","8c08956ba03f01bf27f2c593a8101df0"],["/tags/并查集/index.html","4500b83cbba66ca74ade7ac3ca6ef209"],["/tags/搜索/index.html","a1867e00ac6eace7dfd5a4b9d4acff8b"],["/tags/数学/index.html","dcbe4ee65046f53474a55a1ff20380e1"],["/tags/数学/page/2/index.html","1859626bcced18c01b47b50ca85bd468"],["/tags/数据结构/index.html","f66154711109034977392a8f963f4665"],["/tags/数论/index.html","7119c8d15994a99cbc3bcecd388febf4"],["/tags/最短路/index.html","f69bca5f86e5e52da56726d6c919435f"],["/tags/构造/index.html","3142ee83427ea8828e270b71d66394c6"],["/tags/树状数组-线段树/index.html","6fdba92f39aefb23512755f351eb1055"],["/tags/树的重心/index.html","2c702a35c2376291fd0944584e12b5f3"],["/tags/模拟/index.html","eaac7e55c29b52d9638f777cc7e1e42c"],["/tags/模拟赛/index.html","a20c4f9102d099e4273d45639191b7fb"],["/tags/生成树/index.html","5994338374568d5c433e0fe5fdc6bb30"],["/tags/网络流/index.html","e299ad8e5eb2b62e838fe36f07e58540"],["/tags/记忆化搜索/index.html","c6f95af946bbf95d376ca5435f2c4844"],["/tags/贪心/index.html","92c2ae8d2c5c169d2ea3e524d472c517"],["/zkw线段树优化dijkstra/index.html","3b48fadedaabcc6daca3f31960876e86"],["/一道有趣的计数问题bywzp/index.html","c8b1bbfc4e7e98a44f535a202cda4864"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","88fbb05d64842504a1e132bf98b41ecd"],["/做题记录/index.html","325856db361796756f61557443ac30c6"],["/换个主题/index.html","d7218249661e61d9ed672a2376a32663"],["/整数分解求乘积最大/index.html","b7693590a966dd4ea1474e7ffa0602f0"],["/毒瘤/index.html","34284d6a65cedf4d9e5ef4b504cee6a9"],["/浮点数开根/index.html","1c8095bcb5babbef5e0c2e739d69e873"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","978a09b4c88f14b6a65fedf603bb976a"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","0c1eb27a1d2d842f53fbee28a3cb1109"],["/第二次出模拟赛/index.html","4e05b00d0672e1a6b77ad03660376da2"],["/线段树入门/index.html","3eaddb0901ba72c78bcdf2e6812480c6"],["/航空管制/index.html","5213ab6c1a2f01dde0cdc838c1fd040d"],["/造一棵树/index.html","a01ea5bb55e6b70fc8bace11b220e86e"]];
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







