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

/***/ "./assets/rpreplay-final1610763893-1@1x.gif":
/*!**************************************************!*\
  !*** ./assets/rpreplay-final1610763893-1@1x.gif ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"static/assets/rpreplay-final1610763893-1@1x.gif\");\n\n//# sourceURL=webpack:///./assets/rpreplay-final1610763893-1@1x.gif?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Main.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Main {\\n  background-color: black;\\n  width: 375px;\\n  height: 812px;\\n}\\n\\n.home-gif {\\n  height: 737px;\\n  width: 375px;\\n  display: flex;\\n  position: absolute;\\n}\\n\\n.vector-text {\\n  flex-direction: row;\\n  display: flex;\\n  position: relative;\\n  z-index: 9998 !important;\\n}\\n\\n.spaced-vector-text {\\n  flex-direction: row;\\n  display: flex;\\n  position: relative;\\n  justify-content: space-around;\\n  z-index: 9998 !important;\\n  width: 60px;\\n}\\n\\n.screen {\\n  display: flex;\\n  position: relative;\\n  flex-direction: column;\\n  height: 737px;\\n  width: 375px;\\n}\\n.screen-omni-logo {\\n  position: absolute;\\n  top: 395px;\\n  left: 280px;\\n}\\n.screen-text {\\n  position: absolute;\\n  color: white;\\n  font-family: \\\"Source Code Pro\\\", Helvetica, Arial, serif;\\n  font-size: 14px;\\n  font-style: normal;\\n  font-weight: 400;\\n  letter-spacing: 0px;\\n  min-height: 54px;\\n  text-align: right;\\n  width: 314px;\\n  top: 460px;\\n  left: 35px;\\n}\\n.screen-sign-up {\\n  position: absolute;\\n  display: flex;\\n  align-content: center;\\n  justify-content: center;\\n  height: 38px;\\n  width: 322px;\\n  top: 622px;\\n  left: 30px;\\n}\\n.screen-sign-up-box {\\n  position: absolute;\\n  display: flex;\\n  height: 38px;\\n  width: 322px;\\n}\\n.screen-log-in {\\n  position: absolute;\\n  display: flex;\\n  align-content: center;\\n  justify-content: center;\\n  height: 38px;\\n  width: 322px;\\n  top: 672px;\\n  left: 30px;\\n}\\n.screen-log-in-box {\\n  position: absolute;\\n  display: flex;\\n  height: 38px;\\n  width: 322px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/Main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/NotificationBar.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/NotificationBar.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".light-background-vector {\\n  width: 375px;\\n  height: 136px;\\n}\\n\\n.combined-shape {\\n  height: 4px;\\n  margin-top: 2px;\\n  width: 2px;\\n}\\n\\n.i-phone-x-or-newer {\\n  align-items: center;\\n  display: flex;\\n  height: 44px;\\n  overflow: hidden;\\n  padding: 0 14.3px;\\n  width: 375px;\\n}\\n\\n.mobile-signal {\\n  height: 12px;\\n  left: 215px;\\n  position: absolute;\\n  top: 19px;\\n  width: 18px;\\n}\\n\\n.notch {\\n  height: 30px;\\n  left: 0px;\\n  position: absolute;\\n  top: 0px;\\n  width: 219px;\\n}\\n\\n.overlap-group {\\n  align-self: flex-start;\\n  height: 31px;\\n  margin-left: 15px;\\n  margin-top: -2px;\\n  position: relative;\\n  width: 233px;\\n}\\n\\n.overlap-group1 {\\n  align-items: flex-end;\\n  background-size: 100% 100%;\\n  display: flex;\\n  height: 12px;\\n  margin-left: 4px;\\n  margin-top: 2px;\\n  min-width: 22px;\\n  padding: 2px 2px;\\n}\\n\\n.rectangle {\\n  height: 8px;\\n  width: 18px;\\n}\\n\\n.wifi {\\n  height: 12px;\\n  margin-left: 4px;\\n  margin-top: 1.63px;\\n  width: 16px;\\n}\\n\\n.x941 {\\n  height: 12px;\\n  margin-top: 1.42px;\\n  width: 29px;\\n}\\n\\n.search-vector {\\n  position: absolute;\\n  height: 16.9299373627px;\\n  width: 15.5599851608px;\\n  left: 20.83984375px;\\n  top: 62.3500976563px;\\n  border-radius: 0px;\\n}\\n\\n.omni-group {\\n  position: absolute;\\n  height: 16.5px;\\n  width: 55.4399986267px;\\n  left: 160px;\\n  top: 62px;\\n  border-radius: 0px;\\n}\\n\\n.person-vector {\\n  position: absolute;\\n  height: 19.3000030518px;\\n  width: 19.3000030518px;\\n  left: 337.7001953125px;\\n  top: 60.4997558594px;\\n  border-radius: 0px;\\n}\\n\\n.NotificationBar {\\n  background: black;\\n  width: 375px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/NotificationBar.css?./node_modules/css-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\\n    sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\ncode {\\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\\n    monospace;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/HomePage.js":
/*!*************************!*\
  !*** ./src/HomePage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomePage; });\n/* harmony import */ var _Main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.css */ \"./src/Main.css\");\n/* harmony import */ var _Main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-component */ \"./src/header-component.js\");\n/* harmony import */ var _midpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./midpage-component */ \"./src/midpage-component.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\nvar HomePage = /*#__PURE__*/function (_Component) {\n  _inherits(HomePage, _Component);\n\n  var _super = _createSuper(HomePage);\n\n  function HomePage(props) {\n    _classCallCheck(this, HomePage);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(HomePage, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n        className: \"Main\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_header_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_midpage_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n    }\n  }]);\n\n  return HomePage;\n}(react__WEBPACK_IMPORTED_MODULE_3__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/HomePage.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var _Main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.css */ \"./src/Main.css\");\n/* harmony import */ var _Main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NotificationBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationBar */ \"./src/NotificationBar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomePage */ \"./src/HomePage.js\");\n/* harmony import */ var _assets_rpreplay_final1610763893_1_1x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/rpreplay-final1610763893-1@1x */ \"./assets/rpreplay-final1610763893-1@1x.gif\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n // eslint-disable-next-line\n\n\nvar omniLogo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n  className: \"vector-text row\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-4@2x.svg\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-1@2x.svg\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-2@2x.svg\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-3@2x.svg\"\n}));\nvar signUpText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n  className: \"spaced-vector-text row\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n  className: \"vector-text row\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-6@2x.svg\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-7@2x.svg\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-8@2x.svg\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-9@2x.svg\"\n})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n  className: \"vector-text row\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-10@2x.svg\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-11@2x.svg\"\n})));\nvar logInText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n  className: \"spaced-vector-text row\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n  className: \"vector-text row\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-12@2x.svg\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-13@2x.svg\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-14@2x.svg\"\n})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n  className: \"vector-text row\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-15@2x.svg\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n  src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-16@2x.svg\"\n})));\n\nvar Main = /*#__PURE__*/function (_Component) {\n  _inherits(Main, _Component);\n\n  var _super = _createSuper(Main);\n\n  function Main(props) {\n    var _this;\n\n    _classCallCheck(this, Main);\n\n    _this = _super.call(this, props);\n    var homePage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_NotificationBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: \"screen\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: \"screen-omni-logo\"\n    }, omniLogo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n      className: \"home-gif\",\n      src: _assets_rpreplay_final1610763893_1_1x__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"p\", {\n      className: \"screen-text\"\n    }, \"Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n      className: \"screen-sign-up\"\n    }, signUpText, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"img\", {\n      className: \"screen-sign-up-box\",\n      src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-5@2x.svg\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"a\", {\n      className: \"screen-log-in\",\n      href: '/home'\n    }, logInText, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"svg\", {\n      className: \"screen-log-in-box\",\n      src: \"https://anima-uploads.s3.amazonaws.com/projects/6003bcb01a17443328fd7f8d/releases/60052d05bc4afa862d2087ee/img/vector-5@2x.svg\"\n    }))));\n    _this.state = {\n      home: homePage\n    };\n    return _this;\n  }\n\n  _createClass(Main, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"BrowserRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Route\"], {\n        exact: true,\n        path: \"/\"\n      }, this.state.home), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Route\"], {\n        path: \"/home\",\n        component: _HomePage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n      })));\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_2__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/Main.js?");

/***/ }),

/***/ "./src/NotificationBar.css":
/*!*********************************!*\
  !*** ./src/NotificationBar.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./NotificationBar.css */ \"./node_modules/css-loader/dist/cjs.js!./src/NotificationBar.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/NotificationBar.css?");

/***/ }),

/***/ "./src/NotificationBar.js":
/*!********************************!*\
  !*** ./src/NotificationBar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NotificationBar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NotificationBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationBar.css */ \"./src/NotificationBar.css\");\n/* harmony import */ var _NotificationBar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NotificationBar_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar iPhoneXorNewerData = {\n  x941: \"https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/9-41@2x.svg\",\n  notch: \"https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/notch@2x.svg\",\n  mobileSignal: \"https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/mobile-signal@2x.svg\",\n  wifi: \"https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/wifi@2x.svg\",\n  overlapGroup1: \"https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/rectangle@2x.svg\",\n  rectangle: \"https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/rectangle-1@2x.svg\",\n  combinedShape: \"https://anima-uploads.s3.amazonaws.com/projects/6003bda18e67c2318c5e088e/releases/6003bedd1a17443328fd7f8e/img/combined-shape@2x.svg\"\n};\n\nfunction IPhoneXorNewer(props) {\n  var x941 = props.x941,\n      notch = props.notch,\n      mobileSignal = props.mobileSignal,\n      wifi = props.wifi,\n      overlapGroup1 = props.overlapGroup1,\n      rectangle = props.rectangle,\n      combinedShape = props.combinedShape;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"i-phone-x-or-newer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"x941\",\n    src: x941,\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"overlap-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"notch\",\n    src: notch,\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"mobile-signal\",\n    src: mobileSignal,\n    alt: \"\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"wifi\",\n    src: wifi,\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"overlap-group1\",\n    style: {\n      backgroundImage: \"url(\".concat(overlapGroup1, \")\")\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"rectangle\",\n    src: rectangle,\n    alt: \"\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"combined-shape\",\n    src: combinedShape,\n    alt: \"\"\n  }));\n}\n\nfunction NotificationBar() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"NotificationBar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IPhoneXorNewer, {\n    x941: iPhoneXorNewerData.x941,\n    notch: iPhoneXorNewerData.notch,\n    mobileSignal: iPhoneXorNewerData.mobileSignal,\n    wifi: iPhoneXorNewerData.wifi,\n    overlapGroup1: iPhoneXorNewerData.overlapGroup1,\n    rectangle: iPhoneXorNewerData.rectangle,\n    combinedShape: iPhoneXorNewerData.combinedShape\n  })));\n}\n\n//# sourceURL=webpack:///./src/NotificationBar.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Main */ \"./src/Main.js\");\n/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ \"./src/reportWebVitals.js\");\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Main__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\n\nObject(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/midpage-component.js":
/*!**********************************!*\
  !*** ./src/midpage-component.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\src\\\\midpage-component.js: Unexpected token (35:8)\\n\\n\\u001b[0m \\u001b[90m 33 | \\u001b[39m        config\\u001b[33m=\\u001b[39m{{\\u001b[0m\\n\\u001b[0m \\u001b[90m 34 | \\u001b[39m            youtube\\u001b[33m:\\u001b[39m \\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 35 | \\u001b[39m        }}\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 36 | \\u001b[39m        controls\\u001b[33m=\\u001b[39m{\\u001b[36mfalse\\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 37 | \\u001b[39m        loop\\u001b[33m=\\u001b[39m{\\u001b[36mtrue\\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 38 | \\u001b[39m        playsinline\\u001b[33m=\\u001b[39m{\\u001b[36mtrue\\u001b[39m}\\u001b[0m\\n    at Object._raise (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:748:17)\\n    at Object.raiseWithData (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:741:17)\\n    at Object.raise (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:735:17)\\n    at Object.unexpected (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9101:16)\\n    at Object.parseExprAtom (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10575:20)\\n    at Object.parseExprAtom (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4763:20)\\n    at Object.parseExprSubscripts (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10150:23)\\n    at Object.parseUpdate (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10130:21)\\n    at Object.parseMaybeUnary (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10119:17)\\n    at Object.parseExprOps (C:\\\\Users\\\\Justice V\\\\PycharmProjects\\\\Omni\\\\frontend\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9989:23)\");\n\n//# sourceURL=webpack:///./src/midpage-component.js?");

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