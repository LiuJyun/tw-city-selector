/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./docs/js/umd-test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./docs/js/tw-city-selector.js":
/*!*************************************!*\
  !*** ./docs/js/tw-city-selector.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n!function (t, e) {\n  \"object\" == ( false ? undefined : _typeof(exports)) && \"object\" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n}(window, function () {\n  return function (t) {\n    var e = {};function i(n) {\n      if (e[n]) return e[n].exports;var o = e[n] = { i: n, l: !1, exports: {} };return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports;\n    }return i.m = t, i.c = e, i.d = function (t, e, n) {\n      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });\n    }, i.r = function (t) {\n      \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: \"Module\" }), Object.defineProperty(t, \"__esModule\", { value: !0 });\n    }, i.t = function (t, e) {\n      if (1 & e && (t = i(t)), 8 & e) return t;if (4 & e && \"object\" == (typeof t === \"undefined\" ? \"undefined\" : _typeof(t)) && t && t.__esModule) return t;var n = Object.create(null);if (i.r(n), Object.defineProperty(n, \"default\", { enumerable: !0, value: t }), 2 & e && \"string\" != typeof t) for (var o in t) {\n        i.d(n, o, function (e) {\n          return t[e];\n        }.bind(null, o));\n      }return n;\n    }, i.n = function (t) {\n      var e = t && t.__esModule ? function () {\n        return t.default;\n      } : function () {\n        return t;\n      };return i.d(e, \"a\", e), e;\n    }, i.o = function (t, e) {\n      return Object.prototype.hasOwnProperty.call(t, e);\n    }, i.p = \"\", i(i.s = 0);\n  }([function (t, e, i) {\n    \"use strict\";\n    Object.defineProperty(e, \"__esModule\", { value: !0 });var n = s(i(1)),\n        o = s(i(2));function s(t) {\n      return t && t.__esModule ? t : { default: t };\n    }function l() {\n      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};this.VERSION = \"2.0.0\", this.ROLE_ATTR_NAME = \"tw-city-selector\";var e = t.length ? [\"el\"] : [];return this.options = new o.default(t, e, { el: null, elCounty: null, elDistrict: null, elZipcode: null, only: null, disabled: !1, hasZipcode: !1, hiddenZipcode: !1, countyValue: null, districtValue: null, countyClassName: \"county\", countyFiledName: \"county\", districtClassName: \"district\", districtFieldName: \"district\", zipcodeClassName: \"zipcode\", zipcodeFieldName: \"zipcode\", standardWords: !1, bootstrapStyle: !1 }), setTimeout(function () {\n        (function () {\n          if (this.options.el) return this.el = a(this.options.el), this.elCounty = a(this.options.elCounty, this.el), this.elDistrict = a(this.options.elDistrict, this.el), this.elZipcode = a(this.options.elZipcode, this.el), r.call(this);var t = document.querySelectorAll(\"[role=\" + this.ROLE_ATTR_NAME + \"]\");return Array.prototype.forEach.call(t, function (t) {\n            var e = JSON.parse(JSON.stringify(this));return e.el = t, e.elCounty = null, e.elDistrict = null, e.elZipcode = null, e = function () {\n              return this.options.only = this.el.getAttribute(\"data-only\") ? this.el.getAttribute(\"data-only\").replace(/\\s/g, \"\").split(\",\") : null, this.options.countyValue = this.el.getAttribute(\"data-county-value\"), this.options.districtValue = this.el.getAttribute(\"data-district-value\"), this.options.hasZipcode = null != this.el.getAttribute(\"data-has-zipcode\"), this.options.hiddenZipcode = null != this.el.getAttribute(\"data-hidden-zipcode\"), this.options.disabled = null != this.el.getAttribute(\"data-disabled\"), this.options.standardWords = null != this.el.getAttribute(\"data-standard-words\"), this.options.bootstrapStyle = null != this.el.getAttribute(\"data-bootstrap-style\"), this;\n            }.call(e), r.call(e);\n          }, this), t;\n        }).call(this);\n      }.bind(this), 0), this;\n    }function r() {\n      return function () {\n        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],\n            e = t ? \"台\" : \"臺\",\n            i = t ? \"臺\" : \"台\";n.default.counties = n.default.counties.map(function (t) {\n          return t.includes(e) ? t.replace(e, i) : t;\n        }), n.default.districts.forEach(function (t, n, o) {\n          o[n][0] = t[0].map(function (t) {\n            return t.includes(e) ? t.replace(e, i) : t;\n          });\n        });\n      }.call(this, this.options.standardWords), function () {\n        var t = document.createDocumentFragment();if (!this.elCounty) {\n          var e = document.createElement(\"select\");this.elCounty = e, t.appendChild(this.elCounty);\n        }this.elCounty.classList.add(this.options.countyClassName), this.elCounty.name = this.options.countyFiledName, this.options.disabled && this.elCounty.setAttribute(\"disabled\", !0);if (function () {\n          var t = this.elCounty;t.options.add(new Option(\"選擇縣市\", \"\"));for (var e = function () {\n            var t = this.options.only;return \"string\" == typeof t ? t : Array.isArray(t) ? t.map(function (t) {\n              var e = t.indexOf(\"@\");return -1 === e ? t : t.substring(0, e);\n            }) : null;\n          }.call(this), i = 0, o = n.default.counties.length; i < o; i++) {\n            if (!e || -1 !== e.indexOf(n.default.counties[i])) {\n              var s = new Option(n.default.counties[i], n.default.counties[i]);s.dataset.index = i, t.options.add(s);\n            }\n          }return !0;\n        }.call(this), !this.elDistrict) {\n          var i = document.createElement(\"select\");this.elDistrict = i, t.appendChild(this.elDistrict);\n        }this.elDistrict.classList.add(this.options.districtClassName), this.elDistrict.name = this.options.districtFieldName, this.options.disabled && this.elDistrict.setAttribute(\"disabled\", !0);if (u.call(this), !this.elZipcode && this.options.hasZipcode) {\n          var o = document.createElement(\"input\");this.elZipcode = o, t.appendChild(this.elZipcode), this.elZipcode.type = this.options.hiddenZipcode ? \"hidden\" : \"text\", this.elZipcode.name = this.options.zipcodeFieldName, this.elZipcode.classList.add(this.options.zipcodeClassName), this.elZipcode.readOnly = !0, this.elZipcode.placeholder = \"郵遞區號\", this.elZipcode.size = 3, this.elZipcode.autocomplete = \"off\", this.options.disabled && this.elZipcode.setAttribute(\"disabled\", !0);\n        }this.el.appendChild(t);\n      }.call(this), this.options.bootstrapStyle && function () {\n        var t = document.createDocumentFragment();this.elCounty.setAttribute(\"class\", \"form-control\"), this.elDistrict.setAttribute(\"class\", \"form-control\"), this.options.hasZipcode && this.elZipcode.setAttribute(\"class\", \"form-control\");var e = document.createElement(\"div\");e.setAttribute(\"class\", \"form-group\");var i = e.cloneNode();i.appendChild(this.elCounty), t.appendChild(i);var n = e.cloneNode();if (n.appendChild(this.elDistrict), t.appendChild(n), this.options.hasZipcode) {\n          var o = e.cloneNode();o.appendChild(this.elZipcode), t.appendChild(o);\n        }this.el.appendChild(t);\n      }.call(this), function () {\n        var t = function () {\n          var t = this.elCounty.querySelector(\"option:checked\"),\n              e = t.getAttribute(\"data-index\");u.call(this, e), this.options.hasZipcode && (this.elZipcode.value = \"\");\n        }.bind(this);this.elCounty.onchange = t;\n      }.call(this), function () {\n        var t = function () {\n          var t = this.elDistrict.querySelector(\"option:checked\"),\n              e = t.dataset.zipcode || \"\";this.options.hasZipcode && (this.elZipcode.value = e);\n        }.bind(this);this.elDistrict.onchange = t;\n      }.call(this), c.call(this, this.options.countyValue, this.options.districtValue), this;\n    }function a(t, e) {\n      return t ? t && e ? e.querySelector(t) : document.querySelector(t) : null;\n    }function u() {\n      for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = this.elDistrict; e.firstChild;) {\n        e.removeChild(e.firstChild);\n      }if (e.options.add(new Option(\"選擇區域\", \"\")), !t) return !0;for (var i = function (t) {\n        var e = this.options.only,\n            i = \"string\" == typeof e;if (!i && !Array.isArray(e)) return null;i && (e = [e]);var n = null;return e.forEach(function (e) {\n          if (-1 !== e.indexOf(t)) {\n            var i = e.lastIndexOf(\"@\");return -1 !== i ? n = e.substring(i + 1).split(\"|\") : void 0;\n          }\n        }), n;\n      }.call(this, this.elCounty.value), o = 0, s = n.default.districts[t][0].length - 1; o <= s; o++) {\n        if (!i || -1 !== i.indexOf(n.default.districts[t][0][o])) {\n          var l = new Option(n.default.districts[t][0][o], n.default.districts[t][0][o]);l.dataset.zipcode = n.default.districts[t][1][o], e.options.add(l);\n        }\n      }return !0;\n    }function c() {\n      var t,\n          e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,\n          i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,\n          n = (t = \"change\", \"function\" == typeof Event ? new Event(t, { bubbles: !0, cancelable: !1 }) : (event = document.createEvent(\"Event\"), event.initEvent(t, !0, !1), event));e && (this.elCounty.value = e, this.elCounty.dispatchEvent(n)), i && (this.elDistrict.value = i, this.elDistrict.dispatchEvent(n));\n    }e.default = l, l.prototype.getVersion = function () {\n      return console.log(\"Your tw-city-selector.js is v\" + this.VERSION), this;\n    }, l.prototype.setValue = function () {\n      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,\n          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;return c.call(this, t, e), this;\n    }, l.prototype.reset = function () {\n      return function () {\n        this.elCounty.selectedIndex = 0, u.call(this), this.options.hasZipcode && (this.elZipcode.value = \"\");return this;\n      }.call(this), this;\n    };\n  }, function (t, e, i) {\n    \"use strict\";\n    Object.defineProperty(e, \"__esModule\", { value: !0 }), e.default = { counties: [\"台北市\", \"基隆市\", \"新北市\", \"宜蘭縣\", \"桃園市\", \"新竹市\", \"新竹縣\", \"苗栗縣\", \"台中市\", \"彰化縣\", \"南投縣\", \"嘉義市\", \"嘉義縣\", \"雲林縣\", \"台南市\", \"高雄市\", \"澎湖縣\", \"金門縣\", \"屏東縣\", \"台東縣\", \"花蓮縣\", \"連江縣\"], districts: [[[\"中正區\", \"大同區\", \"中山區\", \"松山區\", \"大安區\", \"萬華區\", \"信義區\", \"士林區\", \"北投區\", \"內湖區\", \"南港區\", \"文山區\"], [\"100\", \"103\", \"104\", \"105\", \"106\", \"108\", \"110\", \"111\", \"112\", \"114\", \"115\", \"116\"]], [[\"仁愛區\", \"信義區\", \"中正區\", \"中山區\", \"安樂區\", \"暖暖區\", \"七堵區\"], [\"200\", \"201\", \"202\", \"203\", \"204\", \"205\", \"206\"]], [[\"萬里區\", \"金山區\", \"板橋區\", \"汐止區\", \"深坑區\", \"石碇區\", \"瑞芳區\", \"平溪區\", \"雙溪區\", \"貢寮區\", \"新店區\", \"坪林區\", \"烏來區\", \"永和區\", \"中和區\", \"土城區\", \"三峽區\", \"樹林區\", \"鶯歌區\", \"三重區\", \"新莊區\", \"泰山區\", \"林口區\", \"蘆洲區\", \"五股區\", \"八里區\", \"淡水區\", \"三芝區\", \"石門區\"], [\"207\", \"208\", \"220\", \"221\", \"222\", \"223\", \"224\", \"226\", \"227\", \"228\", \"231\", \"232\", \"233\", \"234\", \"235\", \"236\", \"237\", \"238\", \"239\", \"241\", \"242\", \"243\", \"244\", \"247\", \"248\", \"249\", \"251\", \"252\", \"253\"]], [[\"宜蘭市\", \"頭城鎮\", \"礁溪鄉\", \"壯圍鄉\", \"員山鄉\", \"羅東鎮\", \"三星鄉\", \"大同鄉\", \"五結鄉\", \"冬山鄉\", \"蘇澳鎮\", \"南澳鄉\", \"釣魚台列嶼\"], [\"260\", \"261\", \"262\", \"263\", \"264\", \"265\", \"266\", \"267\", \"268\", \"269\", \"270\", \"272\", \"290\"]], [[\"中壢區\", \"平鎮區\", \"龍潭區\", \"楊梅區\", \"新屋區\", \"觀音區\", \"桃園區\", \"龜山區\", \"八德區\", \"大溪區\", \"復興區\", \"大園區\", \"蘆竹區\"], [\"320\", \"324\", \"325\", \"326\", \"327\", \"328\", \"330\", \"333\", \"334\", \"335\", \"336\", \"337\", \"338\"]], [[\"東區\", \"北區\", \"香山區\"], [\"300\", \"300\", \"300\"]], [[\"竹北市\", \"湖口鄉\", \"新豐鄉\", \"新埔鎮\", \"關西鎮\", \"芎林鄉\", \"寶山鄉\", \"竹東鎮\", \"五峰鄉\", \"橫山鄉\", \"尖石鄉\", \"北埔鄉\", \"峨眉鄉\"], [\"302\", \"303\", \"304\", \"305\", \"306\", \"307\", \"308\", \"310\", \"311\", \"312\", \"313\", \"314\", \"315\"]], [[\"竹南鎮\", \"頭份市\", \"三灣鄉\", \"南庄鄉\", \"獅潭鄉\", \"後龍鎮\", \"通霄鎮\", \"苑裡鎮\", \"苗栗市\", \"造橋鄉\", \"頭屋鄉\", \"公館鄉\", \"大湖鄉\", \"泰安鄉\", \"銅鑼鄉\", \"三義鄉\", \"西湖鄉\", \"卓蘭鎮\"], [\"350\", \"351\", \"352\", \"353\", \"354\", \"356\", \"357\", \"358\", \"360\", \"361\", \"362\", \"363\", \"364\", \"365\", \"366\", \"367\", \"368\", \"369\"]], [[\"中區\", \"東區\", \"南區\", \"西區\", \"北區\", \"北屯區\", \"西屯區\", \"南屯區\", \"太平區\", \"大里區\", \"霧峰區\", \"烏日區\", \"豐原區\", \"后里區\", \"石岡區\", \"東勢區\", \"和平區\", \"新社區\", \"潭子區\", \"大雅區\", \"神岡區\", \"大肚區\", \"沙鹿區\", \"龍井區\", \"梧棲區\", \"清水區\", \"大甲區\", \"外埔區\", \"大安區\"], [\"400\", \"401\", \"402\", \"403\", \"404\", \"406\", \"407\", \"408\", \"411\", \"412\", \"413\", \"414\", \"420\", \"421\", \"422\", \"423\", \"424\", \"426\", \"427\", \"428\", \"429\", \"432\", \"433\", \"434\", \"435\", \"436\", \"437\", \"438\", \"439\"]], [[\"彰化市\", \"芬園鄉\", \"花壇鄉\", \"秀水鄉\", \"鹿港鎮\", \"福興鄉\", \"線西鄉\", \"和美鎮\", \"伸港鄉\", \"員林市\", \"社頭鄉\", \"永靖鄉\", \"埔心鄉\", \"溪湖鎮\", \"大村鄉\", \"埔鹽鄉\", \"田中鎮\", \"北斗鎮\", \"田尾鄉\", \"埤頭鄉\", \"溪州鄉\", \"竹塘鄉\", \"二林鎮\", \"大城鄉\", \"芳苑鄉\", \"二水鄉\"], [\"500\", \"502\", \"503\", \"504\", \"505\", \"506\", \"507\", \"508\", \"509\", \"510\", \"511\", \"512\", \"513\", \"514\", \"515\", \"516\", \"520\", \"521\", \"522\", \"523\", \"524\", \"525\", \"526\", \"527\", \"528\", \"530\"]], [[\"南投市\", \"中寮鄉\", \"草屯鎮\", \"國姓鄉\", \"埔里鎮\", \"仁愛鄉\", \"名間鄉\", \"集集鎮\", \"水里鄉\", \"魚池鄉\", \"信義鄉\", \"竹山鎮\", \"鹿谷鄉\"], [\"540\", \"541\", \"542\", \"544\", \"545\", \"546\", \"551\", \"552\", \"553\", \"555\", \"556\", \"557\", \"558\"]], [[\"東區\", \"西區\"], [\"600\", \"600\"]], [[\"番路鄉\", \"梅山鄉\", \"竹崎鄉\", \"阿里山\", \"中埔鄉\", \"大埔鄉\", \"水上鄉\", \"鹿草鄉\", \"太保市\", \"朴子市\", \"東石鄉\", \"六腳鄉\", \"新港鄉\", \"民雄鄉\", \"大林鎮\", \"溪口鄉\", \"義竹鄉\", \"布袋鎮\"], [\"602\", \"603\", \"604\", \"605\", \"606\", \"607\", \"608\", \"611\", \"612\", \"613\", \"614\", \"615\", \"616\", \"621\", \"622\", \"623\", \"624\", \"625\"]], [[\"斗南鎮\", \"大埤鄉\", \"虎尾鎮\", \"土庫鎮\", \"褒忠鄉\", \"東勢鄉\", \"台西鄉\", \"崙背鄉\", \"麥寮鄉\", \"斗六市\", \"林內鄉\", \"古坑鄉\", \"莿桐鄉\", \"西螺鎮\", \"二崙鄉\", \"北港鎮\", \"水林鄉\", \"口湖鄉\", \"四湖鄉\", \"元長鄉\"], [\"630\", \"631\", \"632\", \"633\", \"634\", \"635\", \"636\", \"637\", \"638\", \"640\", \"643\", \"646\", \"647\", \"648\", \"649\", \"651\", \"652\", \"653\", \"654\", \"655\"]], [[\"中西區\", \"東區\", \"南區\", \"北區\", \"安平區\", \"安南區\", \"永康區\", \"歸仁區\", \"新化區\", \"左鎮區\", \"玉井區\", \"楠西區\", \"南化區\", \"仁德區\", \"關廟區\", \"龍崎區\", \"官田區\", \"麻豆區\", \"佳里區\", \"西港區\", \"七股區\", \"將軍區\", \"學甲區\", \"北門區\", \"新營區\", \"後壁區\", \"白河區\", \"東山區\", \"六甲區\", \"下營區\", \"柳營區\", \"鹽水區\", \"善化區\", \"大內區\", \"山上區\", \"新市區\", \"安定區\"], [\"700\", \"701\", \"702\", \"704\", \"708\", \"709\", \"710\", \"711\", \"712\", \"713\", \"714\", \"715\", \"716\", \"717\", \"718\", \"719\", \"720\", \"721\", \"722\", \"723\", \"724\", \"725\", \"726\", \"727\", \"730\", \"731\", \"732\", \"733\", \"734\", \"735\", \"736\", \"737\", \"741\", \"742\", \"743\", \"744\", \"745\"]], [[\"新興區\", \"前金區\", \"苓雅區\", \"鹽埕區\", \"鼓山區\", \"旗津區\", \"前鎮區\", \"三民區\", \"楠梓區\", \"小港區\", \"左營區\", \"仁武區\", \"大社區\", \"東沙群島\", \"南沙群島\", \"岡山區\", \"路竹區\", \"阿蓮區\", \"田寮區\", \"燕巢區\", \"橋頭區\", \"梓官區\", \"彌陀區\", \"永安區\", \"湖內區\", \"鳳山區\", \"大寮區\", \"林園區\", \"鳥松區\", \"大樹區\", \"旗山區\", \"美濃區\", \"六龜區\", \"內門區\", \"杉林區\", \"甲仙區\", \"桃源區\", \"那瑪夏區\", \"茂林區\", \"茄萣區\"], [\"800\", \"801\", \"802\", \"803\", \"804\", \"805\", \"806\", \"807\", \"811\", \"812\", \"813\", \"814\", \"815\", \"817\", \"819\", \"820\", \"821\", \"822\", \"823\", \"824\", \"825\", \"826\", \"827\", \"828\", \"829\", \"830\", \"831\", \"832\", \"833\", \"840\", \"842\", \"843\", \"844\", \"845\", \"846\", \"847\", \"848\", \"849\", \"851\", \"852\"]], [[\"馬公市\", \"西嶼鄉\", \"望安鄉\", \"七美鄉\", \"白沙鄉\", \"湖西鄉\"], [\"880\", \"881\", \"882\", \"883\", \"884\", \"885\"]], [[\"金沙鎮\", \"金湖鎮\", \"金寧鄉\", \"金城鎮\", \"烈嶼鄉\", \"烏坵鄉\"], [\"890\", \"891\", \"892\", \"893\", \"894\", \"896\"]], [[\"屏東市\", \"三地門鄉\", \"霧台鄉\", \"瑪家鄉\", \"九如鄉\", \"里港鄉\", \"高樹鄉\", \"鹽埔鄉\", \"長治鄉\", \"麟洛鄉\", \"竹田鄉\", \"內埔鄉\", \"萬丹鄉\", \"潮州鎮\", \"泰武鄉\", \"來義鄉\", \"萬巒鄉\", \"崁頂鄉\", \"新埤鄉\", \"南州鄉\", \"林邊鄉\", \"東港鎮\", \"琉球鄉\", \"佳冬鄉\", \"新園鄉\", \"枋寮鄉\", \"枋山鄉\", \"春日鄉\", \"獅子鄉\", \"車城鄉\", \"牡丹鄉\", \"恆春鎮\", \"滿州鄉\"], [\"900\", \"901\", \"902\", \"903\", \"904\", \"905\", \"906\", \"907\", \"908\", \"909\", \"911\", \"912\", \"913\", \"920\", \"921\", \"922\", \"923\", \"924\", \"925\", \"926\", \"927\", \"928\", \"929\", \"931\", \"932\", \"940\", \"941\", \"942\", \"943\", \"944\", \"945\", \"946\", \"947\"]], [[\"台東市\", \"綠島鄉\", \"蘭嶼鄉\", \"延平鄉\", \"卑南鄉\", \"鹿野鄉\", \"關山鎮\", \"海端鄉\", \"池上鄉\", \"東河鄉\", \"成功鎮\", \"長濱鄉\", \"太麻里\", \"金峰鄉\", \"大武鄉\", \"達仁鄉\"], [\"950\", \"951\", \"952\", \"953\", \"954\", \"955\", \"956\", \"957\", \"958\", \"959\", \"961\", \"962\", \"963\", \"964\", \"965\", \"966\"]], [[\"花蓮市\", \"新城鄉\", \"秀林鄉\", \"吉安鄉\", \"壽豐鄉\", \"鳳林鎮\", \"光復鄉\", \"豐濱鄉\", \"瑞穗鄉\", \"萬榮鄉\", \"玉里鎮\", \"卓溪鄉\", \"富里鄉\"], [\"970\", \"971\", \"972\", \"973\", \"974\", \"975\", \"976\", \"977\", \"978\", \"979\", \"981\", \"982\", \"983\"]], [[\"南竿鄉\", \"北竿鄉\", \"莒光鄉\", \"東引鄉\"], [\"209\", \"210\", \"211\", \"212\"]]] };\n  }, function (t, e, i) {\n    \"use strict\";\n    Object.defineProperty(e, \"__esModule\", { value: !0 });var n = function () {\n      function t(t, e) {\n        for (var i = 0; i < e.length; i++) {\n          var n = e[i];n.enumerable = n.enumerable || !1, n.configurable = !0, \"value\" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);\n        }\n      }return function (e, i, n) {\n        return i && t(e.prototype, i), n && t(e, n), e;\n      };\n    }();var o = function () {\n      function t() {\n        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},\n            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],\n            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};return function (t, e) {\n          if (!(t instanceof e)) throw new TypeError(\"Cannot call a class as a function\");\n        }(this, t), i.length && this.checkOptionsRequired(e, i), this.setOptionsExtend(e, n);\n      }return n(t, [{ key: \"checkOptionsRequired\", value: function value(t, e) {\n          var i = \"\";if (t = t || {}, Object.keys(e).forEach(function (e) {\n            t.hasOwnProperty(e) || (i += e + \",\");\n          }), i) throw \"缺少參數: \" + i;\n        } }, { key: \"setOptionsExtend\", value: function value(t, e) {\n          if (!t) return e;var i = void 0;for (i in t) {\n            e[i] = t[i];\n          }return e;\n        } }]), t;\n    }();e.default = o;\n  }]).default;\n});\n//# sourceMappingURL=tw-city-selector.js.map\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./docs/js/tw-city-selector.js?");

/***/ }),

/***/ "./docs/js/umd-test.js":
/*!*****************************!*\
  !*** ./docs/js/umd-test.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _twCitySelector = __webpack_require__(/*! ./tw-city-selector.js */ \"./docs/js/tw-city-selector.js\");\n\nvar _twCitySelector2 = _interopRequireDefault(_twCitySelector);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// var TwCitySelector = require('./tw-city-selector.js');\n\n// --------------------\n// role-attribute 方式加載\n// --------------------\n\nnew _twCitySelector2.default();\n\n// --------------------\n// 實例方式加載\n// --------------------\n\n// 一般加載\nnew _twCitySelector2.default({\n    el: '.test-object-normal'\n});\n\n// 顯示部分縣市-臺北市、臺中市、高雄市\nnew _twCitySelector2.default({\n    el: '.test-object-limit-counties',\n    only: ['臺北市', '臺中市', '高雄市']\n});\n\n// 顯示部分縣市及區域-臺北市(大同區、萬華區)、臺中市(西區)、嘉義市(不設限)\nnew _twCitySelector2.default({\n    el: '.test-object-limit-counties-and-district',\n    only: ['臺北市@大同區|萬華區', '臺中市@西區', '嘉義市']\n});\n\n// new TwCitySelector({\n//   el: '.selector-bootstrap',\n//   elCounty: '.el-county',\n//   countyClassName: 'county form-control',\n//   elDistrict: '.el-district',\n//   districtClassName: 'district form-control',\n//   elZipcode: '.el-zipcode',\n//   zipcodeClassName: 'zipcode form-control',\n//   showZipcode: true\n// });\n//\n// // country 錯別字\n// new TwCitySelector({\n//   el: '.selector-bootstrap-2',\n//   elCountry: '.el-country',\n//   countryClassName: 'country form-control',\n//   elDistrict: '.el-district',\n//   districtClassName: 'district form-control',\n//   elZipcode: '.el-zipcode',\n//   zipcodeClassName: 'zipcode form-control',\n//   showZipcode: true\n// });\n\n//# sourceURL=webpack:///./docs/js/umd-test.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function () {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ })

/******/ });