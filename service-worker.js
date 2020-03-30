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

var precacheConfig = [["/20180524模拟赛-word/index.html","89eb5a124a3ac331dc8ab59837cbde42"],["/20190409模拟赛T1/index.html","d69c1a03913098fbc14bc585765b6593"],["/20190409模拟赛T1/sol.png","8e27011e1e45da3ed2a08366365a1765"],["/404.html","211b6fbc9936d2f6cbfda87613351946"],["/404/jquery.min.js","05e51b1db558320f1939f9789ccf5c8f"],["/404/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/CERC2017C/index.html","f35941f01ffcc5f6f96aa73db954ac41"],["/CF1045B/index.html","22b39c0be9ae5326325186992c86274b"],["/CF1137F/index.html","8cc78d9f6c42cfab883e358d30dc6792"],["/CF1137F/pou.svg","1af12cb7e15971107c244cde4cda7c0a"],["/CF1137F/样例.png","6078869c89e6c25e6fb7405223b781ad"],["/CF1221F/index.html","d3ae34e61a20645c73fbfef3e7af6132"],["/CF1264D/index.html","f6b5a72c9f22fb192965bc83993f1a91"],["/CF1288F/index.html","e931269ad81e99dd27188d8181062e3b"],["/CF351D/fa&ffa.jpg","756986cd2f0b244c015b49e735bfc127"],["/CF351D/index.html","7b69031a8ad85053cc593c3d022d5200"],["/CF391F3/001.png","89f63cfe2bbdf307c5d92bc2af98fb10"],["/CF391F3/002.png","18e4ddeb261027003eb65a03ba92a348"],["/CF391F3/index.html","02ac52dc5aa60a398a649c553494a9bd"],["/CF434D/a.png","458423ea5ae91d6a69939bf77793a45c"],["/CF434D/a.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow.svg","98f83ecc9fc349da04f2e1a232f19dda"],["/CF434D/flow1.svg","0718524ec7bfa10263345acbe510f54a"],["/CF434D/flow3.svg","1852a7b40f034277cb501208b86f4bb2"],["/CF434D/flow4.svg","0bc16f779b6e0c7111c424f67f6372f9"],["/CF434D/flow5.svg","889ad73687a31506524ec424a4ab5f29"],["/CF434D/flow_bak.svg","b4d2404ad91da2f2ba394c079abcf49b"],["/CF434D/index.html","8866fe367592ff8f1c9ca18b90fe81aa"],["/CF449C/index.html","81f16618345677b4ba21f1b8b355e0c5"],["/CF512D/index.html","44a3b752618c2c1dac3737f5385352ef"],["/CF516D/index.html","691f81b4f42828d7ff7958988e1b3a02"],["/CF551C/index.html","352a1a32d91fa73d44d59cdf8c4a809e"],["/CF575I/CF575I-001.png","ffae100d779e504765da2ff533f0ad65"],["/CF575I/CF575I-002.png","65c2529cbb624c73cb830a4ae2561051"],["/CF575I/index.html","e96800e2fa5c6264b6365ea5797ad43a"],["/CF576D/index.html","d7853d79bb3adcf63071a7d4f2296342"],["/CF708E/index.html","0240f9b84bfeedda290e620f32cd7621"],["/CF77C/example.png","3032157a4270a0df84db2a82332b0c60"],["/CF77C/index.html","6f4ef2982b143d3043fbc373e7da6269"],["/CF875E/index.html","6e4d2a0d15da90cd0763e4b53b9ae187"],["/CF986B/index.html","b3e7171259ef5d92a7515aa4fa18b486"],["/CSP2019后做的一些题/index.html","0260df9929be2f5bd4ecf96dfce4832b"],["/CodeForcesVP/1200C.png","66f668906ea66f0ccf3e368cfec0b809"],["/CodeForcesVP/index.html","50ba67e5d8faa44b66b1640566f01c3d"],["/CodeForcesVP/zibi.png","478774e8f30ce756d7d3f2844984d8e2"],["/FFT小小结/Complex_conjugate_picture.svg","a13ddd501cd3da7714ff98a491ca2f0b"],["/FFT小小结/MLE.png","7f84add53176520f290b97956a2f0cf1"],["/FFT小小结/index.html","ddc2be6946e5a64e155614b793bc9f8c"],["/FFT小小结/omega.png","7b2075abdf3fd0a0a473a47978748c23"],["/FFT小小结/poly.png","805c2805ea366f70533ae738ed8a778f"],["/FFT小小结/uojac.png","7b877565c38ed2c72fbbf70af1c0ad19"],["/FFT小小结/差距.png","10c3bce6851cac85d3dbe536824718d4"],["/FFT小小结/递归树.png","7ad5dc78b21a12f71a46517b124721e4"],["/README.html","06c8fb842d10885ba66180e272f25ac4"],["/SP1026/index.html","5bcef304947641c2fd08f7b1672d9d2a"],["/SP4063/index.html","98c61b755cc0a13f408d8f2b0a3bee87"],["/UVa11600/index.html","29fdb8ea7f73f95051508d59d013c0d4"],["/UVa12421/index.html","eeaf1463603b6e9d531a3f7671d6f441"],["/WF2019A/case1.png","330fa325bf675d616f89112053252e72"],["/WF2019A/case2.png","c3eca05add291c3eb4e1a4e609430cc2"],["/WF2019A/index.html","efe88f6144bee199738e729c16627c33"],["/[HEOI2015]公约数数列/index.html","cfbe11e03dfc996bf21d8d18822b5bff"],["/[北京省选集训2019]图的难题/index.html","2fe16d9c07254c5045a435a5989b29c4"],["/about/index.html","c1fd8b4ef372001c34d8a3b973998375"],["/agc005_c/index.html","bad36ed586d671652e29b035e304b7af"],["/agc006_f/index.html","2634482c00bd7a70b8574af4baa5cf02"],["/agc012_d/index.html","1e9c8caca721181b557ea84031b9c1dc"],["/agc013_c/index.html","5949b076f327afeacdb8f57c6402fa7b"],["/agc014_d/index.html","4920b5770ce013499a25065d67d2abde"],["/agc024_d/index.html","244fe19fab446eeb57eee1435da028c1"],["/agc029_f/index.html","188b09708e799a517184be19818e68ff"],["/agc032_e/AGC032E-001.png","b44c03063df7636129f31a4861039f26"],["/agc032_e/index.html","a75141f2e5b05d8404015f763e3e6c8a"],["/agc041_d/index.html","1fe8770cb7a0fd1d79b25d669ad5618a"],["/agc041_e/index.html","5954ece0e64bc575e824acf56e829a5a"],["/agc041_f/index.html","07c0bfc904f267668c8f476ff24ce1ee"],["/arc068_c/index.html","47cae5d41d8138bd9e2dc30792622f4c"],["/arc068_d/deque.png","58d3fab524cb323586d9988a2ecad752"],["/arc068_d/end.png","f1555117b674ca3e7882fac258b388b7"],["/arc068_d/index.html","e31d7619f5af969e55f6b5237e99ce4d"],["/arc068_d/next.png","4f6b7a5b8e8573bd4f97a4416d731458"],["/arc078_d/index.html","cf78ea3c4be478cf5d83766d7c632603"],["/arc078_d/path.png","cb77128d46e1abefcfb638d45151bd1d"],["/arc080_c/index.html","852d7fe2dff25876d15d3d2263b81651"],["/arc080_c/sample.png","edf332bfc3677d63994984c390d5a756"],["/arc099_d/index.html","307da56312a073aa39bb9f3425547f90"],["/archives/2018/11/index.html","a7228eb55ae4cd989d61c638a8bd4731"],["/archives/2018/12/index.html","590cd57b6690c90ce8ce511dc68c0e79"],["/archives/2018/index.html","03cd93ae717cb1463d8a2c1a90928d17"],["/archives/2019/01/index.html","a599aefea67b4c9555ccef5a9f320a6e"],["/archives/2019/02/index.html","1d0deae86796a6735021f503813cdd1f"],["/archives/2019/03/index.html","3dce3bb86c9e7c4061939d8b525ac247"],["/archives/2019/04/index.html","79461cc7a63c600eb36198380157fbd3"],["/archives/2019/08/index.html","15d4eaab37c1ab7e6253c444d2cdae0a"],["/archives/2019/09/index.html","9e0e7ca64e8ff66946e074435a000a81"],["/archives/2019/10/index.html","2541c44d9139263a3a5b247eeb40af66"],["/archives/2019/12/index.html","bd8c7714a570edc139279b949b984793"],["/archives/2019/index.html","8e43f161958b0a4883ff66251aee7ec8"],["/archives/2019/page/2/index.html","268141bab81b52b29563c245c6b18d0a"],["/archives/2019/page/3/index.html","9c521a508469e8dcacb59599a132c9ab"],["/archives/2019/page/4/index.html","4c831155a91c9d7e5203030f9d0fb9e9"],["/archives/2020/01/index.html","a0db4a00b2b7c12496992e4b55dff1c1"],["/archives/2020/02/index.html","2197a5a81a97c2f84660ce6fb9832f5b"],["/archives/2020/03/index.html","95cb3703898a6bd51a4f83c1e3a0db6e"],["/archives/2020/index.html","dfd2e2e35e22dc7679c29fc4f50b9de9"],["/archives/2020/page/2/index.html","c8b37894d70bc74e325ce42aea0d916e"],["/archives/index.html","2a0a5dd836ee37f60ed778569a963b6f"],["/archives/page/2/index.html","8c9702a086cfabf4f938fbd1955f5749"],["/archives/page/3/index.html","8c9702a086cfabf4f938fbd1955f5749"],["/archives/page/4/index.html","8c9702a086cfabf4f938fbd1955f5749"],["/archives/page/5/index.html","8c9702a086cfabf4f938fbd1955f5749"],["/archives/page/6/index.html","8c9702a086cfabf4f938fbd1955f5749"],["/archives/page/7/index.html","8c9702a086cfabf4f938fbd1955f5749"],["/categories/index.html","237a542a7fedbbb36158bccc6f2700a8"],["/categories/出题/index.html","84975ad02fb737495d1ae7cef261b38a"],["/categories/小小结/index.html","f8552d1ddc73bfe6685b853b77519fba"],["/categories/模板/index.html","17002a24cca74904887dd0a0cdb026bc"],["/categories/毒瘤/index.html","80ac2cc59f61eaae7b0b685439f00afd"],["/categories/随笔/index.html","83b0572699c5cf8e7802a3b8248733f1"],["/categories/题解/index.html","23758720d465a5eecff7e8db700a4577"],["/categories/题解/page/2/index.html","a3d49994760bb43fbba9b7b290641348"],["/categories/题解/page/3/index.html","83d1ce85a67b7134f9b838e1850da7f0"],["/categories/题解/page/4/index.html","dcb4bd8b1bafe8b0552bd0193b1c3233"],["/categories/题解/page/5/index.html","cd86183be2a77805eafec697251fa559"],["/cfdpproblems/index.html","fa987d890d2e285efc1e129b1f48aa7c"],["/css/style.css","fd7e80f2066543cb41f79be540407b59"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/AutumnKite.jpg","72e559976b6b56b57d63f7c1425ee4a4"],["/friends/CSJ.jpg","8e3da36201d195d53191f76f73797c7d"],["/friends/bkmn.jpg","b65f8a51fcd296492c62ba47fd3aeb86"],["/friends/cube.jpg","03fc37a92337ff9de9927df057d6f73f"],["/friends/dfc.png","5523dad8156d697e35ee0d5bf203ff2a"],["/friends/dky.jpg","b5524cf760ca2396697f8f380d8c93d4"],["/friends/dt.jpg","511ff66080fc2b26f88e0116fa2a870f"],["/friends/emoairx.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/friends/gaojunonly1.png","32291018b50779fd3a1dc899b2489816"],["/friends/heartlessly.jpg","2ad8db566d895aaf2e82a213ea5a6ba0"],["/friends/hyj.jpg","9f5f157dd1f4372ccbdc4d574cbbf987"],["/friends/index.html","99a21fc8c972dad51ea76877545636e0"],["/friends/jiang.jpg","96c3ef384bc7b4db85deb028a2cc6a55"],["/friends/jzq.jpg","02b9bff892447c7dcb426a081218041b"],["/friends/luojinyao.jpg","1258f381b679d070aeb560479a9682f1"],["/friends/lxy.png","4d701c47db0aeb55148e7d4b4820814b"],["/friends/md.png","b445599678373fa209772d43cbfb5e93"],["/friends/mq.jpg","b357a85a185eaccb0f0b20f19b3e3596"],["/friends/mxdh.jpg","7b041d45bf27d14e202dc4a0aa15e4ea"],["/friends/nbc.jpg","830af6ee7636db72b5e1888a841ac623"],["/friends/nn.jpg","cb2cd7ac1594b286558bb9ceba87d7c4"],["/friends/sxd666.jpg","87c2bf469dcf04c5fa3257495c41c3ee"],["/friends/sxyugao.png","d98038df5beb2867fa8de60a6d7185e5"],["/friends/szb.jpg","9791ca88f763fcc3fe1b61caa9aa9630"],["/friends/uyom.png","97064e0be4057bb586fab8f6dfc6795d"],["/friends/wzp.png","0007c8c6e18c172929fd0bc83b024481"],["/friends/xzy.jpg","1f827bc539a7efe4e5a3d07d50351734"],["/friends/yangjie.jpg","4ec0f3ad724c8e0f22626ff5553b58aa"],["/friends/zhoudong.jpg","2183056519560c91b1f7da94eaacc6fa"],["/friends/zhouyuyang.jpg","e6ff89766b7b9f4cbdced978b9603767"],["/friends/zhzh.png","7e9a1acd475b0266e0f5e0780945f6b8"],["/gitee镜像/index.html","1e089c79d619c6c1865a6fec50b92170"],["/googled264010a11e453ae.html","99de6f3db9e305fca997050f63586fed"],["/hello-world/index.html","23db4aa624f9ba813ddc8790ecda7cfa"],["/images/1.svg","6beac9ceee20d73bb8e54565be1d0752"],["/images/2.svg","50db548bb8c719d65c354439f14e4e23"],["/images/3.svg","4f6ca28a29ec1d1f5f3a1a4c203bfe93"],["/images/4.svg","07f4a4e9d79daea7ca70f44b24bf0d4a"],["/images/5.jpg","808915bfa2532b01ef806958ba257b69"],["/images/6.png","5df3de93615b10ea99d243f9b0dc6958"],["/images/index.html","c83a470c48a6c3ba6d11e8db892443b2"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/img/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/img/avatar.jpg","0cdb082dc7aaf6765304d48bd9b93ab3"],["/img/avatar_very_small.jpg","540291d1f2e275461ff2d62b59b12e51"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/img/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/img/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/img/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/img/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/img/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/img/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/img/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/img/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/img/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/img/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/img/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/img/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/img/sitebar-avatar.jpg","09404be82a2d56ff4ed81c6fe0572b4e"],["/index.html","784ae1458d5f0cce3d4c28e8c1641a97"],["/js/search.js","efdd5978406d605cdb2ef636992edc53"],["/js/valine.js","5a8fc8df7e0a1b0b693d9dee1a406fb0"],["/page/2/index.html","bc306f43cb380bcce16b8a2772f1a169"],["/page/3/index.html","73d0469cc61535252351da93c817c46c"],["/page/4/index.html","7ac7acb7da59a3174f29ca6d14a0d968"],["/page/5/index.html","b45ae64d61b09cd6deac8d99c243f678"],["/page/6/index.html","9dd839fe77dd0f4f2edf9b3be1ae802c"],["/page/7/index.html","decd8affabe268fd5bd751f97f342455"],["/schedule/index.html","415ed95cef56e7e10923f6e3d4ec0e89"],["/simpson/index.html","728b7cbef2863c9e370cabc34bf8618c"],["/sitemap/index.html","b3d61842bdaa18df3b2cc1f46decfb92"],["/tags/AtCoder/index.html","1e44f6eb2e61b6f4e2d2bce5e343176b"],["/tags/AtCoder/page/2/index.html","43a7d372ad093e67392c4a25a3ef4727"],["/tags/CodeForces/index.html","44552a2140e2aa96ac5c05b5d2ca1f21"],["/tags/CodeForces/page/2/index.html","53464df61b4aed79e9ac93cefb348a07"],["/tags/CodeForces/page/3/index.html","0c914ba9fb4763a06a47c43654461e9b"],["/tags/DP/index.html","6632985d607152e22463dadb6012ba76"],["/tags/DP/page/2/index.html","94ead2130f4191488c567e637c9c0edf"],["/tags/FFT/index.html","efae806958602848636a082911dcc002"],["/tags/LCT/index.html","324519a3fe0f75436e271ae65de8946e"],["/tags/Lucas/index.html","18084e943edd2bf48c3186ddd559cc5f"],["/tags/SPOJ/index.html","a759201e900bb6b13421519e20284f0c"],["/tags/USACO/index.html","13746e027b863787941da8a111e98de7"],["/tags/UVa/index.html","889bc8870899dfa8280dc69269cb3b31"],["/tags/ZJOI/index.html","1099f7b61b2552f42abfb822774c22e6"],["/tags/hash/index.html","5c70d95ea5eb658b4da7f88fd11a359e"],["/tags/index.html","b770f19998d7d20d10a197a2a2140fa9"],["/tags/two-points/index.html","58a4a66b6712072409bf29b05bc66e82"],["/tags/二分/index.html","535ec896bb26db0b95875f973457772a"],["/tags/出题/index.html","bf7f32a0c6c0d388eec2bd1895708334"],["/tags/分块/index.html","6803985e76dc0669d6838cbc751bfa97"],["/tags/博弈论/index.html","3b245dd958ee805a9f7803f28073ad17"],["/tags/卡常/index.html","3307b2ecf7ccd404da64e15911d64f2c"],["/tags/图论/index.html","da952f99b7e1fe85b4532946f2c520ff"],["/tags/字符串/index.html","ebd9295f4d3a156e5aa9e8bcd4ecb4e7"],["/tags/并查集/index.html","64bf8b8655a3afcaa977730d834af6e4"],["/tags/搜索/index.html","9274fa60c582b2ba67493d7f2ae1f15c"],["/tags/数学/index.html","46884756ddeea977a102212e886a273a"],["/tags/数学/page/2/index.html","5a0392a3fd3b781630d750d9c8e72170"],["/tags/数据结构/index.html","84169c5d35293334f98579373ff9a304"],["/tags/数论/index.html","27334eddb4923640acbe5756f050d025"],["/tags/最短路/index.html","52b13984c0c4bf1707414805f091ecea"],["/tags/构造/index.html","f601caa5a4b58eceebc051641f88e5dc"],["/tags/树状数组-线段树/index.html","e9d542feb7fbcf2e425306949d0c15ed"],["/tags/树的重心/index.html","bf719bb578bd9f6c3b841b43d109dcfe"],["/tags/模拟/index.html","56af24e4fdd3cd08038ca66d68d7be02"],["/tags/模拟赛/index.html","24d40abbb30adede9bc34f5e5b7d1600"],["/tags/生成树/index.html","9b2b9b31f53ee37aaff92348185edfad"],["/tags/网络流/index.html","d42537852bca25c0e731a9e48f906ded"],["/tags/记忆化搜索/index.html","222f5e5ba1151dd6a81c158f70385513"],["/tags/贪心/index.html","bd240982337843a0489b1b2781bb729a"],["/zkw线段树优化dijkstra/index.html","0d13c856cd964928ecec2544607c6085"],["/一道有趣的计数问题bywzp/index.html","c168cec9cd8787a21a0a3212df870765"],["/一道有趣的计数问题bywzp/格子.png","828ac5ef1f09e3108bdf193e44c686ec"],["/三道大水题/index.html","3f55ba6753998ee3a4193893e5550156"],["/做题记录/index.html","ddf0eaad58cd00617461dd992b4c9715"],["/换个主题/index.html","dd4d3fa38bc8eaaf3ef563818746deba"],["/整数分解求乘积最大/index.html","8c5bb536a82b9e2c86f74d773b83b107"],["/毒瘤/index.html","478c2f53f4a4771891b44bf5719f1145"],["/浮点数开根/index.html","137e1fc6d05c4c145e8ac3dbb2151703"],["/璀灿光华/a.png","9aba6474df5383b41cb8e55c32b67b87"],["/璀灿光华/index.html","97fa70c18cdd0f3c3daaa37d55badb1d"],["/生成树入门/Animation_depicting_the_quickhull_algorithm.gif","d4c41457696aa898cd1d5314a6bb8d57"],["/生成树入门/Boruvka.gif","a67ba2ee8b86b2e2e46a751b5e6be7d9"],["/生成树入门/Graph_with_all_its_spanning_trees.svg","6ecf84effb8020253f4fd624603c8662"],["/生成树入门/Matrix_transpose.gif","a7b08331098d35b0258045470866599c"],["/生成树入门/index.html","fca951c7c32f6b194531e40c2b3913cf"],["/第二次出模拟赛/index.html","8abad95beae4998341cdfefcde4047b9"],["/线段树入门/index.html","fc2fe128367740406f4f386d5ae05c26"],["/航空管制/index.html","64330dbc42c7e727fc5222f627f62dfb"],["/造一棵树/index.html","4943be15f821eaac22f647d7cde7cf78"]];
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







