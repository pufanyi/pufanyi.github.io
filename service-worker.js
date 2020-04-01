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

var precacheConfig = [["/20180524模拟赛-word/index.html","ece53c92dece6fb60ef3c7b52abad2c5"],["/20190409模拟赛T1/index.html","9cfdf90ac1e9434b8790d7a257c6ca23"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","15346633b071b0caf118a4938ce4b501"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","4d56378dfeb865bb3cbb2cffe782a826"],["/CF1045B/index.html","aba9622ad6df8dd64641f79d9b3a6b49"],["/CF1137F/index.html","824732f346f556d08d4e36d7e8f79bb5"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","4aa898601cd89f210788c2ec2f668344"],["/CF1264D/index.html","d0e28637d6873a3bb74bfdce963b5d01"],["/CF1288F/index.html","c7229bddcaacba27210ab601903643cf"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","f73e4ce475772713980504d05796632f"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","d30cc346776f8b6fbc0cc2c2d02b1bf8"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","7bc46cb097616da62979a54e91b1b39d"],["/CF449C/index.html","fc6f16eea083de594f03f69ff7037d20"],["/CF512D/index.html","63e62f24ec4d9f676e0dd0836877cec3"],["/CF516D/index.html","42d6a2f48ef55aebba734e1dea84dc77"],["/CF551C/index.html","7d51b44d7d2d9a8d4b5c0fae5acbfc31"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","4dac27b60320cb53da9385941fbd2d13"],["/CF576D/index.html","6dbb552c7f14e0d8c33adaf802f957b4"],["/CF708E/index.html","e51df48a41334abd29ed2a0885d02369"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","9cfca4c4cd4338a7b3006c7a02ea2862"],["/CF875E/index.html","5930fc9d3e93e62eec8eff64f742853f"],["/CF986B/index.html","4082290bc1314843f994d136fbf178e5"],["/CSP2019后做的一些题/index.html","4863798979586ac210dfff78043e46cd"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","f2360d6595fd47d42323a81d29750fc2"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","fc91ce909d2abb329ddab18601241280"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","d1abdac2615d8f775dd232f978a9885d"],["/SP1026/index.html","21e6d91ef1229122da9fac92cdcd7cf2"],["/SP4063/index.html","f65da7d5d01647422c89a8ef672aef29"],["/UVa11600/index.html","d69715b7925ae07ed11be37fe6041b8d"],["/UVa12421/index.html","390237a41db896634c8af0af9d09e9c4"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","bfc3f615cd02a1c70ec0f68576fc5253"],["/[HEOI2015]公约数数列/index.html","17439e853e569b30563ac68904031bdb"],["/[北京省选集训2019]图的难题/index.html","7abb99daafe2df172e921ee507f7ea4e"],["/about/index.html","ac5b68ad98f232528f4e72079023ab9a"],["/agc005_c/index.html","d438df19556112ca87949c7b30a79ec6"],["/agc006_f/index.html","0521881e2da294714640ddcf65099594"],["/agc012_d/index.html","b2fa928f11825eb49272983b1faa6e80"],["/agc013_c/index.html","9026944967f5062d263cfafdf2766ed7"],["/agc014_d/index.html","a056cadeff99b01732aa2bd33ecf8ff1"],["/agc024_d/index.html","640a68c81c6729d4901645f53be755f3"],["/agc029_f/index.html","ca96b872f244d8e0f4734654dbc21be2"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","eef53076b32c09f84ab2f5ce58370fb7"],["/agc041_d/index.html","453dedbda71716539c531aa6558b79bd"],["/agc041_e/index.html","7ca5d4ad63db96080bc0a1066ef62583"],["/agc041_f/index.html","02637e5243401b477f32e79b7fc35304"],["/agc043_d/index.html","c609d9ca56ceb8625abda02824a77751"],["/arc068_c/index.html","5160a6893a8040475c943100da352e9b"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","43d7ef90365f060698a6820a0385a251"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","7e76afe995724ccce6f7186f8cf754d7"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","d524b7d6c8a93436a6464a254a196e0b"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","b52b15ae69eb2214f9bb1ddd3a7245b3"],["/archives/2018/11/index.html","6ffc7488c653b9471905a1b8c4c8e3a6"],["/archives/2018/12/index.html","1ea149caf784b3d794d57632902c9a5b"],["/archives/2018/index.html","5a5c1c3a5fff74c2e48028681dbc0bd8"],["/archives/2019/01/index.html","5a8fd1f22bffbcc227631efd8f991d20"],["/archives/2019/02/index.html","cbfbd5a3a929635911788fab322807d2"],["/archives/2019/03/index.html","b6991ef95481fd30720a8e8f8295c034"],["/archives/2019/04/index.html","a0ea9aa5d98a34d8997d69f1766b5f07"],["/archives/2019/08/index.html","94d6f42bf75fb4e254dddffc074142bf"],["/archives/2019/09/index.html","3b7d5fc6925d1ec94dd7f42183b2470b"],["/archives/2019/10/index.html","4fa9a9910ae7ed105ad6dd789dfa3d59"],["/archives/2019/12/index.html","3dd297d66a6ff40cd04e4ab062689fd7"],["/archives/2019/index.html","000ede5284cfefa175940ce8e4e11f24"],["/archives/2019/page/2/index.html","d874a76dbbbc97800ca345eb2b6c463b"],["/archives/2019/page/3/index.html","1005f8c9ba75e3effeea6d735db1c3ae"],["/archives/2019/page/4/index.html","087cd677857b3e6410be2bc1451ad566"],["/archives/2020/01/index.html","e184eb28aa72a81d49b670a17a0805f4"],["/archives/2020/02/index.html","9dcc0c892c331a92b5f4dab117a71add"],["/archives/2020/03/index.html","a44b7890c97761ad6c896daa5ca9804e"],["/archives/2020/index.html","11ce210d3b40e3ba4b7fc501b308ec41"],["/archives/2020/page/2/index.html","ccd9fa31a2ff1c986fe93cd2df0c035e"],["/archives/2020/page/3/index.html","eb08c67a1946ae25d36c5ec22d3a6a21"],["/archives/index.html","049a781fc05201e3f3a2e71b5d3a37c2"],["/archives/page/2/index.html","645b173d103ea063ae545d3eee5ed65d"],["/archives/page/3/index.html","645b173d103ea063ae545d3eee5ed65d"],["/archives/page/4/index.html","645b173d103ea063ae545d3eee5ed65d"],["/archives/page/5/index.html","645b173d103ea063ae545d3eee5ed65d"],["/archives/page/6/index.html","645b173d103ea063ae545d3eee5ed65d"],["/archives/page/7/index.html","645b173d103ea063ae545d3eee5ed65d"],["/categories/index.html","7b9e21e6cb61727fe0a5c2461f03c076"],["/categories/公告/index.html","f526727559f9cbb46e1a8582f6664897"],["/categories/出题/index.html","75783b5bce8c16c0fd9edd345632ef95"],["/categories/小小结/index.html","e2f1dcb769cbb3c01d753df689669f59"],["/categories/模板/index.html","41c8831656087182a9806df9deaae377"],["/categories/毒瘤/index.html","ed94d36228e87ab537b04f5ff2ae2b25"],["/categories/随笔/index.html","ca005bbb0d42eadc02ae345de8fcbb26"],["/categories/题解/index.html","9706ce0c7fcbcc10564914be54746a10"],["/categories/题解/page/2/index.html","7469d6bffdaa62e2ccabfc090adb5d0c"],["/categories/题解/page/3/index.html","d19155a098bfcdac968439d0a8c943a8"],["/categories/题解/page/4/index.html","650da3cbba124b7c5f4d1a20752a6306"],["/categories/题解/page/5/index.html","43fda0f5f42fde96f622bf145a78f44c"],["/categories/题解/page/6/index.html","ff16d3ac9cc6a92880f0fdcd7969b093"],["/cfdpproblems/index.html","8326cff5649d3afb2183617637b3b5e9"],["/css/style.css","8efa10b135d7a0c2d7ac97f72e9529d5"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","3d864a1de05f2abd0ec7a1e43f792b98"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","3c7bb950283d999fc13629642b395cb2"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","4450eaf8ecc335b1017fe18e4681b2ae"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","df39ef4f4f24b8e08fec47c406ce4beb"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","cf77313ba5c9edcdd0a0fea85631eec2"],["/js/search.js","d9069294b48a24bcfa54a6fc30d3e8e2"],["/js/valine.js","7c861d05c6631b2700327045a5767d08"],["/page/2/index.html","b153dc212f6b5c0904610bc736b09429"],["/page/3/index.html","7bdb85d55b58363a72ae1bdefcb04612"],["/page/4/index.html","30c96ef4a53034a5f671852cc1b289a2"],["/page/5/index.html","f92ecd05c49e7a691a4c2ec2ab6116ab"],["/page/6/index.html","8d7aa51240c4bd2f88a4557b133df068"],["/page/7/index.html","3a41518e6be20d3120e99437ab842fe8"],["/schedule/index.html","a8e0207af4ef4b79f3e02fcb853d24ae"],["/simpson/index.html","eb3b0d1255e0835caa9d62ebaf875de2"],["/sitemap/index.html","b5d1d83415dbacc04a337e3d7d8b6cd4"],["/tags/AtCoder/index.html","a88bd6afcdeedb698546719a7f08b56d"],["/tags/AtCoder/page/2/index.html","dd530e5948f2b198e7bf4357f1d2fa1a"],["/tags/CodeForces/index.html","0cb06d1d9ed8d2be84429bf0410c8232"],["/tags/CodeForces/page/2/index.html","f2eafabb670334f9c8d97701df344c18"],["/tags/CodeForces/page/3/index.html","37486def4b09a0e6420ef2a8f84f9d8f"],["/tags/DP/index.html","f5af9905ebe68e186224e20019f9edb7"],["/tags/DP/page/2/index.html","878d41d079c9f0a9c56fa2920239b023"],["/tags/FFT/index.html","b7f7bddfc88341f5c8015f668d54bd89"],["/tags/LCT/index.html","979cceb2e31047fef79444747aee90f2"],["/tags/Lucas/index.html","9a22f887dcfc58ccc708b3ecf7dbd85c"],["/tags/SPOJ/index.html","66952d283e893910e7f9ba35057492c4"],["/tags/USACO/index.html","96eb359bb057e4edcf19c2684d3cb0fa"],["/tags/UVa/index.html","e4e630910b5b3f76eb60b740cef062de"],["/tags/ZJOI/index.html","906d797abdfd3662e0dce7194166444e"],["/tags/hash/index.html","732babe27f6e2ec8739a072b0fb29790"],["/tags/index.html","051bd4b591b7425863a48ae4d9a96c1f"],["/tags/two-points/index.html","615967e450c332540c9b552470cffe11"],["/tags/二分/index.html","40573b24dc1bbf8ff524441bd55d4c32"],["/tags/出题/index.html","2567cd85f38f341fea2acece8bd5e942"],["/tags/分块/index.html","09a72ef524f0ca7a50af07d6cd9c68a9"],["/tags/博弈论/index.html","0c4373aadf9ceb375301ac751d82a637"],["/tags/卡常/index.html","9eef966a982dd71d92729d3603e0b553"],["/tags/图论/index.html","aca5269ede9e8aec850ad14cb8eeacf4"],["/tags/字符串/index.html","bd64ed992a99378e4bc525d2898a9e80"],["/tags/并查集/index.html","dd4ab29f72cc793c068d1544b8eac303"],["/tags/搜索/index.html","417e6e03b652057b78230d6b5c52c7d6"],["/tags/数学/index.html","a1ff3af1cef518ef9e9aee5cea1f82aa"],["/tags/数学/page/2/index.html","fde3cebc669868f460d142443d9d6b91"],["/tags/数据结构/index.html","06ca3e15e8c795a7881b8700c18562b3"],["/tags/数论/index.html","a29e90c3001818a8bf24fb774a58386c"],["/tags/最短路/index.html","d57e84cc04b5e852124c8c4bc9dcc36f"],["/tags/构造/index.html","b64187fefe75be68db589d9ebfbca1b3"],["/tags/树状数组-线段树/index.html","fc027b770f717d698608ee356e53ea3d"],["/tags/树的重心/index.html","eb868fa630267c719572d3e8185dcc75"],["/tags/模拟/index.html","8a651b7a39cc3615049c976a52f9dc62"],["/tags/模拟赛/index.html","7b24674d3d28b510056b62e757ffc30e"],["/tags/生成树/index.html","ddd22ccc6c657bd6354a60fd686cfadf"],["/tags/网络流/index.html","7f32fe51178f7f312f70f5872e927064"],["/tags/记忆化搜索/index.html","f3a6dc97a6f094bd94be7a8f27054631"],["/tags/贪心/index.html","db54f748bb2f7592d3bd869fd4b5a252"],["/zkw线段树优化dijkstra/index.html","ad2afba7597816f67ac668a23fb2b073"],["/一道有趣的计数问题bywzp/index.html","605ae5d065a94436e415481e0053fa98"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","37f71e29ce2daf0770f49f2b909d62a2"],["/做题记录/index.html","0f5398e7e9d12347488a8c4d0a0158f4"],["/换个主题/index.html","0df10c49a348912dcf6a154e4d76fb11"],["/整数分解求乘积最大/index.html","43a92f21bc4992489f7fb905a8c5f854"],["/毒瘤/index.html","3a27bfc46477216dbf5bada9224a9dbd"],["/浮点数开根/index.html","97c4a80052ca42441755fae7c43a9c3a"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","743e262db98dc83cbe15ad9a3364d5a8"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","d5348a982bddb409696ef7aa6f07fe05"],["/第二次出模拟赛/index.html","3fb923e8812fe364ae23143744b1ec3b"],["/线段树入门/index.html","0c9899a66aba78c57a38b32e3583a908"],["/航空管制/index.html","2c360a4e238b06e550ce9ace1d0be162"],["/造一棵树/index.html","6a75cd45e6316a11e32eed5abff8ff68"]];
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







