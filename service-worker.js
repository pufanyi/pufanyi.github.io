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

var precacheConfig = [["/20180524模拟赛-word/index.html","b1091bebc4005a914d56ddf25c44c10e"],["/20190409模拟赛T1/index.html","db60d4bee77079998859ebbc65be2716"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","15346633b071b0caf118a4938ce4b501"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","a4c815bb8be7f793cebdec64c953a7c4"],["/CF1045B/index.html","cf71c4f5de5e1ac673641856cd07cfe0"],["/CF1137F/index.html","6c20ca0a4025549a6aa155dae44a37a1"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","eeb1bfc7c42c1d17ae1a2fd82393e5f3"],["/CF1264D/index.html","0fd7d4e73eaf15351ca457ee5ec10463"],["/CF1288F/index.html","e50980a459602f310202fa7c073f529f"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","2dedc74f621583c592f6b6e65419e812"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","6617ba1d971c1516d2df4837bfc2c06d"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","276c5ec637690b6fd0ba5087ef76b0fe"],["/CF449C/index.html","4f1bca7d9fcbf40a7c27d04d38a4a1bb"],["/CF512D/index.html","4c335227b87ee08898e4d0d120565cf2"],["/CF516D/index.html","b63b1e70f430f0f2bb90c119f5b7195d"],["/CF551C/index.html","4052272a4942a78f93873560a18e8328"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","c6a56919252fedaf77c444e97a3df29a"],["/CF576D/index.html","d28c72ddd0e6f8f1d6ab97362059437e"],["/CF708E/index.html","9fa652b34f793cb55c61cec1a072584c"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","4e13612a0601062479dacb81cc05ff8a"],["/CF875E/index.html","786e34e553e2c1092469e0d6be77ee62"],["/CF986B/index.html","54055ad7a17f93ca5e6a8ff583835ea5"],["/CSP2019后做的一些题/index.html","3ad5ef1769bda6b9c882360210ff22ad"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","4a6e2cb5066e0c633ba99d5d5140cc05"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","94b28e61e8e6bed1e929c41061faa006"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","457775aef13b465e52951abcb2d9ceeb"],["/SP1026/index.html","a4605ed6e9e034b859d4ac8c2c4d4e23"],["/SP4063/index.html","be05639ea02d0266663af7dd0f23b070"],["/UVa11600/index.html","551e51d2f672b32c8171208fe1f38f23"],["/UVa12421/index.html","092a9abf5b776b3632bfd77d172f5fd0"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","87613ff55b992ab4613049495b510561"],["/[HEOI2015]公约数数列/index.html","113d0f831f37645fcda65907423d3f3c"],["/[北京省选集训2019]图的难题/index.html","6a2ed1ca6e130af7284e56355f846330"],["/about/index.html","bed1fcdf9a63a0fbb3d03d4371eeec69"],["/agc005_c/index.html","87ea66999400757aac3ce048e7d8eb55"],["/agc006_f/index.html","7bdc787ada8cc2c81f05a7605f8b28c2"],["/agc012_d/index.html","4cbb171135a3791e0e61c3f57d23443b"],["/agc013_c/index.html","ac42b12be7ba9b5abab2c8f284e8cfe8"],["/agc014_d/index.html","a52bfcdd72690a3be7f73e321e9844fb"],["/agc024_d/index.html","dfe4241c41bec5db307ced1b2e4656cf"],["/agc029_f/index.html","b2e9ecbcd214103d9ac991653b82ae45"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","b8d20937b64c86250473922de552deee"],["/agc041_d/index.html","7fcc3e6a941fde9e9f6c3e71103b0d4b"],["/agc041_e/index.html","762cd845f28f2567ed5a22a3039a6165"],["/agc041_f/index.html","aa9cdea8f706f38b2068764833d3577a"],["/agc043_d/index.html","88b5f4b4df4516d93b6258914539f159"],["/arc068_c/index.html","e08a5199d399681c0a5e5871cf158646"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","4325a13a2abd3e19a31106f40f0ca271"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","f16a52d2d1bfc0557ad6d4380c9647a6"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","2a1c4f5bd8ad523f108fe7553a9cb9ab"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","c6ae35c7287f9ca4d38bf0b842d7983b"],["/archives/2018/11/index.html","ac0208bec6c4ea191b6f0f12c5ed7813"],["/archives/2018/12/index.html","c57250f712197a18dc7d9222a6b72cff"],["/archives/2018/index.html","a7ca67d83d8028d0d5e6b002a6f25fad"],["/archives/2019/01/index.html","24918df3fb3c859be0e595c6d0bfac71"],["/archives/2019/02/index.html","d950c6ce5554f15d08960b5ebee25933"],["/archives/2019/03/index.html","0c2b1f2714a8af113c21c59dbda1798e"],["/archives/2019/04/index.html","74b38c11001436dc1bb8b4e0a6504cd9"],["/archives/2019/08/index.html","50f5eb20f803784ae9c82ec7040780ba"],["/archives/2019/09/index.html","cbf8dbd06a52023fbcea7d7b03e64d16"],["/archives/2019/10/index.html","7ef83e9ce7a8fb4b7ac3362e10d95c56"],["/archives/2019/12/index.html","80d4cad9934b6d3fef397a32da70843d"],["/archives/2019/index.html","37d9671cc0722ed7e7a90e6a3ed42964"],["/archives/2019/page/2/index.html","d5a8bc81dbefc3acfd8d401edaed87d2"],["/archives/2019/page/3/index.html","cc328a85bc86d29614214f6c3c227098"],["/archives/2019/page/4/index.html","e2e6f6fef086214a53c03fa1f78a418b"],["/archives/2020/01/index.html","8bd69ead22ffa9626b98877678565888"],["/archives/2020/02/index.html","42cb3fc5d598f5ab11101f75db02ada9"],["/archives/2020/03/index.html","49695e7de1b79a3f8dbd7db66c7443a2"],["/archives/2020/index.html","4232766232d931d2b12832fe62563bd5"],["/archives/2020/page/2/index.html","dd1fa676c861a6dfe415e1b8181ee6b8"],["/archives/2020/page/3/index.html","1c8ef1734e86f2c0d2107aa84780f1c4"],["/archives/index.html","0d7cbd527689cc3583554db8dcba0970"],["/archives/page/2/index.html","2d76a9984012db6ad7dd5804a11dc577"],["/archives/page/3/index.html","2d76a9984012db6ad7dd5804a11dc577"],["/archives/page/4/index.html","2d76a9984012db6ad7dd5804a11dc577"],["/archives/page/5/index.html","2d76a9984012db6ad7dd5804a11dc577"],["/archives/page/6/index.html","2d76a9984012db6ad7dd5804a11dc577"],["/archives/page/7/index.html","2d76a9984012db6ad7dd5804a11dc577"],["/categories/index.html","a08b2b77165881aaf4755ba417416727"],["/categories/公告/index.html","e6dd3c663307eedcd0833e8f71e89f12"],["/categories/出题/index.html","be3b7e09928d0f1644c4adc8718696bb"],["/categories/小小结/index.html","40e96b35197d4dd9c2f5a95973abe8ea"],["/categories/模板/index.html","da7c0956dda11e427f0ea13c5394a5d4"],["/categories/毒瘤/index.html","81c4819be17dce27503a6b2187914c81"],["/categories/随笔/index.html","3eb4d4968e5501e1cda25eb72ae41a9c"],["/categories/题解/index.html","2198c55259d8474d08d64eb6a7973380"],["/categories/题解/page/2/index.html","521faa670e1e444b5635813182e422c4"],["/categories/题解/page/3/index.html","5eb9a28b6b046779e61acfbab0b19ec3"],["/categories/题解/page/4/index.html","c3430067c3f128385d3dd66e5dfb1177"],["/categories/题解/page/5/index.html","3bfe64e43142692b3530d0f286094bac"],["/categories/题解/page/6/index.html","73577f5167ede731353c61e320eec900"],["/cfdpproblems/index.html","67f012e3e68983cbd218e0725c40d155"],["/css/style.css","8efa10b135d7a0c2d7ac97f72e9529d5"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","9c9c44933dc26fccdc7a2570023076b8"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","da9cd557c427cbfeb819b3e83c7923a3"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","ba6533ebf9ba6fa07c31ab51a6fb0ce0"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","df39ef4f4f24b8e08fec47c406ce4beb"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","0796a1c1ecc4220603479ba1ddbfda62"],["/js/search.js","d9069294b48a24bcfa54a6fc30d3e8e2"],["/js/valine.js","7c861d05c6631b2700327045a5767d08"],["/page/2/index.html","e19e3c047e3f0ca0aeed8232fc351ec7"],["/page/3/index.html","f8a8fc10bdfce2e6588f82bf79fa5e2a"],["/page/4/index.html","5caeff6bc6f90f0d3c0e1ffca0ecc1e1"],["/page/5/index.html","aab1138196e4725fa1c154102f7c26d6"],["/page/6/index.html","f7f01fca89705e4f529e42a9d0f86ddb"],["/page/7/index.html","578b5852ecc78d90f31fac853179c4b7"],["/schedule/index.html","fa2a4a37adea0fc7cee3ee5201c36a86"],["/simpson/index.html","bce54cce4ca6bc8db63f0233c468185c"],["/sitemap/index.html","a2bd4846d658e0091dd25a89a36c17c6"],["/tags/AtCoder/index.html","a0c6ef00e3ccb6f3396dfb540ac694ea"],["/tags/AtCoder/page/2/index.html","bb0024e2db469aa8facd6de4f50a59bc"],["/tags/CodeForces/index.html","9fd43a468ec9357c703e198299ab2af6"],["/tags/CodeForces/page/2/index.html","88db6f757b6ac18798a046d11dc42911"],["/tags/CodeForces/page/3/index.html","485a6bc7d208ffc98bf48d988bb3af46"],["/tags/DP/index.html","599a8f514c74e9df5abd28fcd09b2f90"],["/tags/DP/page/2/index.html","a77adc8e3d6b60d01412053c0e1852bc"],["/tags/FFT/index.html","be6cd710cbf15967e5f6398d7572bff5"],["/tags/LCT/index.html","2c5d437b1c2c44539427ac732333ad31"],["/tags/Lucas/index.html","9a309c0e3cbe0cc8a61e5690a9d51c1a"],["/tags/SPOJ/index.html","82989dc4a34c27d3c74ab18cb2c19551"],["/tags/USACO/index.html","c5ac7b68802c9ff6049edf83519d8947"],["/tags/UVa/index.html","546481f3b9f085d27c665fb04eab1771"],["/tags/ZJOI/index.html","7e916a3af079aedfdb3bae5cc4a7c106"],["/tags/hash/index.html","570532122665b637a43e2e1101039aa5"],["/tags/index.html","90d75e8a31055731ee2a0802f632aa07"],["/tags/two-points/index.html","447cd7920d4d91d9e731c41fe1b72173"],["/tags/二分/index.html","613d81226b08226fadf43738b94f1a68"],["/tags/出题/index.html","834022db7a3daf8a7d610828a46c0657"],["/tags/分块/index.html","bca9f3bb5554bec5bae4a2110bd897bd"],["/tags/博弈论/index.html","148bfae127a7edad82c1ed2fa235c399"],["/tags/卡常/index.html","94fab67954e0e889b85e0f907549bb71"],["/tags/图论/index.html","ae6cde82f5ef909eb7387b6bbf11dc54"],["/tags/字符串/index.html","fef34b2aa42f77749ab60316a05d6cd5"],["/tags/并查集/index.html","6f0c72f9ee0de5f51a2c5e0076033e61"],["/tags/搜索/index.html","432776933b65df81685987e8bb2a94b9"],["/tags/数学/index.html","983620f6c818a302a269a7a031464de7"],["/tags/数学/page/2/index.html","993a74db06cc6386d9b15f09de371a2c"],["/tags/数据结构/index.html","9d7963dcb5b09946e1608de6252bb8ca"],["/tags/数论/index.html","13b27d8f8f87ee621a65a61acb36555c"],["/tags/最短路/index.html","8e706c5e6ad0c3196da0e9120af2f975"],["/tags/构造/index.html","18523dcd854b587614490c398860e260"],["/tags/树状数组-线段树/index.html","ea718e9eb593b48f629415bf644bffcd"],["/tags/树的重心/index.html","e8dcb28236a571eb9c2b3484c6201ccc"],["/tags/模拟/index.html","266dc48edac1ab378402942a37193f23"],["/tags/模拟赛/index.html","22a79bdb3382515d398e284ea392bc3e"],["/tags/生成树/index.html","1859a6f220517bdcb91d6b3a4244b368"],["/tags/网络流/index.html","7c9d34921a480f3fde38e286fd83e7f3"],["/tags/记忆化搜索/index.html","59b5ee0ac566cdc4553155866349ccab"],["/tags/贪心/index.html","5aac69d66ecaf09f8bb846cc7dff74af"],["/zkw线段树优化dijkstra/index.html","5127b46c3edf3db5594556b635e6d74f"],["/一道有趣的计数问题bywzp/index.html","90baca50efc86d87c3bc9fefe59b1a92"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","77bd3c9b5613d4727a1dd2590fd296bd"],["/做题记录/index.html","168a48b8951bdb6172c7d200f14d7030"],["/换个主题/index.html","29f462a33dda5ce4dd7b90f7d8634b54"],["/整数分解求乘积最大/index.html","bb59b20281947ee280f94bc9cdf21888"],["/毒瘤/index.html","7cbbac6e825405b7ba3108f64e4e4b67"],["/浮点数开根/index.html","705d2e78f9e7ca2fe4b2e199f3b90937"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","27df2caca012fa0c56e0f9ec2a26c85b"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","646d64a20d24ce268d3700e6fcfb415c"],["/第二次出模拟赛/index.html","42c8e7b99c71a0581e7c9ba078fd55ea"],["/线段树入门/index.html","ffad8b04e8914714e80b8b1ef8ad0e24"],["/航空管制/index.html","836157adcbeefa7bfb4475de4b58d303"],["/造一棵树/index.html","6c687a904d4cf3fc7cd4a1097753b817"]];
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







