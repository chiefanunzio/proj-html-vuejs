/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

function initVue() {
  new Vue({
    el: '#app',
    'data': {
      navOption: ['HOME', 'ABOUT', 'PRICES', 'COURSES', 'LOCATIONS', 'BLOG']
    }
  });
}

function init() {
  initVue();
}

document.addEventListener('DOMContentLoaded', init);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined variable.\n    ╷\n536 │                     color: $color-hover-link;\r\n    │                            ^^^^^^^^^^^^^^^^^\n    ╵\n  src\\partials\\_homepage.scss 536:28  @import\n  src\\style.scss 1:9                  root stylesheet\n    at processResult (C:\\esercizi-node\\proj-html-vuejs\\node_modules\\webpack\\lib\\NormalModule.js:676:19)\n    at C:\\esercizi-node\\proj-html-vuejs\\node_modules\\webpack\\lib\\NormalModule.js:778:5\n    at C:\\esercizi-node\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at C:\\esercizi-node\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (C:\\esercizi-node\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at C:\\esercizi-node\\proj-html-vuejs\\node_modules\\sass-loader\\dist\\index.js:54:7\n    at Function.call$2 (C:\\esercizi-node\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:92571:16)\n    at _render_closure1.call$2 (C:\\esercizi-node\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:81074:12)\n    at _RootZone.runBinary$3$3 (C:\\esercizi-node\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:27256:18)\n    at _FutureListener.handleError$1 (C:\\esercizi-node\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:25812:19)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/style.scss"]();
/******/ 	
/******/ })()
;