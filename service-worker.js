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

var precacheConfig = [["/20180524模拟赛-word/index.html","4e0ecd1b8de4d78bc4c6bfe11f751431"],["/20190409模拟赛T1/index.html","dad657ff285078f9b0a67735701c9a77"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","15346633b071b0caf118a4938ce4b501"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","a409cbf104239f5db8ec027f5c5f689a"],["/CF1045B/index.html","ea81cbf6213d103d2653467bbb616ffe"],["/CF1137F/index.html","0dd8ca5fca3517207c9707bfb72050c3"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","4ae73e20b780f915cf7fc2e216728db6"],["/CF1264D/index.html","5a6b0a1993196d2fe199bbcf2f24bc6d"],["/CF1288F/index.html","dd2e3895766cd6c8bdf7635e5ed32db7"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","02f5d44879cf170324926e590154cdb8"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","c2b32f5361336892cf47d383535d32ae"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","db8842094743b48b32dc0b49b26991b0"],["/CF449C/index.html","663cef27b8c0696556a5329d17cb2160"],["/CF512D/index.html","1258ffee3db87b43ff2c45ddd9502f53"],["/CF516D/index.html","9bc82df1c99ef0339a9562a45101f330"],["/CF551C/index.html","ed808e3d110b81f2d602420f2955acdb"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","fe3e8a33a59f14f11b9177b399f967a0"],["/CF576D/index.html","57fc68234a2ec7938b63c53faf4ab2b9"],["/CF708E/index.html","607f5eaa9241d7a0d1c252190acaf5b5"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","9c568653a4427f58d396542551926acd"],["/CF875E/index.html","855faabe244d19d3c6bd6031b12cb82b"],["/CF986B/index.html","6a19122ceafc7168c9ca6917bdab5cb1"],["/CSP2019后做的一些题/index.html","ec39b0fa6a43a3c406b7516f499e83d2"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","66fd102f374c772ffdd7fafd2d64c211"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","8c6c8a3982c1caeb179bb2b29c4c34ba"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","35e69bcc93dd2d82e84e2d7b9b476c21"],["/SP1026/index.html","7fb2560b0eb817d7918595dd582c05e1"],["/SP4063/index.html","a09a39a2a91eed762adbc26ff90b6097"],["/UVa11600/index.html","fe5ad272c8735c3522c5e4f4b5d7864a"],["/UVa12421/index.html","82169558401d4ad04a558c053b1b28de"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","0ea93a3dd2c16216860cad0195bfee13"],["/[HEOI2015]公约数数列/index.html","0b0dd377ca689f621312e278064239ee"],["/[北京省选集训2019]图的难题/index.html","72bd3cb43b9bd2648f26f17e59398bc7"],["/about/index.html","bac380f30e2f4bb7aeda774d1bc9b9f8"],["/agc005_c/index.html","07d547b27ae4de10d00e4d4da8f631eb"],["/agc006_f/index.html","c0a41d676b6e4586788ac0c11db5b612"],["/agc012_d/index.html","0ce86f3d3a95f626f6a3da4e903ebcac"],["/agc013_c/index.html","7d43638aca2637bec99b17575978cac4"],["/agc014_d/index.html","5c8b17ef1b4988600660650cba399625"],["/agc024_d/index.html","794e8e95e15b14843b222f93c30be1c3"],["/agc029_f/index.html","ee47c52909b05cefe7ebe0e69d0b649e"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","61df3eb69b719ca666ed5f10f490a931"],["/agc041_d/index.html","5f42af06466006d43f11a8fd00dcdf0c"],["/agc041_e/index.html","5c188137f809be03e50a0e5baf3c280c"],["/agc041_f/index.html","4f6869d4bba2c2724c350eec93423d48"],["/agc043_d/index.html","bc395b4811fb018ce38626c3227bcf9c"],["/arc068_c/index.html","fea503b9a0d2588bdcf6062a132eec75"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","22a8d8cd29ccca6b3301d77ca7c6be28"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","a4e97ca979abb49640d948d012537882"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","4a375c5ed9c57e07075204f601614291"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","8cb742c486fa8d959955c5e59f804d85"],["/archives/2018/11/index.html","147d5ebb6c79e4eef26798f7478e4536"],["/archives/2018/12/index.html","90f87c8a8c8eead97c0da4e3bbf22901"],["/archives/2018/index.html","4fb5588188b0fa157eee74345e5fa40e"],["/archives/2019/01/index.html","708bc3a80f114ff8b1d776edf869bbe2"],["/archives/2019/02/index.html","5d7e387b76751a43677d0b66debdb59a"],["/archives/2019/03/index.html","c51eae8b1616eae0898c646c702880ad"],["/archives/2019/04/index.html","c6f36292749fa0cf4e3187f0449a8a49"],["/archives/2019/08/index.html","92f049b0c3de4885d286bf65c48fbdf3"],["/archives/2019/09/index.html","bbe0a014416e2f4552d09770d0cc9aec"],["/archives/2019/10/index.html","e884a8eeaa77b18649644cf8c88b2dda"],["/archives/2019/12/index.html","9c3a880853ddcf60f9effabc81f17641"],["/archives/2019/index.html","7e0832cd1cbf38ff1f14b044c1c2ac04"],["/archives/2019/page/2/index.html","5ff7c47c331c761a2b7ea15d09d5e13d"],["/archives/2019/page/3/index.html","dd7442129f873b1291ba545e3d51d970"],["/archives/2019/page/4/index.html","bdfa12d08934f133f466e8ad2740c40b"],["/archives/2020/01/index.html","8f4d2bf987d83a723a3dd296d48f7178"],["/archives/2020/02/index.html","cc84068746b0ec9fd4e5b5e49c9b3595"],["/archives/2020/03/index.html","ca87d784d228428a33728beb66969d85"],["/archives/2020/index.html","57ff84bda36c06a862c0dba6aa6ceeef"],["/archives/2020/page/2/index.html","c1347e95780b41a486eba0f3438d25b5"],["/archives/2020/page/3/index.html","9b8cbe48c84499eb89a28b2ba627b9cf"],["/archives/index.html","0ff2eb7155d146d8b4d04cf45d4ec0ec"],["/archives/page/2/index.html","95c03f205f1ded7055296a84f623cdda"],["/archives/page/3/index.html","95c03f205f1ded7055296a84f623cdda"],["/archives/page/4/index.html","95c03f205f1ded7055296a84f623cdda"],["/archives/page/5/index.html","95c03f205f1ded7055296a84f623cdda"],["/archives/page/6/index.html","95c03f205f1ded7055296a84f623cdda"],["/archives/page/7/index.html","95c03f205f1ded7055296a84f623cdda"],["/categories/index.html","20b341b290740c4ffc1ce859eff23bad"],["/categories/公告/index.html","0c371f0bfa0a0270c62047fd1cc56a16"],["/categories/出题/index.html","573a09735a9efe67850fcd4208df2903"],["/categories/小小结/index.html","def02a140dbe52cdf545d6a43a52f272"],["/categories/模板/index.html","fa96c97b0c57c4aaae06541f25222bd1"],["/categories/毒瘤/index.html","81d943002677e2e5b0f2df22c66daf6d"],["/categories/随笔/index.html","919800ac1fd7c677c469be17bf5818a7"],["/categories/题解/index.html","dc25bcc97733097ce87132c53a6350e2"],["/categories/题解/page/2/index.html","b09ccfa3cc0292788566b6e109ec2f87"],["/categories/题解/page/3/index.html","26c34723346d0d05eeef771a231bda6c"],["/categories/题解/page/4/index.html","e55aaf6c7b03e5bac64338cdea06580d"],["/categories/题解/page/5/index.html","663e22c360759542927e6ec10b0319f1"],["/categories/题解/page/6/index.html","8f80b5fb750082f5645b5b257b9031f9"],["/cfdpproblems/index.html","25413d9b65914526d44c480b2d5767a5"],["/css/style.css","8efa10b135d7a0c2d7ac97f72e9529d5"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","e917d6c9961f17cde51acc404d03cf7a"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","b889469c658b266e001031d235d2415e"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","bb2bdbd8c5abe16549ed4603830c7034"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","df39ef4f4f24b8e08fec47c406ce4beb"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","5faa4bc5591d77625873b432c37b407d"],["/js/search.js","d9069294b48a24bcfa54a6fc30d3e8e2"],["/js/valine.js","7c861d05c6631b2700327045a5767d08"],["/page/2/index.html","850a9274221b0af346c9723f7b1627a2"],["/page/3/index.html","85db55c542d2ef2f29d98084e0d9eeb0"],["/page/4/index.html","1043d1d50db3ccf1ddb713e98717abf6"],["/page/5/index.html","813a6a56edc5770aa23b5c153a5e0eda"],["/page/6/index.html","df481354b13fd509fc6c6db245f106a1"],["/page/7/index.html","d194508855fe71e0c0e54ee613dff3e9"],["/schedule/index.html","c1e97d3b5f0eaa36851f4722885def95"],["/simpson/index.html","f87b33c76a93e517b26c0fb4ab923c3b"],["/sitemap/index.html","4cc8e696f2827a4b23099baa4a7e7209"],["/tags/AtCoder/index.html","dbf5cac76ee336a14784cb2d3aea430d"],["/tags/AtCoder/page/2/index.html","d5f94c0aed036386513e9cdf0a17b05b"],["/tags/CodeForces/index.html","4f2be882e567b88a5aa0b373f7969baa"],["/tags/CodeForces/page/2/index.html","8184f29c12dc70cbdbd1f654b3017b8c"],["/tags/CodeForces/page/3/index.html","83019156f7208693768383133c33981b"],["/tags/DP/index.html","6e53baab786a00d05ece7b180122255f"],["/tags/DP/page/2/index.html","9acd07131c294f8cdd601c97f480750f"],["/tags/FFT/index.html","b29b06550adf1b9be8edf764e11dead6"],["/tags/LCT/index.html","8438fd69265f88a08e22a4ecca56ebb4"],["/tags/Lucas/index.html","e1b4f9c6b46061b88ccb9784693d86ef"],["/tags/SPOJ/index.html","4de68061c728663f9ef35331d452ae0c"],["/tags/USACO/index.html","c845a936e59e2ac102b985759dafcbd9"],["/tags/UVa/index.html","a32f75c36310ff90093e459853f6ccf8"],["/tags/ZJOI/index.html","ceb57727a308bd5486538d7dc3352999"],["/tags/hash/index.html","0fba97f4ca4ca6a1e995ad08af9bdb80"],["/tags/index.html","5f1f33ae8ad274583e017578629ea729"],["/tags/two-points/index.html","03b4d4225881f571dc2f5c1cb29ff9fd"],["/tags/二分/index.html","8b335538b12a1458cbc88f801d60ca39"],["/tags/出题/index.html","3e5c35d3ebdc953c58269209675379d9"],["/tags/分块/index.html","10ec7fc688a6b6d71a336119d591b1b5"],["/tags/博弈论/index.html","94abe82dc8c06e4e5a7b3ac8bc90952d"],["/tags/卡常/index.html","6dc4eb79c6023ac6e35c34d85f4401a4"],["/tags/图论/index.html","e5d7e78a340ad01167ad5d45511649ab"],["/tags/字符串/index.html","c5f72140f8108d64f7a56fefcc39bfa1"],["/tags/并查集/index.html","ef8b48389d3c54f0aad5666fc22a5a5d"],["/tags/搜索/index.html","9290faf0e00e8f20958075087435f9f3"],["/tags/数学/index.html","b46d1540ac7b5ae034865413427d1d7a"],["/tags/数学/page/2/index.html","9e95a5faa95016e0194c373389300ecc"],["/tags/数据结构/index.html","7e6416102ec9ab116a7f06dcbaa678ba"],["/tags/数论/index.html","5f474bcdcbcebbd2f10b7fc2f70235f5"],["/tags/最短路/index.html","520a28e274b749442ba1668a1b1b176a"],["/tags/构造/index.html","b3bcac04204b9f501109c809d36507df"],["/tags/树状数组-线段树/index.html","f3793479a8296f054fb8758d07882992"],["/tags/树的重心/index.html","525f7b8512d6229b10853a6fa5a86611"],["/tags/模拟/index.html","e2ed1b9897902b93d3e5bcce76f6c223"],["/tags/模拟赛/index.html","9bb8fcd61a220756b02988d847aa788c"],["/tags/生成树/index.html","cf6e916c4352d5a34804dcfdf9b8dd1b"],["/tags/网络流/index.html","045273f958696ada2d756caebf8e205b"],["/tags/记忆化搜索/index.html","a523d567e6b446775e633029b5ecba51"],["/tags/贪心/index.html","707044d4c3434d8d997e8fe3b158f99a"],["/zkw线段树优化dijkstra/index.html","d3b290881a5a0b792c34ab47ec9a80e2"],["/一道有趣的计数问题bywzp/index.html","fd7373e37ccb98d850706117ac227fad"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","c2eedea3df35ff532bd8f7ab43489f36"],["/做题记录/index.html","0946bb5f627a4811a6095be98eab7142"],["/换个主题/index.html","700e1131c65540c03f52d4d0bc869727"],["/整数分解求乘积最大/index.html","84f0b56f02e58a6b6e0db9ba522b8991"],["/毒瘤/index.html","4e392d6ddf34e6bd7fd5a13dc5576176"],["/浮点数开根/index.html","ba5bc05a18a899fe8a9be5c6935dafa4"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","fe1cd641a8445f12d63720c4528edd66"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","814c483dac8bfbc8acdb897039bea146"],["/第二次出模拟赛/index.html","8f4604db60b45633758af1d08e460d95"],["/线段树入门/index.html","7ca913783653eaacc9212257b9bb0a51"],["/航空管制/index.html","a0d4c0de360c660ee73e51fa7f41eb79"],["/造一棵树/index.html","6d67bb55085aa0a425e447674ec044cb"]];
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







