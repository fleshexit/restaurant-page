/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildAbout: () => (/* binding */ build)\n/* harmony export */ });\n\nfunction build(){\n    // render content\n    const content = document.getElementById('content');\n\n    const main = document.querySelector('main');\n\n    content.appendChild(main);\n    main.appendChild(hero);\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/foundations.js":
/*!****************************!*\
  !*** ./src/foundations.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildFoundations: () => (/* binding */ buildFoundations)\n/* harmony export */ });\n\nfunction buildFoundations(){\n\n    // render content\n    const content = document.getElementById('content');\n\n    // create header\n    const header = document.createElement('header');\n    header.classList.add('header');\n\n    // populate header\n    const items = [\"Home\", \"Menu\", \"About\",];\n    const ul = document.createElement('ul');\n    items.forEach(item => {\n        const li = document.createElement('li');\n        li.textContent = item;\n        ul.appendChild(li);\n    }); \n    header.appendChild(ul);\n    content.appendChild(header);\n\n    const main = document.createElement('main');\n    main.classList.add('main');\n    content.appendChild(main);\n\n    // create footer\n    const footer = document.createElement('footer');\n    footer.classList.add('footer');\n    footer.textContent = \"chrlie-w\";\n    content.appendChild(footer);\n    \n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/foundations.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildHome: () => (/* binding */ build)\n/* harmony export */ });\n\nfunction build(){\n    // render content\n    const content = document.getElementById('content');\n\n    const main = document.querySelector('main');\n\n    const hero = document.createElement('div');\n    hero.classList.add('hero');\n\n    const h1 = document.createElement('h1');\n    h1.textContent = 'Locust Palace';\n\n    const p = document.createElement('p');\n    p.textContent = 'Where Culinary Artistry, Timeless Traditions, and Unforgettable Flavors Converge to Create an Extraordinary Dining Experience';\n\n    //const button = createElement('button');\n    //button.textContent = 'View Menu';\n\n    content.appendChild(main);\n    main.appendChild(hero);\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _foundations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundations */ \"./src/foundations.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\n\n\n\nfunction clearContent(){\n    const content = document.getElementById('content');\n    while (content.firstChild) content.removeChild(content.firstChild);\n}\n\nfunction home(){\n    clearContent();\n    (0,_foundations__WEBPACK_IMPORTED_MODULE_1__.buildFoundations)();\n    (0,_home__WEBPACK_IMPORTED_MODULE_2__.buildHome)();\n}\n\nfunction menu(){\n    clearContent();\n    (0,_foundations__WEBPACK_IMPORTED_MODULE_1__.buildFoundations)();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_3__.buildMenu)();\n}\n\nfunction about(){\n    clearContent();\n    (0,_foundations__WEBPACK_IMPORTED_MODULE_1__.buildFoundations)();\n    (0,_about__WEBPACK_IMPORTED_MODULE_4__.buildAbout)();\n}\n\n(0,_foundations__WEBPACK_IMPORTED_MODULE_1__.buildFoundations)();\n(0,_home__WEBPACK_IMPORTED_MODULE_2__.buildHome)();\n\ndocument.addEventListener('click', (e) => {\n    if (e.target.textContent === 'Home') home();\n    if (e.target.textContent === 'Menu' || 'View Menu') menu();\n    if (e.target.textContent === 'About') about();\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildMenu: () => (/* binding */ build)\n/* harmony export */ });\n\nfunction build(){\n    // render content\n    const content = document.getElementById('content');\n\n    const main = document.querySelector('main');\n\n    content.appendChild(main);\n    main.appendChild(hero);\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;