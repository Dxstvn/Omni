/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + {"0":"4a88b1e7a337bbd023a5"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/phone_bezel.png":
/*!********************************!*\
  !*** ./assets/phone_bezel.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"static/assets/phone_bezel.png\");\n\n//# sourceURL=webpack:///./assets/phone_bezel.png?");

/***/ }),

/***/ "./assets/rpreplay-final1610763893-1@1x.gif":
/*!**************************************************!*\
  !*** ./assets/rpreplay-final1610763893-1@1x.gif ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"static/assets/rpreplay-final1610763893-1@1x.gif\");\n\n//# sourceURL=webpack:///./assets/rpreplay-final1610763893-1@1x.gif?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/HomePage.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/HomePage.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Main {\\r\\n  background-color: black;\\r\\n  height: 812px;\\r\\n  width: 375px;\\r\\n  display: \\\"flex\\\";\\r\\n  align-items: \\\"center\\\";\\r\\n  justify-content: \\\"center\\\";\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/HomePage.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/InfoShopPlay.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/InfoShopPlay.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* Group 111 */\\r\\n.info-icon {\\r\\n  position: absolute;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  left: 121px;\\r\\n  top: 427px;\\r\\n}\\r\\n\\r\\n/* Group 112 */\\r\\n.shop-icon {\\r\\n  position: absolute;\\r\\n  width: 70px;\\r\\n  height: 27px;\\r\\n  left: 152px;\\r\\n  top: 423px;\\r\\n}\\r\\n\\r\\n/* Group 138 */\\r\\n.play-icon {\\r\\n  position: absolute;\\r\\n  width: 28px;\\r\\n  height: 27px;\\r\\n  left: 229px;\\r\\n  top: 423px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/InfoShopPlay.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Main.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Main {\\n  background-color: black;\\n  width: 375px;\\n  height: 812px;\\n  boxShadow: \\\"3px 9px 3px #9E9E9E\\\";\\n  border-radius: 40px;\\n}\\n\\n.home-gif {\\n  height: 737px;\\n  width: 375px;\\n  display: flex;\\n  position: absolute;\\n}\\n\\n.vector-text {\\n  flex-direction: row;\\n  display: flex;\\n  position: relative;\\n  z-index: 9998 !important;\\n}\\n\\n.spaced-vector-text {\\n  flex-direction: row;\\n  display: flex;\\n  position: relative;\\n  justify-content: space-around;\\n  z-index: 9998 !important;\\n  width: 60px;\\n}\\n\\n.overlayed-notification-bar {\\n  position: absolute;\\n  top: 0;\\n}\\n\\n.screen {\\n  display: flex;\\n  position: relative;\\n  flex-direction: column;\\n}\\n.screen-omni-logo {\\n  position: absolute;\\n  top: 395px;\\n  left: 280px;\\n}\\n.screen-text {\\n  position: absolute;\\n  color: white;\\n  font-family: \\\"Source Code Pro\\\", Helvetica, Arial, serif;\\n  font-size: 14px;\\n  font-style: normal;\\n  font-weight: 400;\\n  letter-spacing: 0px;\\n  min-height: 54px;\\n  text-align: right;\\n  width: 314px;\\n  top: 460px;\\n  left: 35px;\\n}\\n.screen-sign-up {\\n  position: absolute;\\n  display: flex;\\n  align-content: center;\\n  justify-content: center;\\n  height: 38px;\\n  width: 322px;\\n  top: 622px;\\n  left: 30px;\\n}\\n.screen-sign-up-box {\\n  position: absolute;\\n  display: flex;\\n  height: 38px;\\n  width: 322px;\\n}\\n.screen-log-in {\\n  position: absolute;\\n  display: flex;\\n  align-content: center;\\n  justify-content: center;\\n  height: 38px;\\n  width: 322px;\\n  top: 672px;\\n  left: 30px;\\n}\\n.screen-log-in-box {\\n  position: absolute;\\n  display: flex;\\n  height: 38px;\\n  width: 322px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/Main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/header-component.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/header-component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".light-background-vector {\\n  width: 375px;\\n  height: 136px;\\n}\\n\\n.combined-shape {\\n  height: 4px;\\n  margin-top: 2px;\\n  width: 2px;\\n}\\n\\n.i-phone-x-or-newer {\\n  align-items: center;\\n  display: flex;\\n  height: 44px;\\n  overflow: hidden;\\n  padding: 0 14.3px;\\n  width: 375px;\\n}\\n\\n.mobile-signal {\\n  height: 12px;\\n  left: 215px;\\n  position: absolute;\\n  top: 19px;\\n  width: 18px;\\n}\\n\\n.notch {\\n  height: 30px;\\n  left: 0px;\\n  position: absolute;\\n  top: 0px;\\n  width: 219px;\\n}\\n\\n.overlap-group {\\n  align-self: flex-start;\\n  height: 31px;\\n  margin-left: 15px;\\n  margin-top: -2px;\\n  position: relative;\\n  width: 233px;\\n}\\n\\n.overlap-group1 {\\n  align-items: flex-end;\\n  background-size: 100% 100%;\\n  display: flex;\\n  height: 12px;\\n  margin-left: 4px;\\n  margin-top: 2px;\\n  min-width: 22px;\\n  padding: 2px 2px;\\n}\\n\\n.rectangle {\\n  height: 8px;\\n  width: 18px;\\n}\\n\\n.wifi {\\n  height: 12px;\\n  margin-left: 4px;\\n  margin-top: 1.63px;\\n  width: 16px;\\n}\\n\\n.x941 {\\n  height: 12px;\\n  margin-top: 1.42px;\\n  width: 29px;\\n}\\n\\n.search-vector {\\n  position: absolute;\\n  height: 16.9299373627px;\\n  width: 15.5599851608px;\\n  left: 20.83984375px;\\n  top: 62.3500976563px;\\n  border-radius: 0px;\\n}\\n\\n.omni-group {\\n  position: absolute;\\n  height: 16.5px;\\n  width: 55.4399986267px;\\n  left: 160px;\\n  top: 62px;\\n  border-radius: 0px;\\n}\\n\\n.person-vector {\\n  position: absolute;\\n  height: 19.3000030518px;\\n  width: 19.3000030518px;\\n  left: 337.7001953125px;\\n  top: 60.4997558594px;\\n  border-radius: 0px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/header-component.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\\n    sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  background-color: #1E1E1E;\\n  /*background-image: url(\\\"../assets/phone_bezel.png\\\");*/\\n  /*background-repeat: no-repeat, repeat;*/\\n  /*background-origin: content-box;*/\\n}\\n\\ncode {\\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\\n    monospace;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/midpage-component.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/midpage-component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".ps5-pic {\\r\\n    position: absolute;\\r\\n    width: 375px;\\r\\n    height: 372px;\\r\\n    left: 0px;\\r\\n    top: 97px;\\r\\n}\\r\\n.sony-group {\\r\\n    position: absolute;\\r\\n    height: 27.740245819091797px;\\r\\n    width: 158.00991821289062px;\\r\\n    left: 21.43994140625px;\\r\\n    top: 284.459716796875px;\\r\\n    border-radius: 0px;\\r\\n}\\r\\n.plus {\\r\\n    position: absolute;\\r\\n    height: 13.6300048828125px;\\r\\n    width: 13.6300048828125px;\\r\\n    left: 185.8701171875px;\\r\\n    top: 277.739990234375px;\\r\\n    border-radius: 0px;\\r\\n}\\r\\n.play-has-no-limits {\\r\\n  position: absolute;\\r\\n  width: 161px;\\r\\n  height: 23px;\\r\\n  left: 22px;\\r\\n  top: 324.73px;\\r\\n\\r\\n  font-family: Helvetica Neue;\\r\\n  font-style: normal;\\r\\n  font-weight: normal;\\r\\n  font-size: 19px;\\r\\n  line-height: 23px;\\r\\n  /* identical to box height */\\r\\n\\r\\n  color: #FFFFFF;\\r\\n}\\r\\n.unleash-new {\\r\\n  position: absolute;\\r\\n  width: 308px;\\r\\n  height: 38px;\\r\\n  left: 22px;\\r\\n  top: 365.73px;\\r\\n\\r\\n  font-family: Helvetica Neue;\\r\\n  font-style: normal;\\r\\n  font-weight: normal;\\r\\n  font-size: 16px;\\r\\n  line-height: 19px;\\r\\n\\r\\n  color: #FFFFFF;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/midpage-component.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/HomePage.css":
/*!**************************!*\
  !*** ./src/HomePage.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./HomePage.css */ \"./node_modules/css-loader/dist/cjs.js!./src/HomePage.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/HomePage.css?");

/***/ }),

/***/ "./src/HomePage.js":
/*!*************************!*\
  !*** ./src/HomePage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomePage; });\n/* harmony import */ var _HomePage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.css */ \"./src/HomePage.css\");\n/* harmony import */ var _HomePage_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HomePage_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-component */ \"./src/header-component.js\");\n/* harmony import */ var _midpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./midpage-component */ \"./src/midpage-component.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\nvar HomePage = /*#__PURE__*/function (_Component) {\n  _inherits(HomePage, _Component);\n\n  var _super = _createSuper(HomePage);\n\n  function HomePage(props) {\n    _classCallCheck(this, HomePage);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(HomePage, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n        className: \"Main\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_header_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_midpage_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n    }\n  }]);\n\n  return HomePage;\n}(react__WEBPACK_IMPORTED_MODULE_3__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/HomePage.js?");

/***/ }),

/***/ "./src/InfoShopPlay.css":
/*!******************************!*\
  !*** ./src/InfoShopPlay.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./InfoShopPlay.css */ \"./node_modules/css-loader/dist/cjs.js!./src/InfoShopPlay.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/InfoShopPlay.css?");

/***/ }),

/***/ "./src/InfoShopPlay.js":
/*!*****************************!*\
  !*** ./src/InfoShopPlay.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InfoShopPlay; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _InfoShopPlay_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoShopPlay.css */ \"./src/InfoShopPlay.css\");\n/* harmony import */ var _InfoShopPlay_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_InfoShopPlay_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction InfoShopPlay() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    className: \"info-icon\",\n    width: \"20\",\n    height: \"20\",\n    viewBox: \"0 0 20 20\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M10.0103 1.03093C11.7847 1.03094 13.5191 1.55723 14.9943 2.54322C16.4695 3.52921 17.6191 4.93058 18.2976 6.57007C18.9762 8.20955 19.1532 10.0135 18.8063 11.7536C18.4594 13.4937 17.6041 15.0918 16.3488 16.3457C15.0934 17.5997 13.4943 18.4531 11.7538 18.798C10.0133 19.1429 8.20955 18.9638 6.57084 18.2834C4.93214 17.603 3.53207 16.4518 2.54778 14.9755C1.56348 13.4992 1.03919 11.7641 1.04123 9.98971C1.04396 7.61274 1.99013 5.33405 3.67186 3.65425C5.35359 1.97445 7.63336 1.03093 10.0103 1.03093ZM10.0103 5.31097e-06C8.03163 -0.00203353 6.09681 0.582991 4.45074 1.68102C2.80467 2.77905 1.52134 4.34072 0.763191 6.1684C0.00503659 7.99608 -0.193877 10.0076 0.191647 11.9484C0.57717 13.8891 1.52979 15.6719 2.92893 17.0711C4.32808 18.4702 6.11085 19.4228 8.05162 19.8084C9.99239 20.1939 12.0039 19.995 13.8316 19.2368C15.6593 18.4787 17.221 17.1954 18.319 15.5493C19.417 13.9032 20.002 11.9684 20 9.98971C20 7.34027 18.9475 4.79935 17.0741 2.92592C15.2007 1.05249 12.6597 5.31097e-06 10.0103 5.31097e-06Z\",\n    fill: \"white\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M12.4049 14.8488C12.3419 15.0907 12.2998 15.301 12.2472 15.5007C12.2304 15.5381 12.2004 15.568 12.1631 15.5849C11.6163 15.7741 11.1115 15.995 10.5332 16.1317C9.98393 16.2619 9.40801 16.2215 8.88226 16.016C8.55958 15.9061 8.28192 15.6932 8.09195 15.4102C7.90198 15.1271 7.8102 14.7895 7.83071 14.4492C7.88266 13.7954 8.00968 13.1497 8.20927 12.5249C8.4301 11.7467 8.62989 10.9686 8.81917 10.1799C8.85592 9.97122 8.85592 9.7577 8.81917 9.54899C8.81384 9.4206 8.75975 9.29907 8.66791 9.20919C8.57608 9.1193 8.45342 9.06786 8.32494 9.06529C7.94959 9.00924 7.56615 9.04901 7.21031 9.18095L7.06309 9.23354H7C7.05258 9.03375 7.09463 8.81292 7.15773 8.60261C7.15773 8.60261 7.15774 8.60261 7.25238 8.53952C7.87077 8.25497 8.52534 8.05683 9.19773 7.95065C9.78164 7.85392 10.3804 7.98569 10.8697 8.31867C11.0772 8.47525 11.2419 8.68166 11.3485 8.91876C11.4551 9.15587 11.5002 9.41602 11.4796 9.67517C11.4363 10.319 11.3127 10.9548 11.1115 11.5679C10.8288 12.4009 10.6143 13.2555 10.4701 14.1232C10.4701 14.1232 10.4701 14.1758 10.4701 14.2073C10.407 14.7541 10.6489 15.0591 11.1957 15.0801C11.4645 15.0752 11.7323 15.0435 11.9948 14.9855C12.1105 14.9434 12.2472 14.8909 12.4049 14.8488Z\",\n    fill: \"white\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M11.0588 6.91371C10.8404 6.93325 10.6203 6.90444 10.4142 6.82928C10.2081 6.75413 10.0211 6.63449 9.86654 6.47888C9.71195 6.32328 9.59353 6.13553 9.51971 5.92898C9.44589 5.72243 9.41849 5.50217 9.43945 5.28383C9.50279 4.91542 9.6975 4.58243 9.98751 4.34656C10.2775 4.11068 10.6432 3.98791 11.0168 4.00094C11.3918 4.00124 11.7536 4.13976 12.0329 4.39001C12.3123 4.64026 12.4896 4.98469 12.531 5.35744C12.5596 5.57147 12.5364 5.78924 12.4632 5.99239C12.39 6.19554 12.269 6.3781 12.1104 6.52465C11.97 6.65649 11.8046 6.75886 11.624 6.82569C11.4434 6.89252 11.2512 6.92244 11.0588 6.91371Z\",\n    fill: \"white\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    className: \"shop-icon\",\n    width: \"70\",\n    height: \"27\",\n    viewBox: \"0 0 70 27\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n    width: \"70\",\n    height: \"27\",\n    rx: \"13.5\",\n    fill: \"white\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M22 10H13V19H22V10Z\",\n    fill: \"black\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M17.5 13C16.1039 13 15 11.67 15 10C15 8.33 16.0823 7 17.5 7C18.9178 7 20 8.33 20 10C20 11.67 18.9069 13 17.5 13ZM17.5 7.91C16.71 7.91 16.039 8.85 16.039 9.97C16.039 11.09 16.71 12.04 17.5 12.04C18.29 12.04 18.9719 11.09 18.9719 9.97C18.9719 8.85 18.3009 7.91 17.5 7.91Z\",\n    fill: \"black\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M30.014 14.906C30.014 15.2613 30.0746 15.5647 30.196 15.816C30.3173 16.0673 30.4863 16.2753 30.703 16.44C30.9196 16.596 31.1666 16.713 31.444 16.791C31.73 16.8603 32.0376 16.895 32.367 16.895C32.7223 16.895 33.0256 16.856 33.277 16.778C33.5283 16.6913 33.732 16.583 33.888 16.453C34.044 16.323 34.1566 16.1757 34.226 16.011C34.2953 15.8377 34.33 15.6643 34.33 15.491C34.33 15.1357 34.2476 14.8757 34.083 14.711C33.927 14.5377 33.7536 14.4163 33.563 14.347C33.2336 14.2257 32.848 14.113 32.406 14.009C31.9726 13.8963 31.4353 13.7533 30.794 13.58C30.3953 13.476 30.0616 13.3417 29.793 13.177C29.533 13.0037 29.325 12.813 29.169 12.605C29.013 12.397 28.9003 12.176 28.831 11.942C28.7703 11.708 28.74 11.4697 28.74 11.227C28.74 10.759 28.8353 10.356 29.026 10.018C29.2253 9.67133 29.4853 9.38533 29.806 9.16C30.1266 8.93467 30.4906 8.77 30.898 8.666C31.3053 8.55333 31.717 8.497 32.133 8.497C32.6183 8.497 33.0733 8.562 33.498 8.692C33.9313 8.81333 34.3083 8.99967 34.629 9.251C34.9583 9.50233 35.2183 9.81433 35.409 10.187C35.5996 10.551 35.695 10.9757 35.695 11.461H34.07C34.0266 10.863 33.823 10.4427 33.459 10.2C33.095 9.94867 32.6313 9.823 32.068 9.823C31.8773 9.823 31.6823 9.84467 31.483 9.888C31.2836 9.92267 31.1016 9.98767 30.937 10.083C30.7723 10.1697 30.6336 10.291 30.521 10.447C30.417 10.603 30.365 10.798 30.365 11.032C30.365 11.3613 30.4646 11.6213 30.664 11.812C30.872 11.994 31.1406 12.1327 31.47 12.228C31.5046 12.2367 31.639 12.2757 31.873 12.345C32.1156 12.4057 32.3843 12.475 32.679 12.553C32.9736 12.631 33.2596 12.709 33.537 12.787C33.823 12.8563 34.0266 12.9083 34.148 12.943C34.4513 13.0383 34.7156 13.1683 34.941 13.333C35.1663 13.4977 35.3526 13.6883 35.5 13.905C35.656 14.113 35.7686 14.3383 35.838 14.581C35.916 14.8237 35.955 15.0663 35.955 15.309C35.955 15.829 35.8466 16.2753 35.63 16.648C35.422 17.012 35.1446 17.311 34.798 17.545C34.4513 17.779 34.057 17.948 33.615 18.052C33.173 18.1647 32.7223 18.221 32.263 18.221C31.7343 18.221 31.236 18.156 30.768 18.026C30.3 17.896 29.8926 17.6967 29.546 17.428C29.1993 17.1593 28.922 16.817 28.714 16.401C28.506 15.9763 28.3976 15.478 28.389 14.906H30.014ZM37.1696 8.718H38.6516V12.163H38.6776C38.8596 11.8597 39.1283 11.6083 39.4836 11.409C39.8476 11.201 40.2506 11.097 40.6926 11.097C41.4293 11.097 42.01 11.2877 42.4346 11.669C42.8593 12.0503 43.0716 12.6223 43.0716 13.385V18H41.5896V13.775C41.5723 13.2463 41.4596 12.865 41.2516 12.631C41.0436 12.3883 40.7186 12.267 40.2766 12.267C40.0253 12.267 39.8 12.3147 39.6006 12.41C39.4013 12.4967 39.2323 12.6223 39.0936 12.787C38.955 12.943 38.8466 13.1293 38.7686 13.346C38.6906 13.5627 38.6516 13.7923 38.6516 14.035V18H37.1696V8.718ZM47.7155 18.182C47.1782 18.182 46.6972 18.0953 46.2725 17.922C45.8565 17.74 45.5012 17.493 45.2065 17.181C44.9205 16.869 44.6995 16.4963 44.5435 16.063C44.3962 15.6297 44.3225 15.153 44.3225 14.633C44.3225 14.1217 44.3962 13.6493 44.5435 13.216C44.6995 12.7827 44.9205 12.41 45.2065 12.098C45.5012 11.786 45.8565 11.5433 46.2725 11.37C46.6972 11.188 47.1782 11.097 47.7155 11.097C48.2528 11.097 48.7295 11.188 49.1455 11.37C49.5702 11.5433 49.9255 11.786 50.2115 12.098C50.5062 12.41 50.7272 12.7827 50.8745 13.216C51.0305 13.6493 51.1085 14.1217 51.1085 14.633C51.1085 15.153 51.0305 15.6297 50.8745 16.063C50.7272 16.4963 50.5062 16.869 50.2115 17.181C49.9255 17.493 49.5702 17.74 49.1455 17.922C48.7295 18.0953 48.2528 18.182 47.7155 18.182ZM47.7155 17.012C48.0448 17.012 48.3308 16.9427 48.5735 16.804C48.8162 16.6653 49.0155 16.4833 49.1715 16.258C49.3275 16.0327 49.4402 15.7813 49.5095 15.504C49.5875 15.218 49.6265 14.9277 49.6265 14.633C49.6265 14.347 49.5875 14.061 49.5095 13.775C49.4402 13.489 49.3275 13.2377 49.1715 13.021C49.0155 12.7957 48.8162 12.6137 48.5735 12.475C48.3308 12.3363 48.0448 12.267 47.7155 12.267C47.3862 12.267 47.1002 12.3363 46.8575 12.475C46.6148 12.6137 46.4155 12.7957 46.2595 13.021C46.1035 13.2377 45.9865 13.489 45.9085 13.775C45.8392 14.061 45.8045 14.347 45.8045 14.633C45.8045 14.9277 45.8392 15.218 45.9085 15.504C45.9865 15.7813 46.1035 16.0327 46.2595 16.258C46.4155 16.4833 46.6148 16.6653 46.8575 16.804C47.1002 16.9427 47.3862 17.012 47.7155 17.012ZM52.3795 11.279H53.7835V12.189H53.8095C54.0175 11.799 54.3079 11.5217 54.6805 11.357C55.0532 11.1837 55.4562 11.097 55.8895 11.097C56.4182 11.097 56.8775 11.1923 57.2675 11.383C57.6662 11.565 57.9955 11.8207 58.2555 12.15C58.5155 12.4707 58.7105 12.8477 58.8405 13.281C58.9705 13.7143 59.0355 14.178 59.0355 14.672C59.0355 15.1227 58.9749 15.5603 58.8535 15.985C58.7409 16.4097 58.5632 16.7867 58.3205 17.116C58.0865 17.4367 57.7875 17.6967 57.4235 17.896C57.0595 18.0867 56.6305 18.182 56.1365 18.182C55.9199 18.182 55.7032 18.1603 55.4865 18.117C55.2699 18.0823 55.0619 18.0217 54.8625 17.935C54.6632 17.8483 54.4769 17.74 54.3035 17.61C54.1389 17.4713 54.0002 17.311 53.8875 17.129H53.8615V20.483H52.3795V11.279ZM57.5535 14.646C57.5535 14.3427 57.5145 14.048 57.4365 13.762C57.3585 13.476 57.2415 13.2247 57.0855 13.008C56.9295 12.7827 56.7345 12.605 56.5005 12.475C56.2665 12.3363 55.9979 12.267 55.6945 12.267C55.0705 12.267 54.5982 12.4837 54.2775 12.917C53.9655 13.3503 53.8095 13.9267 53.8095 14.646C53.8095 14.984 53.8485 15.3003 53.9265 15.595C54.0132 15.881 54.1389 16.128 54.3035 16.336C54.4682 16.544 54.6632 16.7087 54.8885 16.83C55.1225 16.9513 55.3912 17.012 55.6945 17.012C56.0325 17.012 56.3185 16.9427 56.5525 16.804C56.7865 16.6653 56.9772 16.4877 57.1245 16.271C57.2805 16.0457 57.3889 15.7943 57.4495 15.517C57.5189 15.231 57.5535 14.9407 57.5535 14.646Z\",\n    fill: \"black\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    className: \"play-icon\",\n    width: \"28\",\n    height: \"27\",\n    viewBox: \"0 0 28 27\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n    x: \"16.667\",\n    y: \"5.66675\",\n    width: \"3.33333\",\n    height: \"16.6667\",\n    fill: \"white\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n    x: \"8\",\n    y: \"5.66675\",\n    width: \"3.33333\",\n    height: \"16.6667\",\n    fill: \"white\"\n  })));\n}\n\n//# sourceURL=webpack:///./src/InfoShopPlay.js?");

/***/ }),

/***/ "./src/Main.css":
/*!**********************!*\
  !*** ./src/Main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./Main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/Main.css?");

/***/ }),

/***/ "./src/Main.js":
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var _Main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.css */ \"./src/Main.css\");\n/* harmony import */ var _Main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NotificationBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationBar */ \"./src/NotificationBar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomePage */ \"./src/HomePage.js\");\n/* harmony import */ var _assets_rpreplay_final1610763893_1_1x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/rpreplay-final1610763893-1@1x */ \"./assets/rpreplay-final1610763893-1@1x.gif\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n // eslint-disable-next-line\n\n\nvar omniLogo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n  className: \"vector-text row\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-4@2x.svg\",\n  alt: \"\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-1@2x.svg\",\n  alt: \"\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-2@2x.svg\",\n  alt: \"\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-3@2x.svg\",\n  alt: \"\"\n}));\nvar signUpText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n  className: \"spaced-vector-text row\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n  className: \"vector-text row\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-6@2x.svg\",\n  alt: \"\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-7@2x.svg\",\n  alt: \"\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-8@2x.svg\",\n  alt: \"\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-9@2x.svg\",\n  alt: \"\"\n})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n  className: \"vector-text row\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-10@2x.svg\",\n  alt: \"\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-11@2x.svg\",\n  alt: \"\"\n})));\nvar logInText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n  className: \"spaced-vector-text row\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n  className: \"vector-text row\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-12@2x.svg\",\n  alt: \"\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-13@2x.svg\",\n  alt: \"\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-14@2x.svg\",\n  alt: \"\"\n})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n  className: \"vector-text row\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-15@2x.svg\",\n  alt: \"\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-16@2x.svg\",\n  alt: \"\"\n})));\n\nvar Main = /*#__PURE__*/function (_Component) {\n  _inherits(Main, _Component);\n\n  var _super = _createSuper(Main);\n\n  function Main(props) {\n    var _this;\n\n    _classCallCheck(this, Main);\n\n    _this = _super.call(this, props);\n    var homePage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: \"Main\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_NotificationBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      className: \"overlayed-notification-bar\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: \"screen\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: \"screen-omni-logo\"\n    }, omniLogo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n      className: \"home-gif\",\n      src: _assets_rpreplay_final1610763893_1_1x__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"p\", {\n      className: \"screen-text\"\n    }, \"Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"a\", {\n      className: \"screen-sign-up\",\n      href: '/home'\n    }, signUpText, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n      className: \"screen-sign-up-box\",\n      src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-5@2x.svg\",\n      alt: \"\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"a\", {\n      className: \"screen-log-in\",\n      href: '/home'\n    }, logInText, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"svg\", {\n      className: \"screen-log-in-box\",\n      src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-5@2x.svg\"\n    }))));\n    _this.state = {\n      home: homePage\n    };\n    return _this;\n  }\n\n  _createClass(Main, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"BrowserRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Route\"], {\n        exact: true,\n        path: \"/\"\n      }, this.state.home), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Route\"], {\n        path: \"/home\",\n        component: _HomePage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n      })));\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_2__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/Main.js?");

/***/ }),

/***/ "./src/NotificationBar.js":
/*!********************************!*\
  !*** ./src/NotificationBar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\src\\\\NotificationBar.js: Identifier 'phoneBezel' has already been declared (4:7)\\n\\n\\u001b[0m \\u001b[90m 2 | \\u001b[39m\\u001b[36mimport\\u001b[39m \\u001b[32m'./NotificationBar.css'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\u001b[36mimport\\u001b[39m phoneBezel from \\u001b[32m'../assets/phone_bezel.png'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 4 | \\u001b[39m\\u001b[36mimport\\u001b[39m phoneBezel from \\u001b[32m'../assets/phone_camera.png'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m       \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 | \\u001b[39m\\u001b[36mconst\\u001b[39m iPhoneXorNewerData \\u001b[33m=\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m  x941\\u001b[33m:\\u001b[39m \\u001b[32m\\\"https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/9-41@2x.svg\\\"\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n    at Object._raise (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:748:17)\\n    at Object.raiseWithData (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:741:17)\\n    at Object.raise (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:735:17)\\n    at ScopeHandler.checkRedeclarationInScope (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4919:12)\\n    at ScopeHandler.declareName (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4885:12)\\n    at Object.checkLVal (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9590:24)\\n    at Object.parseImportSpecifierLocal (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13133:10)\\n    at Object.maybeParseDefaultImportSpecifier (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13235:12)\\n    at Object.parseImport (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13098:31)\\n    at Object.parseStatementContent (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11776:27)\");\n\n//# sourceURL=webpack:///./src/NotificationBar.js?");

/***/ }),

/***/ "./src/header-component.css":
/*!**********************************!*\
  !*** ./src/header-component.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./header-component.css */ \"./node_modules/css-loader/dist/cjs.js!./src/header-component.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/header-component.css?");

/***/ }),

/***/ "./src/header-component.js":
/*!*********************************!*\
  !*** ./src/header-component.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-component.css */ \"./src/header-component.css\");\n/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_component_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NotificationBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationBar */ \"./src/NotificationBar.js\");\n\n\n\n\nfunction LightBackground(props) {\n  var vector = props.vector;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"light-background-vector\",\n    src: vector,\n    alt: \"\"\n  });\n}\n\nvar LightBackgroundData = {\n  vector: \"https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/vector-69@2x.svg\"\n};\n\nfunction SearchVector(props) {\n  var vector = props.vector;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"search-vector\",\n    src: vector,\n    alt: \"\"\n  });\n}\n\nvar SearchVectorData = {\n  vector: \"https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/vector-72@2x.svg\"\n};\n\nfunction Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NotificationBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchVector, {\n    vector: SearchVectorData.vector\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    className: \"omni-group\",\n    width: \"56\",\n    height: \"17\",\n    viewBox: \"0 0 56 17\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M14.0598 0H16.9698L19.1098 6.74L19.8498 9.3H19.9498L20.6698 6.74L22.8198 0H25.7398V16.5H23.4298V9.11C23.4298 7.44 23.6998 4.31 23.8198 2.81H23.7398L22.7398 6.34L20.6398 12.11H19.0598L16.9998 6.27L15.9998 2.74H15.9198C16.0798 4.24 16.3098 7.37 16.3098 9.04V16.48H14.0498L14.0598 0Z\",\n    fill: \"white\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M29.4199 0H32.1299L36.9199 9.81L38.4599 13.28H38.5199C38.4199 11.62 38.1799 9.64 38.1799 7.85V0H40.5899V16.5H37.9199L33.1099 6.69L31.5699 3.22H31.4999C31.5999 4.94 31.8399 6.82 31.8399 8.59V16.5H29.4199V0Z\",\n    fill: \"white\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M44.8398 14.37H48.8398V2.11H44.8398V0H55.4398V2.11H51.4398V14.37H55.4398V16.5H44.8398V14.37Z\",\n    fill: \"white\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M10.19 0H0V16.5H10.19V0Z\",\n    fill: \"white\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    className: \"person-vector\",\n    width: \"20\",\n    height: \"20\",\n    viewBox: \"0 0 20 20\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M15.5203 15.8201L15.0303 16.2201C14.8636 16.3534 14.6936 16.4734 14.5203 16.5801C13.8832 16.9875 13.1889 17.2976 12.4603 17.5001C12.0248 17.6208 11.5799 17.7045 11.1303 17.7501C10.9003 17.7501 10.6503 17.7501 10.4203 17.7501C10.1903 17.7501 9.92028 17.7501 9.69028 17.7501C9.46028 17.7501 9.21027 17.6901 8.96027 17.6401C7.58931 17.3782 6.31647 16.7452 5.28027 15.8101C5.35954 14.8517 5.6971 13.9327 6.25705 13.1509C6.817 12.3691 7.57841 11.7536 8.46027 11.3701C8.82474 11.2143 9.20799 11.1068 9.60028 11.0501C8.93728 10.8563 8.3664 10.43 7.9924 9.84928C7.6184 9.26857 7.46635 8.57245 7.56421 7.88869C7.66207 7.20493 8.00325 6.5794 8.52512 6.1269C9.04699 5.6744 9.71455 5.42529 10.4053 5.42529C11.096 5.42529 11.7636 5.6744 12.2854 6.1269C12.8073 6.5794 13.1485 7.20493 13.2463 7.88869C13.3442 8.57245 13.1922 9.26857 12.8182 9.84928C12.4442 10.43 11.8733 10.8563 11.2103 11.0501C11.6052 11.1094 11.9914 11.2169 12.3603 11.3701C13.2318 11.741 13.9831 12.3469 14.5303 13.1201C15.1085 13.9086 15.4517 14.8447 15.5203 15.8201Z\",\n    fill: \"white\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M10.4202 0.50001C8.50827 0.486141 6.63529 1.04055 5.03895 2.09288C3.44262 3.14521 2.19489 4.64804 1.45405 6.41066C0.713212 8.17329 0.512663 10.1163 0.877879 11.993C1.24309 13.8698 2.1576 15.5958 3.50535 16.952C4.8531 18.3082 6.57336 19.2335 8.44782 19.6104C10.3223 19.9873 12.2665 19.7989 14.0337 19.0691C15.8009 18.3393 17.3115 17.1009 18.3738 15.5112C19.436 13.9215 20.0021 12.052 20.0002 10.14C19.995 7.59528 18.9859 5.15539 17.1921 3.35038C15.3984 1.54538 12.9648 0.521079 10.4202 0.50001ZM15.5202 15.83L15.0302 16.22C14.8635 16.3533 14.6935 16.4733 14.5202 16.58C13.8831 16.9875 13.1888 17.2975 12.4602 17.5C12.0265 17.6284 11.5809 17.7122 11.1302 17.75C10.8938 17.7649 10.6566 17.7649 10.4202 17.75C10.1771 17.7655 9.93328 17.7655 9.6902 17.75C9.44415 17.7344 9.19989 17.6976 8.96018 17.64C7.53662 17.3668 6.22018 16.6942 5.16453 15.7009C4.10888 14.7075 3.35759 13.4343 2.99842 12.03C2.63926 10.6256 2.68701 9.14809 3.13612 7.76987C3.58522 6.39166 4.41717 5.16964 5.53477 4.24652C6.65236 3.3234 8.0095 2.73726 9.44773 2.55655C10.886 2.37584 12.3459 2.60801 13.6572 3.22596C14.9684 3.8439 16.0768 4.82212 16.8529 6.0464C17.629 7.27067 18.0408 8.69046 18.0402 10.14C18.038 11.2114 17.8128 12.2706 17.3789 13.2502C16.9451 14.2298 16.3121 15.1084 15.5202 15.83Z\",\n    fill: \"white\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LightBackground, {\n    vector: LightBackgroundData.vector\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/header-component.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main */ \"./src/Main.js\");\n/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ \"./src/reportWebVitals.js\");\n/* harmony import */ var _assets_phone_bezel_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/phone_bezel.png */ \"./assets/phone_bezel.png\");\n\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  style: {\n    position: 'absolute',\n    left: '50%',\n    top: '50%',\n    transform: 'translate(-50%, -50%)'\n  }\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Main__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\n\nObject(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/midpage-component.css":
/*!***********************************!*\
  !*** ./src/midpage-component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./midpage-component.css */ \"./node_modules/css-loader/dist/cjs.js!./src/midpage-component.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/midpage-component.css?");

/***/ }),

/***/ "./src/midpage-component.js":
/*!**********************************!*\
  !*** ./src/midpage-component.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _midpage_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./midpage-component.css */ \"./src/midpage-component.css\");\n/* harmony import */ var _midpage_component_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_midpage_component_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InfoShopPlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InfoShopPlay */ \"./src/InfoShopPlay.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Midpage() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"ps5-pic\",\n    src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/y2mate-com-ps5-launch-play-has-no-limits-1@2x.gif\",\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    className: \"sony-group\",\n    width: \"159\",\n    height: \"29\",\n    viewBox: \"0 0 159 29\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M31.3999 10.46H27.9299L27.8699 10.07C27.726 9.0873 27.2495 8.1837 26.5199 7.50996C25.8242 6.86967 25.0177 6.36138 24.1399 6.00996C22.9304 5.502 21.6649 5.13946 20.3699 4.92996C18.5351 4.60692 16.672 4.47289 14.8099 4.52997C13.4459 4.55153 12.0882 4.71915 10.7599 5.02997C10.2012 5.16049 9.66058 5.35861 9.14988 5.61996C8.77246 5.79632 8.43285 6.04423 8.14988 6.34996C7.83571 6.69213 7.65474 7.13567 7.63988 7.59996C7.62962 7.77687 7.66039 7.95376 7.72978 8.11682C7.79916 8.27988 7.90529 8.42469 8.03988 8.53996C8.29462 8.7588 8.58567 8.93141 8.89988 9.04997C9.59352 9.31592 10.3146 9.50374 11.0499 9.60997C12.4999 9.85997 13.9699 9.98997 15.4299 10.14C17.7799 10.37 20.1199 10.58 22.4299 11C24.2101 11.2811 25.9539 11.7573 27.6299 12.42C28.7189 12.8441 29.732 13.4418 30.6299 14.19C31.3625 14.8311 31.9474 15.6236 32.344 16.5127C32.7406 17.4018 32.9396 18.3664 32.9273 19.3399C32.9149 20.3135 32.6915 21.2727 32.2724 22.1515C31.8533 23.0302 31.2486 23.8076 30.4999 24.43C29.4181 25.3011 28.1932 25.9778 26.8799 26.43C25.3455 26.9923 23.757 27.3944 22.1399 27.63C20.7344 27.8565 19.3135 27.9736 17.8899 27.98C17.0483 27.965 16.2091 27.8847 15.3799 27.74C12.5958 27.2537 9.84661 26.5856 7.14988 25.74C6.80139 25.6482 6.46553 25.5138 6.14988 25.3399C5.80967 25.1822 5.43197 25.1233 5.05988 25.17V26.7H0.929882V17.16C1.11988 17.1 4.48988 17.08 4.83988 17.16C4.83988 17.42 4.89988 17.69 4.94988 17.95C5.16075 19.0259 5.71942 20.0027 6.53988 20.73C7.45163 21.5331 8.50213 22.1634 9.63988 22.5899C11.0432 23.1405 12.5067 23.5232 13.9999 23.73C15.71 23.9914 17.4412 24.0885 19.1699 24.02C20.5755 23.9902 21.9657 23.7196 23.2799 23.22C23.9942 22.9413 24.6516 22.5347 25.2199 22.02C25.5294 21.7309 25.7895 21.3931 25.9899 21.02C26.0719 20.8669 26.0968 20.6896 26.0599 20.52C25.963 20.0557 25.7042 19.6411 25.3299 19.35C24.9617 19.0602 24.5499 18.8307 24.1099 18.67C23.2163 18.3336 22.2919 18.0858 21.3499 17.93C19.7899 17.65 18.2199 17.48 16.6399 17.29C14.7299 17.06 12.8099 16.83 10.9099 16.54C9.03522 16.2963 7.19375 15.8435 5.41988 15.19C4.28875 14.7907 3.23869 14.1911 2.31988 13.42C1.3379 12.5957 0.693626 11.4388 0.509882 10.17C0.388675 9.38309 0.42528 8.57997 0.617567 7.80739C0.809854 7.0348 1.15398 6.30822 1.62988 5.66996C2.37159 4.69404 3.29949 3.8749 4.35988 3.25996C5.83783 2.39481 7.43008 1.74174 9.08988 1.31996C11.2381 0.739403 13.4546 0.450148 15.6799 0.459958C17.104 0.487846 18.5229 0.641787 19.9199 0.919965C21.9598 1.31871 23.9535 1.9252 25.8699 2.72996C26.2499 2.88996 26.6099 3.07996 26.9799 3.26996C27.1239 3.34634 27.2887 3.37439 27.4499 3.34996C27.7199 3.34996 27.7999 3.21996 27.7999 2.92996V2.05996C28.9956 1.99419 30.1941 1.99419 31.3899 2.05996C31.4499 2.23996 31.4599 10.11 31.3999 10.46Z\",\n    fill: \"white\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M78.4697 5.95993V2.72993H78.7297H90.9097C91.0785 2.73339 91.2395 2.80138 91.3597 2.91994L99.2497 10.0399L107.51 17.4799C107.59 17.5599 107.68 17.6299 107.8 17.7299C107.8 17.6199 107.8 17.5499 107.8 17.4699C107.8 14.1099 107.8 10.7499 107.8 7.38994C107.809 7.19686 107.762 7.00533 107.664 6.8385C107.566 6.67168 107.422 6.53671 107.25 6.44994C106.967 6.28671 106.646 6.20371 106.32 6.20993H102.79V2.76993C102.99 2.70993 116.96 2.68993 117.37 2.76993V6.22993H114C113.83 6.20089 113.656 6.21176 113.491 6.26169C113.326 6.31161 113.175 6.39922 113.05 6.51758C112.925 6.63594 112.829 6.7818 112.77 6.94362C112.711 7.10544 112.69 7.27879 112.71 7.44994V27.0899H112.43H107.56C107.484 27.0923 107.409 27.0794 107.338 27.0519C107.268 27.0244 107.204 26.9829 107.15 26.9299L88.5297 10.3699L88.2697 10.1399C88.2697 10.2799 88.2697 10.3799 88.2697 10.4799V22.9099C88.2697 23.0299 88.2697 23.1399 88.2697 23.2599C88.2697 23.6099 88.4297 23.7299 88.7697 23.7599C88.9429 23.7699 89.1165 23.7699 89.2897 23.7599H93.0797V27.0199C92.8797 27.0799 78.9797 27.0999 78.5797 27.0199V23.7399H82.1097C82.2613 23.7437 82.4127 23.7268 82.5597 23.6899C82.6974 23.6604 82.8209 23.5849 82.91 23.4759C82.999 23.3668 83.0483 23.2307 83.0497 23.0899C83.0547 22.9967 83.0547 22.9032 83.0497 22.8099V6.96994C83.0497 6.86994 83.0497 6.75993 83.0497 6.65993C83.0611 6.5134 83.0154 6.36815 82.9223 6.25449C82.8291 6.14082 82.6956 6.06755 82.5497 6.04994C82.3202 5.99545 82.0856 5.96527 81.8497 5.95993H78.4697Z\",\n    fill: \"white\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M56.3298 28.1999C55.6198 28.1999 54.8498 28.1999 54.0798 28.1199C50.0947 27.8414 46.2624 26.4751 42.9998 24.1699C41.2653 22.9543 39.8293 21.361 38.7998 19.5099C37.8658 17.8525 37.4025 15.9715 37.4598 14.0699C37.5289 12.1755 38.0982 10.3331 39.1098 8.72992C40.2548 6.9118 41.7797 5.36302 43.5798 4.18992C45.6622 2.81348 47.9708 1.81486 50.3998 1.23991C52.7872 0.659721 55.2464 0.430653 57.6998 0.559918C61.022 0.690668 64.2779 1.52936 67.2498 3.01991C69.4029 4.07531 71.3002 5.58702 72.8098 7.44992C73.949 8.83306 74.7411 10.4685 75.1198 12.2199C75.6078 14.4517 75.3331 16.7827 74.3398 18.8399C73.5129 20.5814 72.3149 22.1207 70.8298 23.3499C68.758 25.0848 66.3515 26.3748 63.7598 27.1399C62.0743 27.6727 60.3327 28.0083 58.5698 28.1399C57.8498 28.1799 57.1198 28.1799 56.3298 28.1999ZM56.1498 23.7999C57.7348 23.8306 59.3116 23.5661 60.7998 23.0199C62.805 22.3206 64.5493 21.0263 65.7998 19.3099C66.6441 18.211 67.1885 16.9116 67.3796 15.539C67.5707 14.1664 67.4019 12.7677 66.8898 11.4799C66.181 9.58219 64.8527 7.97907 63.1198 6.92991C61.543 5.90525 59.752 5.25611 57.8848 5.03247C56.0177 4.80882 54.1241 5.01664 52.3498 5.63992C50.2814 6.25813 48.4658 7.52343 47.1698 9.24992C46.2883 10.3297 45.7023 11.6199 45.4692 12.9942C45.236 14.3685 45.3638 15.7798 45.8398 17.0899C46.4881 18.9348 47.7159 20.5205 49.3398 21.6099C51.3312 23.0217 53.7088 23.7863 56.1498 23.7999Z\",\n    fill: \"white\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M120.29 6.21999V2.72998H137.56C137.621 3.87918 137.621 5.03078 137.56 6.17998H137.27H135.27C135.219 6.18153 135.17 6.19434 135.125 6.21748C135.08 6.24063 135.041 6.27353 135.01 6.31377C134.979 6.35401 134.958 6.40059 134.948 6.4501C134.937 6.49962 134.938 6.55081 134.95 6.59998C134.988 6.78637 135.062 6.96325 135.17 7.11998C135.359 7.38111 135.563 7.63149 135.78 7.86998C137.467 9.71665 139.16 11.56 140.86 13.4C140.905 13.4517 140.955 13.4986 141.01 13.54L141.23 13.31L146.99 6.99998C147.041 6.95705 147.085 6.90643 147.12 6.84998C147.152 6.81033 147.175 6.76443 147.187 6.71529C147.2 6.66614 147.202 6.61486 147.194 6.5648C147.185 6.51475 147.166 6.46706 147.138 6.42487C147.11 6.38267 147.073 6.34693 147.03 6.31998C146.889 6.20643 146.71 6.15258 146.53 6.16998H144.72H144.45V2.72998H158.45V6.19998H154.74C154.655 6.19485 154.571 6.20932 154.493 6.24228C154.415 6.27524 154.345 6.32579 154.29 6.38998C150.61 10.3233 146.943 14.2433 143.29 18.15C143.234 18.2065 143.19 18.2737 143.161 18.3476C143.132 18.4215 143.118 18.5006 143.12 18.58C143.12 20.09 143.12 21.58 143.12 23.11V23.31C143.12 23.4412 143.169 23.5678 143.258 23.6642C143.347 23.7607 143.469 23.8199 143.6 23.83H147.84H147.97V26.93H131V23.81H135C135.156 23.8022 135.302 23.7342 135.409 23.6204C135.515 23.5065 135.573 23.3558 135.57 23.2V23.03C135.57 21.46 135.57 19.88 135.57 18.31C135.574 18.2258 135.561 18.1418 135.532 18.0628C135.502 17.9837 135.458 17.9114 135.4 17.85L124.95 6.39998C124.894 6.32994 124.822 6.27432 124.741 6.23778C124.659 6.20124 124.569 6.18485 124.48 6.18999H120.33L120.29 6.21999Z\",\n    fill: \"white\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    className: \"plus\",\n    width: \"15\",\n    height: \"15\",\n    viewBox: \"0 0 15 15\",\n    fill: \"none\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M14.5001 7.55005H0.870117\",\n    stroke: \"white\",\n    \"stroke-width\": \"2\",\n    \"stroke-miterlimit\": \"10\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n    d: \"M7.68018 14.37V0.73999\",\n    stroke: \"white\",\n    \"stroke-width\": \"2\",\n    \"stroke-miterlimit\": \"10\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"play-has-no-limits\"\n  }, \"Play Has No Limits\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"unleash-new\"\n  }, \"Unleash new gaming possibilities that\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"you\\u2019ve never anticipated with PlayStation 5\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoShopPlay__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Midpage);\n/*\r\n\r\n\r\n\r\n\r\n*/\n\n//# sourceURL=webpack:///./src/midpage-component.js?");

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar reportWebVitals = function reportWebVitals(onPerfEntry) {\n  if (onPerfEntry && onPerfEntry instanceof Function) {\n    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ \"./node_modules/web-vitals/dist/web-vitals.es5.min.js\")).then(function (_ref) {\n      var getCLS = _ref.getCLS,\n          getFID = _ref.getFID,\n          getFCP = _ref.getFCP,\n          getLCP = _ref.getLCP,\n          getTTFB = _ref.getTTFB;\n      getCLS(onPerfEntry);\n      getFID(onPerfEntry);\n      getFCP(onPerfEntry);\n      getLCP(onPerfEntry);\n      getTTFB(onPerfEntry);\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reportWebVitals);\n\n//# sourceURL=webpack:///./src/reportWebVitals.js?");

/***/ })

/******/ });