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

var precacheConfig = [["/20180524模拟赛-word/index.html","60713b4baeb1db9f5df8ab6fec2c2106"],["/20190409模拟赛T1/index.html","975f2104ee4f43a63d1d08eb37e475f3"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","15346633b071b0caf118a4938ce4b501"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","630161a57dd2291a2130c2a7c8b34bf5"],["/CF1045B/index.html","4ed228697b45430681d2a9396817ba5c"],["/CF1137F/index.html","284b68850f3496474e3f7fe15a1da841"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","6d8cbef1c8c1f7c657e98f0ed6ae33ce"],["/CF1264D/index.html","94f129b568728d9182aa48065d4bb7ce"],["/CF1288F/index.html","202021c0b72214775a725dd9c34da8a8"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","4bfb3c4b79d777f8afd238dea17d4f56"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","3b262bb619f6a8e7d602ec7f6c1f43f8"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","bf2ca6d2a22c4bd2f28a4eef8e77117b"],["/CF449C/index.html","aaadf685a4eaee380ecb0c3ff2a313ff"],["/CF512D/index.html","0b161d012aa965e489743f0254dde141"],["/CF516D/index.html","56e63b6e7fe673815441dfc3f482d2a1"],["/CF551C/index.html","af4977631f19de40a3edc055a4e00e83"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","3e6c1c869944ec84fd6c080c5b0b5df1"],["/CF576D/index.html","115360f296654d60caf5c7b4fabd3d40"],["/CF708E/index.html","4d8e6196ace6509a6f261d857bcaeea9"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","98afb10344878c1b7e48a783815ae83c"],["/CF875E/index.html","f7b72338b410b7e4ca15682bd70e4eb7"],["/CF986B/index.html","96ec7c1652992bf75771bebf28e4609b"],["/CSP2019后做的一些题/index.html","53e2e0a62cc6da8106406487e5c2e9fd"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","7cffff9b0477fdeface0b62dd129ad8d"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","9abdb2e210122e996bf01112b20024f6"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","0d83744457656fbb360f6c338ec8288d"],["/SP1026/index.html","76e6fad377737427fbd504c0ac62b500"],["/SP4063/index.html","65dd64d3bd15f97529d62ecda0186c52"],["/UVa11600/index.html","b54df01e8ba2a49872b0b5f7c72415ee"],["/UVa12421/index.html","001fdfbc64e4d5a4142a467b64fa1a72"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","6ffea7ff96bfbd2fa8b90a0849c3380f"],["/[HEOI2015]公约数数列/index.html","f0d66cc567b8ceb3a9766a461d919bd1"],["/[北京省选集训2019]图的难题/index.html","c345202e430ab8e363b297a70c32b04f"],["/about/index.html","08ac2f19a5d2767d163e83b1a96c3134"],["/agc005_c/index.html","bcbb16fc8bf3b57d6581153566654ddf"],["/agc006_f/index.html","84f6cb5e20aa791155adc7a572e96d10"],["/agc012_d/index.html","b0c6e91d6ff656221fb6e1b2abd0e7af"],["/agc013_c/index.html","85a7d23e384debb268f68ddcaa2cefeb"],["/agc014_d/index.html","2ec878fa8c4850268029716deb80fbde"],["/agc024_d/index.html","a6747aa737ad3c69912fe194dd5b6deb"],["/agc029_f/index.html","a6e7cd1f4d9a0aa808afe15ec7073240"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","5c41d1bb52eca083dab3381d66d0b9ab"],["/agc041_d/index.html","6d0d0221e6f7307744e922700ce6722e"],["/agc041_e/index.html","edebc0b59bc06901661270b4e04e63fc"],["/agc041_f/index.html","c6c07857da717243794be321b73fce0f"],["/agc043_d/index.html","3fb0afb59671fa9b68d3b1c9bf9a12b2"],["/arc068_c/index.html","3744e22552e6fd0a3ccfe7e232e2a221"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","88a7c11913bdcc78a80292e25c4111c8"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","f4923abf848a3b2b3e0fe76eddf032b3"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","48e7de49e843449e1dc8e5c74e418737"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","8549c9277f123b0da25a70cffc51d2ae"],["/archives/2018/11/index.html","2e0aa9d050b7c3960977845704b0ec6b"],["/archives/2018/12/index.html","766e0d4b9740791ed0ef50ff41447ad5"],["/archives/2018/index.html","5cc7fe5cf38657a787ca7caceaedc150"],["/archives/2019/01/index.html","d3221cfb0e04ec58f1b242244417132a"],["/archives/2019/02/index.html","645929075a26fc5a2aefd2359e2b38ba"],["/archives/2019/03/index.html","7547f265cf83eb2fa07699b8d187c7ab"],["/archives/2019/04/index.html","692bd345d117902fdb48b5ffccbf91d2"],["/archives/2019/08/index.html","40b695691e151d0a8d32c6715558c713"],["/archives/2019/09/index.html","061cdfdf38f6dbcbf45e068367dd4d19"],["/archives/2019/10/index.html","a868e7c16454f39d4febb589d78633b6"],["/archives/2019/12/index.html","1173aa6eb2d03195d730a0ef52b7f2e1"],["/archives/2019/index.html","73f0f0ea6d1b379021813bedfcf3af2f"],["/archives/2019/page/2/index.html","85eb5f35b57f1fcd39e99b134035d0d0"],["/archives/2019/page/3/index.html","d1266d826cdc6b761f357ed3e1f0072c"],["/archives/2019/page/4/index.html","a76863cca0b4cc1eda39e7c47ff07c3d"],["/archives/2020/01/index.html","a73cb30385f5779aad108c0b2d8c558f"],["/archives/2020/02/index.html","5075c2d1f757d8e52d04c17b95b67210"],["/archives/2020/03/index.html","6f74d466c8c955ca05bffcfa8414a9a7"],["/archives/2020/index.html","2cd8608b50ab3daeff161f564e8387bc"],["/archives/2020/page/2/index.html","426cee916cef86da2c75a21efd0174ab"],["/archives/2020/page/3/index.html","4284f9ec540db58d51cb2bf36e3606ca"],["/archives/index.html","0fa7e990a1268c0c856f960b51a9c23a"],["/archives/page/2/index.html","2960acdab458733b9adfe723472942d4"],["/archives/page/3/index.html","2960acdab458733b9adfe723472942d4"],["/archives/page/4/index.html","2960acdab458733b9adfe723472942d4"],["/archives/page/5/index.html","2960acdab458733b9adfe723472942d4"],["/archives/page/6/index.html","2960acdab458733b9adfe723472942d4"],["/archives/page/7/index.html","2960acdab458733b9adfe723472942d4"],["/categories/index.html","acb521ead1ebade7e7886e1cd9481759"],["/categories/公告/index.html","3124b2d229e1a44aa2a12d480fd5f661"],["/categories/出题/index.html","b3deff44d5df8c032c6da8110255a9ad"],["/categories/小小结/index.html","26c8cb414b540471db493a3f69e78c7d"],["/categories/模板/index.html","9f699a4f5395f29d6af5c4c2be08f8f9"],["/categories/毒瘤/index.html","55ad49adbd1dfc28311145eba86c444b"],["/categories/随笔/index.html","99d06c7321f7d7215e68c9323d03e0f5"],["/categories/题解/index.html","380fe2e3daf2bfa4b3bdb26a2ed4f872"],["/categories/题解/page/2/index.html","1614b8bb1f6deeaa431d34b04fea43fb"],["/categories/题解/page/3/index.html","271e2173efed2debb4462d24d8b67d1e"],["/categories/题解/page/4/index.html","69e4bad1183cf1dc9c112da51fe056be"],["/categories/题解/page/5/index.html","865b0aced7bc615159264ac0d3b4b4f2"],["/categories/题解/page/6/index.html","80eb7e7a5a62a8b55e3f400f59d2d5c8"],["/cfdpproblems/index.html","7aaf015302cf7eeb5782d84c28435c45"],["/css/style.css","8efa10b135d7a0c2d7ac97f72e9529d5"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","2795c90e9bcad2436194e980a620f5fa"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","786cc45d137c30721e9ab4134d32dd58"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","bd9f48f50b1a96195d5e7e64e34e89ef"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","df39ef4f4f24b8e08fec47c406ce4beb"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","6ec9c3dd9e597ac2b929e683694e9607"],["/js/search.js","d9069294b48a24bcfa54a6fc30d3e8e2"],["/js/valine.js","7c861d05c6631b2700327045a5767d08"],["/page/2/index.html","1ed9c1dd94a24158fb8fb5eab2ac14ef"],["/page/3/index.html","b92a2e70d3d17d3f8720de02811875b9"],["/page/4/index.html","5bd49a368edc1bf6275bfb25e8033275"],["/page/5/index.html","3ae9469ba09c00967783e98714c40808"],["/page/6/index.html","98c23ecca68b00d713556eb620c7f4ce"],["/page/7/index.html","68b6bc48e8d3138baefa32a46db0d047"],["/schedule/index.html","7b1fe03e1f8e38f8b1840226a0e31d8e"],["/simpson/index.html","f84d89e06f72f783e6faabb1b99df1f2"],["/sitemap/index.html","e21d5a696d817e3b4f64d12f1d9724be"],["/tags/AtCoder/index.html","21a1264c52c92402b73797c69b68cd0c"],["/tags/AtCoder/page/2/index.html","24d47f2bed7bd5d68f5d0cab0b8235c5"],["/tags/CodeForces/index.html","08201f4fbd4f435851b9656a32395225"],["/tags/CodeForces/page/2/index.html","001df8ceb6cb14cb324e6d1158cf7ffd"],["/tags/CodeForces/page/3/index.html","f3775880e981c6df96731349ef7ec6c8"],["/tags/DP/index.html","2c5dd5e7befeec83fd6fe18114420cd3"],["/tags/DP/page/2/index.html","7b5e01625195296ef12079ab6288cb66"],["/tags/FFT/index.html","3e85692d3d809f9c81a1b701b548cfd3"],["/tags/LCT/index.html","a0d22338b503d129e0ae6ab2cd977351"],["/tags/Lucas/index.html","6046a864e60b315a637dac7aa0bf4c45"],["/tags/SPOJ/index.html","a7d9fa063bdc636d407f8e8ddcc14391"],["/tags/USACO/index.html","03664fd53f5d3c6717ab98a07dd96269"],["/tags/UVa/index.html","375930d8e7b9652c4b4db10c5a891c90"],["/tags/ZJOI/index.html","c1796500ccf7199253384a002d7e568d"],["/tags/hash/index.html","9c95d77e3e884f6530c8269df02aeaa8"],["/tags/index.html","ce04e9c191ece46c8c4c0d6b3fbd2d9f"],["/tags/two-points/index.html","d3df787ea9c4dc6b8a8a62a2e7f15bf8"],["/tags/二分/index.html","250969758cb8b424e5cbc45c6da33858"],["/tags/出题/index.html","bce3e040ad1f2e062179e942216ab2fc"],["/tags/分块/index.html","ba3beca49fe2130023cd3b52a8cb3204"],["/tags/博弈论/index.html","4d77066fd40c83f19f64d94201fdefc8"],["/tags/卡常/index.html","27313455d182197d968a60a43ce12743"],["/tags/图论/index.html","cd6511e8bb1f902e852752b5e8e7be91"],["/tags/字符串/index.html","711656facea40b8d0d8d6025a25d6bbd"],["/tags/并查集/index.html","ae2a9144a9eb1e6081dea75b0368efe3"],["/tags/搜索/index.html","227b672c0d2a4b6e57bae8d9d8adb7f2"],["/tags/数学/index.html","41f1937083c6ffad6e256c538f26e008"],["/tags/数学/page/2/index.html","82eb86857bc56019ee4c440c1b870539"],["/tags/数据结构/index.html","4da9bd892e8422a5ab3c00e2ca25b80f"],["/tags/数论/index.html","9cf790631efa6f1a9abe5f1294600e4a"],["/tags/最短路/index.html","58e65c68ec996d5254ca53c1cc2ce8f8"],["/tags/构造/index.html","ab0936d2f35140b32bba000e2a62f1e2"],["/tags/树状数组-线段树/index.html","7d606bd097999e9823bcae6891b3771d"],["/tags/树的重心/index.html","c286718b7c134ff905ec68e3003b3b6e"],["/tags/模拟/index.html","47760a92de1ca7dc90297dd21eb73702"],["/tags/模拟赛/index.html","dbe81ef85c3eab41c861a02e5eadf70d"],["/tags/生成树/index.html","a79113bf230f6645f1bdddca8afc6363"],["/tags/网络流/index.html","130c31580e5e5b51703910a3d27572ef"],["/tags/记忆化搜索/index.html","023ba06fa914eed182eb18e947ec072e"],["/tags/贪心/index.html","ef7a1776e6f08eee1dbedb8cad4cb149"],["/zkw线段树优化dijkstra/index.html","2c5e7c1899b7d473668c23d6262037e1"],["/一道有趣的计数问题bywzp/index.html","92bd52767b18a80af0dbd65e598d556f"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","36050de9f493da94461b545f558ea01e"],["/做题记录/index.html","ea6d4b8f4d9747ad19e942f23b36ba29"],["/换个主题/index.html","570cb3fdc3e27731558f8b2d72b4cc7d"],["/整数分解求乘积最大/index.html","46d0052693f17bd9f1d1a73d0f154eed"],["/毒瘤/index.html","027429898da54ddb84333953aee09d9f"],["/浮点数开根/index.html","a9a6e4478c6c622157feb2916f8ac6c6"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","f5966bbec9a35add736a7f9af43ca78b"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","3a2017d4d66b0709c1d92d85922bf7a6"],["/第二次出模拟赛/index.html","8e5b8d8b0888328943cda357d6064225"],["/线段树入门/index.html","7ca21eb1151307dfa83be31d05aeafe8"],["/航空管制/index.html","ee3420bae9ec4e58cd5481c5ae98bfcc"],["/造一棵树/index.html","b97e19fa7da84f74583ecfd7861710e0"]];
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







