/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!./styles.css":
/*!***********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles.css ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css\");\n// Imports\n;\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    background: linear-gradient(to bottom right, rgb(11, 146, 187),  rgb(202, 236, 246));\\r\\n    min-height: 100vh;\\r\\n}\\r\\n\\r\\nmain {\\r\\n    margin-bottom: 40px;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    text-align: center;\\r\\n    color: #4F5665;\\r\\n    font-family: 'Montserrat', Arial, sans-serif;\\r\\n}\\r\\n\\r\\nform {\\r\\n    max-width: 550px;\\r\\n    height: 170px;\\r\\n    padding: 29px 0;\\r\\n    margin: auto;\\r\\n    display: flex; \\r\\n    flex-direction: column;\\r\\n    justify-content: space-between; \\r\\n}\\r\\n\\r\\n#select-and-filter-wrapper {\\r\\n    margin: auto;\\r\\n    max-width: 550px;\\r\\n}\\r\\n\\r\\n#input {\\r\\n    width: 500px;\\r\\n    height: 29px;\\r\\n    padding: 10px;\\r\\n    border-radius: 15px;\\r\\n    border: 2px solid rgb(11, 146, 187);\\r\\n    display: block;\\r\\n    margin: auto;\\r\\n    outline: none;\\r\\n    box-shadow: 0 3px 8px 0 rgba(116, 115, 115, 0.35);\\r\\n    font-family: 'Montserrat', Arial, sans-serif;\\r\\n}\\r\\n\\r\\n#sort, #filter {\\r\\n    width: 250px;\\r\\n    height: 29px;\\r\\n    border-radius: 15px;\\r\\n    border: 2px solid rgb(11, 146, 187);\\r\\n    display: inline-block;\\r\\n    outline: none;\\r\\n    box-shadow: 0 3px 8px 0 rgba(116, 115, 115, 0.35);\\r\\n    font-family: 'Montserrat', Arial, sans-serif;\\r\\n}\\r\\n\\r\\n#input:focus, #sort:focus, #filter:focus {\\r\\n    background-color: rgb(202, 236, 246);\\r\\n    box-shadow: 0 5px 8px 0 rgba(93, 90, 90, 0.35)\\r\\n}\\r\\n\\r\\nselect {\\r\\n    color: #ac9c8b;\\r\\n}\\r\\n\\r\\n#button-wrapper {\\r\\n    padding: 13px 0;\\r\\n}\\r\\n\\r\\n#button {\\r\\n    width: 52px;\\r\\n    height: 52px;\\r\\n    border: 2px solid  rgb(11, 146, 187);\\r\\n    background-color: rgb(11, 146, 187);\\r\\n    border-radius: 50%;\\r\\n    color: white;\\r\\n    font-size: 38px;\\r\\n    justify-self: right;\\r\\n    display: block;\\r\\n    margin: auto;\\r\\n    outline: none;\\r\\n    cursor: pointer;\\r\\n    box-shadow: 0 5px 8px 0 rgba(93, 90, 90, 0.35);\\r\\n    font-family: 'Montserrat', Arial, sans-serif;\\r\\n}\\r\\n\\r\\n#button:hover {\\r\\n    background-color: white;\\r\\n    color:rgb(11, 146, 187);\\r\\n    box-shadow: 0 8px 8px 0 rgba(93, 90, 90, 0.35)\\r\\n}\\r\\n\\r\\n\\r\\n.container {\\r\\n    margin-top: 40px ;\\r\\n    max-width: 800px;\\r\\n    min-height: 400px;\\r\\n    background-color: rgb(253, 249, 243);\\r\\n    border: 2px solid rgb(110, 125, 129);\\r\\n    margin: auto;\\r\\n    border-radius: 15px;\\r\\n}\\r\\n\\r\\n.toDoList {\\r\\n    padding-top: 40px ;\\r\\n    width: 90%;\\r\\n    margin: auto;\\r\\n}\\r\\n\\r\\n#listOfTasks {\\r\\n    padding: 20px 0;\\r\\n    width: 550px;\\r\\n    margin: auto;\\r\\n}\\r\\n\\r\\n.styleOfTasks {\\r\\n    font-size: 25px;\\r\\n    color: rgb(29, 162, 202);\\r\\n    font-weight: 500;\\r\\n    padding: 34px 0;\\r\\n    text-align: center;\\r\\n    border-bottom: 2px dotted  rgb(11, 146, 187);\\r\\n    font-family: 'Montserrat', Arial, sans-serif;\\r\\n}\\r\\n\\r\\n.delete {\\r\\n    font-size: 20px;\\r\\n    color: rgb(190, 48, 48);\\r\\n    font-weight: 500;\\r\\n    margin-left: 15px;\\r\\n    padding: 3px;\\r\\n    border: 1px solid transparent;\\r\\n    font-family: 'Montserrat', Arial, sans-serif;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.delete:hover {\\r\\n    border: 1px solid rgb(190, 48, 48);\\r\\n}\\r\\n\\r\\n.date {\\r\\n    display: block;\\r\\n    text-align: center;\\r\\n    font-family: 'Montserrat', Arial, sans-serif;\\r\\n    color: rgb(100, 97, 97);\\r\\n    font-size: 15px;\\r\\n    padding-top: 10px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"../node_modules/css-loader/dist/cjs.js!./styles.css\");\n;\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./styles.css?");

/***/ }),

/***/ "./classToDoList.js":
/*!**************************!*\
  !*** ./classToDoList.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ToDoList\n/* harmony export */ });\nclass ToDoList {\r\n    constructor(htmlElem) {\r\n        this.htmlElem = htmlElem;\r\n        this.model = JSON.parse(localStorage.getItem(\"model\")) || [];\r\n    };\r\n  \r\n    addTask(value) {\r\n        const task = {\r\n        value,\r\n        createdAt: {\r\n          value: +new Date(), \r\n          label: new Date(),\r\n        } \r\n    };\r\n        this.model.push(task); // добавляем элемент (объект) в массив\r\n        localStorage.setItem(\"model\", JSON.stringify(this.model)); // обновляем localStorage\r\n    };\r\n  \r\n    render(data = this.model) { // отрисовываем в верстке актуальный массив объектов\r\n  \r\n        this.htmlElem.innerHTML = '';\r\n        \r\n        for(let i = 0; i < data.length; i++) {\r\n        \r\n        const toDo = document.createElement('p');\r\n        const deleteButton = document.createElement('span');\r\n        const toDoDate = document.createElement('span');\r\n        \r\n        toDo.innerText = data[i].value;\r\n        toDoDate.innerText = 'Added on: ' + data[i].createdAt.label;\r\n        deleteButton.innerText = 'X';\r\n        deleteButton.setAttribute('data-num', i); //присваиваем аттрибут data-num, равный порядковому номеру элемента массива\r\n      \r\n        this.htmlElem.append(toDo); //добавляем Задание (<p>), кнопку Delete и Дату в верстку\r\n        toDo.append(deleteButton);\r\n        toDo.append(toDoDate); \r\n    \r\n        toDo.className = 'styleOfTasks';\r\n        deleteButton.className = 'delete';\r\n        toDoDate.className = 'date';\r\n      } \r\n    };\r\n  };\r\n\r\n  \n\n//# sourceURL=webpack:///./classToDoList.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_classToDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/classToDoList */ \"./classToDoList.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./styles.css\");\n;\r\n\r\n\r\n\r\nconst button = document.getElementById('button');\r\nconst input = document.getElementById('input');\r\nconst listOfTasks = document.getElementById('listOfTasks');\r\nconst select = document.getElementById('sort'); \r\nconst filter = document.getElementById('filter'); \r\n\r\n\r\nconst toDoList = new _src_classToDoList__WEBPACK_IMPORTED_MODULE_0__.default(listOfTasks);\r\n\r\nconst handleClick = () => {\r\n  if(input.value !== '') {\r\n      const { value } = input;\r\n      toDoList.addTask(value);\r\n      toDoList.render(toDoList.model);\r\n    } \r\n    else return;   \r\n};\r\n\r\nconst handleDelete = (e) => { // удаление задания\r\n    if(e.target.className === 'delete') {\r\n        if(confirm('Вы уверены?')) {\r\n            toDoList.model.splice(e.target.dataset.num, 1); // удаляем из массива по порядковому номеру соответствующий элемент\r\n            localStorage.setItem(\"model\", JSON.stringify(toDoList.model)); // обновляем localStorage\r\n            toDoList.render(toDoList.model); // отрисовываем актуальный массив в врестке\r\n        }       \r\n}};\r\n\r\nconst sortBy = (e) => { // сортируем задания по имени и дате создания\r\n    switch (e.target.value) {\r\n      case \"name\":\r\n      toDoList.model.sort((a, b) => {\r\n          if (a > b) {\r\n            return 1;\r\n          } else if (a.value < b.value) {\r\n            return -1;\r\n          } else return 0;\r\n        });\r\n        break;\r\n      case \"date\":\r\n      toDoList.model.sort((a, b) => {\r\n          if (+a.createdAt.value < +b.createdAt.value) {\r\n            return 1;\r\n          } else if (+a.createdAt.value > +b.createdAt.value) {\r\n            return -1;\r\n          } else return 0;\r\n        });\r\n        break;\r\n    }\r\n    toDoList.render(toDoList.model);\r\n  };\r\n\r\n  const getFiltredTasks = (e) => { // поиск по названию задания\r\n    const { value: inputValue} = e.target;\r\n\r\n    const filtredModel = toDoList.model.filter(\r\n        function(item, i, arr) {\r\n            return item.value.includes(inputValue);\r\n        }   \r\n    );\r\n    toDoList.render(filtredModel);\r\n};\r\n\r\nbutton.addEventListener('click', handleClick);\r\nlistOfTasks.addEventListener('click', handleDelete);\r\nselect.addEventListener('change', sortBy);\r\nfilter.addEventListener('input', getFiltredTasks);\r\n\r\ntoDoList.render(toDoList.model);\r\nconsole.log(toDoList.model)\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./index.js","vendors-node_modules_css-loader_dist_cjs_js_node_modules_normalize_css_normalize_css-node_mod-ff5480"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;