/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return model; });
let model = (function () {
    var todos = [];
    return {

        addTask: function (text) {
            todos = JSON.parse(localStorage.getItem("todos"));
            todos.push(text);
            localStorage.setItem("todos", JSON.stringify(todos));
        },

        removeTask: function (targetText) {
            todos = JSON.parse(localStorage.getItem("todos"));
            var targetNum = todos.indexOf(targetText);
            todos.splice(targetNum, 1);
            localStorage.setItem("todos", JSON.stringify(todos));
        },

        getTasks: function () {
            return JSON.parse(localStorage.getItem("todos"));
        }
    }
})()


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return view; });
let view = {

        showNewTask: function (text) {
            var li = document.createElement("li");
            li.innerHTML = "<span>" + text + "</span><i>X</i>";
            var list = document.getElementById("list");
            list.appendChild(li);
        },

        removeTask: function (target) {
            target.remove();
        },

        emptyInput: function () {
            document.getElementById("newTask").classList.add("empty");
            document.getElementById("labelNewTask").innerText = "Заполните текст инпута";
            document.getElementById("labelNewTask").style.color = "red";
            setTimeout(function () {
                document.getElementById("newTask").classList.remove("empty");
            }, 300);
            setTimeout(function () {
                document.getElementById("labelNewTask").innerText = "Предстоит сделать";
                document.getElementById("labelNewTask").style.color = "";
            }, 2000);
        }

}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return controller; });


let controller = {

        addTask: function () {
            var text = document.getElementById("newTask").value;
            if(text.match(/[A-zА-я0-9]/)){
                __WEBPACK_IMPORTED_MODULE_0__model_js__["a" /* model */].addTask(text);
                __WEBPACK_IMPORTED_MODULE_1__view__["a" /* view */].showNewTask(text);
            }else {
                __WEBPACK_IMPORTED_MODULE_1__view__["a" /* view */].emptyInput();
            }
        },

        removeTask: function (target) {
            var targetText = target.children[0].innerText;
            __WEBPACK_IMPORTED_MODULE_0__model_js__["a" /* model */].removeTask(targetText);
            __WEBPACK_IMPORTED_MODULE_1__view__["a" /* view */].removeTask(target);
        }

}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_js__ = __webpack_require__(0);




let app = (function(){

    function init() {
        event();
        main();
    }
    init();

    function main() {

    }

    function event() {
        var el = document.getElementById("btnNewTask");
        el.addEventListener("click", function(event){
            event.preventDefault();
            __WEBPACK_IMPORTED_MODULE_0__controller__["a" /* controller */].addTask();
        });

        var list = document.querySelector("ul");
        list.addEventListener("click", function (event) {
            var target = event.target;
            if (target.tagName != 'I') return;
            __WEBPACK_IMPORTED_MODULE_0__controller__["a" /* controller */].removeTask(target.parentNode);
        });

        window.onload = function(){
            var todos = __WEBPACK_IMPORTED_MODULE_2__model_js__["a" /* model */].getTasks();
            todos.forEach(function (li) {
                __WEBPACK_IMPORTED_MODULE_1__view__["a" /* view */].showNewTask(li);
            })

        };
    }

    return {}
})();





/***/ })
/******/ ]);