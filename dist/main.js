/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --main-colour: #0f2f47;
    --bg-colour: #7e878f;
    --confirm: rgba(0, 144, 0, 0.4);
    --reject: rgba(255, 0, 0, 0.4);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", system-ui;
}

body {
    display: flex;
    width: 100%;
    height: 100vh;
}

/* -------------------------------------- Sidebar -------------------------------------------*/

.menu {
    background-color: var(--main-colour);
    flex: 1;
    min-width: 360px;
    padding: 28px;
}

h1 {
    color: white;
    font-size: 4rem;
    text-align: center;
}

.project-header {
    padding: 0 20px;
}

/* Project Default */
.project-default, .project-add {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.project-default h2 {
    font-size: 1.1rem;
    color: white;
}

.project-default button {
    padding: 0px 24px;
}

.project-default input {
    width: 100%;
    padding: 4px;
}

.project-add {
    display: flex;
    gap: 8px;
}

.project-add input {
    width: 100%;
    font-size: 1.1rem;
}

.project-add button {
    padding: 0px 16px;
}

.project-default.hidden {
    display: none
}

.project-add.hidden {
    display: none;
}

.menu hr {
    margin: 4px auto 12px auto;
    width: 88%;
}

.project-container {
    margin: 0 auto;
    width: 95%;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.project {
    border-radius: 12px;
    padding: 4px 12px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.project-select {
    position: absolute;
    border: 1px solid red;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 12px;
    opacity: 0;
}

.project-select:hover {
    cursor: pointer;
}

.project h3 {
    font-size: 0.9rem;
}

.project .add-project {
    padding: 4px 12px;
    border: 1px solid grey;
    border-radius: 8px;
    color: grey;
    z-index: 1;
}

.project .add-project:hover {
    cursor: pointer;
    border: 1px solid black;
    color: black;
}


/* ----------------------------------- Content Window -----------------------------------*/ 

.content {
    background-color: var(--bg-colour);
    flex: 5;
}

.content .add-todo {
    display: block;
    margin: 28px auto;
    padding: 12px 24px;
}

.content h2 {
    font-size: 3em;
    text-align: center;
    margin: 28px 0px;
}

.todo-container {
    margin: 0 auto;
    max-width: 740px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.todo {
    width: 100%;
    min-height: 64px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    background-color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
}

.todo-selector {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    opacity: 0;
    background-color: black;
}

.todo-selector:hover {
    cursor: pointer;
    opacity: 0.2;
}

.todo .check {
    align-self: center;
    background-color: var(--bg-colour);
    margin: 0 24px;
    padding: 8px 8px;
    border-radius: 4px;
    z-index: 1;
}

.todo .check:hover {
    cursor: pointer;
    background-color: var(--confirm);
}

.todo .todo-content {
    flex: 10;   
}

.todo-content h3 {
    font-size: 1.5rem;
}

.todo-content p {
    font-size: 0.9rem;
}

.todo .delete {
    padding: 16px 8px;
    font-size: 1.2rem;
    background-color: transparent;
    border: none;
    flex: 1;
    z-index: 1;
    position: relative;
}

.todo .delete:hover {
    cursor: pointer;
    color: var(--reject);
    transform: scale(1.2);
}

.delete p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
}

.todo.complete{
    opacity: 0.3;
}

/* ------------------------- Form -------------------------- */
.form-container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
    display: none;
}

.form-container.active {
    display: inline;
}

.form-container form {
    position: absolute;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    min-width: 600px;
    max-width: 800px;
    height: 80%;
    border-radius: 24px;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
}

.form-element,
.window-element {
    width: 100%;
}

.form-element label {
    display: block;
    font-weight: bold;
}

#description,
#notes {
    padding: 24px;
}

#title {
    width: 100%;
    border: none;
    font-size: 2rem;
}

#description {
    width: 100%;
    min-height: 200px;
    border: 2px solid black;
    border-radius: 24px;
}

#date {
    padding: 4px;
}

#notes {
    width: 100%;
    border: 2px solid black;
    border-radius: 24px;
}

.form-buttons {
    display: flex;
    justify-content: center;
    gap: 24px;
}

.cancel,
.submit {
    width: 128px;
    padding: 12px;
    border-radius: 12px;
}

.cancel:hover {
    cursor: pointer;
    background-color: var(--reject);
}

.submit:hover { 
    cursor: pointer;
    background-color: var(--confirm);
}


/* ------------------------- Todo -------------------------- */
.todo-expanded {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
}

.todo-expanded.hidden {
    display: none;
}

.todo-expanded-close {
    position: absolute;
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
}

.todo-expanded-close:hover{
    cursor: pointer;
}

.window {
    position: relative;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    min-width: 600px;
    max-width: 800px;
    height: 80%;
    border-radius: 24px;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 3;
}

.window-section {
    width: 100%;
}

.window-section h2 {
    font-size: 2rem;
}

.window-section h3 {
    font-size: 1rem;
    font-weight: bold;
}

.window-section:nth-child(1) {
    display: flex;
    justify-content: space-between;
}

.window-close {
    padding: 0px 12px;
    font-size: 1.8rem;
    border: none;
}

.window-close:hover {
    color: var(--confirm);
}

.window-description-border {
    width: 100%;
    min-height: 200px;
    border: 2px solid black;
    border-radius: 24px;
    padding: 24px;
}

.window-due-text {
    padding-left: 24px;
}

.window-notes-border {
    width: 100%;
    border: 2px solid black;
    border-radius: 24px;
    padding: 24px;
    min-height: 120px;
}

.window-buttons {
    display: flex;
    justify-content: center;
    gap: 24px;
}

.edit,
.remove {
    width: 128px;
    padding: 12px;
    border-radius: 12px;
}

.edit:hover {
    cursor: pointer;
    background-color: var(--confirm);
}

.remove:hover {
    cursor: pointer;
    background-color: var(--reject);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --main-colour: #0f2f47;\r\n    --bg-colour: #7e878f;\r\n    --confirm: rgba(0, 144, 0, 0.4);\r\n    --reject: rgba(255, 0, 0, 0.4);\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"Poppins\", system-ui;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n/* -------------------------------------- Sidebar -------------------------------------------*/\r\n\r\n.menu {\r\n    background-color: var(--main-colour);\r\n    flex: 1;\r\n    min-width: 360px;\r\n    padding: 28px;\r\n}\r\n\r\nh1 {\r\n    color: white;\r\n    font-size: 4rem;\r\n    text-align: center;\r\n}\r\n\r\n.project-header {\r\n    padding: 0 20px;\r\n}\r\n\r\n/* Project Default */\r\n.project-default, .project-add {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.project-default h2 {\r\n    font-size: 1.1rem;\r\n    color: white;\r\n}\r\n\r\n.project-default button {\r\n    padding: 0px 24px;\r\n}\r\n\r\n.project-default input {\r\n    width: 100%;\r\n    padding: 4px;\r\n}\r\n\r\n.project-add {\r\n    display: flex;\r\n    gap: 8px;\r\n}\r\n\r\n.project-add input {\r\n    width: 100%;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.project-add button {\r\n    padding: 0px 16px;\r\n}\r\n\r\n.project-default.hidden {\r\n    display: none\r\n}\r\n\r\n.project-add.hidden {\r\n    display: none;\r\n}\r\n\r\n.menu hr {\r\n    margin: 4px auto 12px auto;\r\n    width: 88%;\r\n}\r\n\r\n.project-container {\r\n    margin: 0 auto;\r\n    width: 95%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 4px;\r\n}\r\n\r\n.project {\r\n    border-radius: 12px;\r\n    padding: 4px 12px;\r\n    background-color: white;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.project-select {\r\n    position: absolute;\r\n    border: 1px solid red;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 12px;\r\n    opacity: 0;\r\n}\r\n\r\n.project-select:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.project h3 {\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.project .add-project {\r\n    padding: 4px 12px;\r\n    border: 1px solid grey;\r\n    border-radius: 8px;\r\n    color: grey;\r\n    z-index: 1;\r\n}\r\n\r\n.project .add-project:hover {\r\n    cursor: pointer;\r\n    border: 1px solid black;\r\n    color: black;\r\n}\r\n\r\n\r\n/* ----------------------------------- Content Window -----------------------------------*/ \r\n\r\n.content {\r\n    background-color: var(--bg-colour);\r\n    flex: 5;\r\n}\r\n\r\n.content .add-todo {\r\n    display: block;\r\n    margin: 28px auto;\r\n    padding: 12px 24px;\r\n}\r\n\r\n.content h2 {\r\n    font-size: 3em;\r\n    text-align: center;\r\n    margin: 28px 0px;\r\n}\r\n\r\n.todo-container {\r\n    margin: 0 auto;\r\n    max-width: 740px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 8px;\r\n}\r\n\r\n.todo {\r\n    width: 100%;\r\n    min-height: 64px;\r\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);\r\n    background-color: white;\r\n    border-radius: 12px;\r\n    display: flex;\r\n    align-items: center;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.todo-selector {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 12px;\r\n    opacity: 0;\r\n    background-color: black;\r\n}\r\n\r\n.todo-selector:hover {\r\n    cursor: pointer;\r\n    opacity: 0.2;\r\n}\r\n\r\n.todo .check {\r\n    align-self: center;\r\n    background-color: var(--bg-colour);\r\n    margin: 0 24px;\r\n    padding: 8px 8px;\r\n    border-radius: 4px;\r\n    z-index: 1;\r\n}\r\n\r\n.todo .check:hover {\r\n    cursor: pointer;\r\n    background-color: var(--confirm);\r\n}\r\n\r\n.todo .todo-content {\r\n    flex: 10;   \r\n}\r\n\r\n.todo-content h3 {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.todo-content p {\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.todo .delete {\r\n    padding: 16px 8px;\r\n    font-size: 1.2rem;\r\n    background-color: transparent;\r\n    border: none;\r\n    flex: 1;\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n\r\n.todo .delete:hover {\r\n    cursor: pointer;\r\n    color: var(--reject);\r\n    transform: scale(1.2);\r\n}\r\n\r\n.delete p {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.todo.complete{\r\n    opacity: 0.3;\r\n}\r\n\r\n/* ------------------------- Form -------------------------- */\r\n.form-container {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    z-index: 2;\r\n    display: none;\r\n}\r\n\r\n.form-container.active {\r\n    display: inline;\r\n}\r\n\r\n.form-container form {\r\n    position: absolute;\r\n    background-color: white;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 50%;\r\n    min-width: 600px;\r\n    max-width: 800px;\r\n    height: 80%;\r\n    border-radius: 24px;\r\n    padding: 48px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    z-index: 1;\r\n}\r\n\r\n.form-element,\r\n.window-element {\r\n    width: 100%;\r\n}\r\n\r\n.form-element label {\r\n    display: block;\r\n    font-weight: bold;\r\n}\r\n\r\n#description,\r\n#notes {\r\n    padding: 24px;\r\n}\r\n\r\n#title {\r\n    width: 100%;\r\n    border: none;\r\n    font-size: 2rem;\r\n}\r\n\r\n#description {\r\n    width: 100%;\r\n    min-height: 200px;\r\n    border: 2px solid black;\r\n    border-radius: 24px;\r\n}\r\n\r\n#date {\r\n    padding: 4px;\r\n}\r\n\r\n#notes {\r\n    width: 100%;\r\n    border: 2px solid black;\r\n    border-radius: 24px;\r\n}\r\n\r\n.form-buttons {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 24px;\r\n}\r\n\r\n.cancel,\r\n.submit {\r\n    width: 128px;\r\n    padding: 12px;\r\n    border-radius: 12px;\r\n}\r\n\r\n.cancel:hover {\r\n    cursor: pointer;\r\n    background-color: var(--reject);\r\n}\r\n\r\n.submit:hover { \r\n    cursor: pointer;\r\n    background-color: var(--confirm);\r\n}\r\n\r\n\r\n/* ------------------------- Todo -------------------------- */\r\n.todo-expanded {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    z-index: 2;\r\n}\r\n\r\n.todo-expanded.hidden {\r\n    display: none;\r\n}\r\n\r\n.todo-expanded-close {\r\n    position: absolute;\r\n    background-color: transparent;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n}\r\n\r\n.todo-expanded-close:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.window {\r\n    position: relative;\r\n    background-color: white;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 50%;\r\n    min-width: 600px;\r\n    max-width: 800px;\r\n    height: 80%;\r\n    border-radius: 24px;\r\n    padding: 48px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    z-index: 3;\r\n}\r\n\r\n.window-section {\r\n    width: 100%;\r\n}\r\n\r\n.window-section h2 {\r\n    font-size: 2rem;\r\n}\r\n\r\n.window-section h3 {\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.window-section:nth-child(1) {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.window-close {\r\n    padding: 0px 12px;\r\n    font-size: 1.8rem;\r\n    border: none;\r\n}\r\n\r\n.window-close:hover {\r\n    color: var(--confirm);\r\n}\r\n\r\n.window-description-border {\r\n    width: 100%;\r\n    min-height: 200px;\r\n    border: 2px solid black;\r\n    border-radius: 24px;\r\n    padding: 24px;\r\n}\r\n\r\n.window-due-text {\r\n    padding-left: 24px;\r\n}\r\n\r\n.window-notes-border {\r\n    width: 100%;\r\n    border: 2px solid black;\r\n    border-radius: 24px;\r\n    padding: 24px;\r\n    min-height: 120px;\r\n}\r\n\r\n.window-buttons {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 24px;\r\n}\r\n\r\n.edit,\r\n.remove {\r\n    width: 128px;\r\n    padding: 12px;\r\n    border-radius: 12px;\r\n}\r\n\r\n.edit:hover {\r\n    cursor: pointer;\r\n    background-color: var(--confirm);\r\n}\r\n\r\n.remove:hover {\r\n    cursor: pointer;\r\n    background-color: var(--reject);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadData: () => (/* binding */ loadData),
/* harmony export */   saveData: () => (/* binding */ saveData)
/* harmony export */ });
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder */ "./src/scripts/folder.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/scripts/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/scripts/todo.js");




function saveData (folder) {
    const stringified = JSON.stringify(folder);
    localStorage.setItem("data", stringified);
}

function loadData () {
    const stringified = localStorage.getItem("data");
    if (stringified === undefined) {
        return;
    } else {
        const serialised = JSON.parse(stringified);
    }

    for (let index in serialised) {
        const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(serialised[index].title);
        const array = serialised[index].project;

        for (let todo in array) {
            const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_2__.Todo(
                array[todo].name,
                array[todo].description,
                array[todo].dueDate,
                array[todo].notes
            )

            newProject.addTodo(newTodo);
        }

        (0,_folder__WEBPACK_IMPORTED_MODULE_0__.addToFolder)(newProject);
    }
}



/***/ }),

/***/ "./src/scripts/folder.js":
/*!*******************************!*\
  !*** ./src/scripts/folder.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToFolder: () => (/* binding */ addToFolder),
/* harmony export */   getFolder: () => (/* binding */ getFolder),
/* harmony export */   getSelectedProject: () => (/* binding */ getSelectedProject),
/* harmony export */   getSelectedProjectIndex: () => (/* binding */ getSelectedProjectIndex),
/* harmony export */   removeFromFolder: () => (/* binding */ removeFromFolder),
/* harmony export */   selectedProject: () => (/* binding */ selectedProject),
/* harmony export */   setSelectedProject: () => (/* binding */ setSelectedProject)
/* harmony export */ });
const folder = [];
let selectedProject = 0;

function getSelectedProject () {
    return folder[selectedProject];
}

function getSelectedProjectIndex() {
    return selectedProject;
}

function setSelectedProject (index) {
    selectedProject = index;
}

function addToFolder(project) {
    folder.push(project);
}

function getFolder() {
    return folder;
}

function removeFromFolder(project) {
    folder.splice(project, 1);
}

/***/ }),

/***/ "./src/scripts/project.js":
/*!********************************!*\
  !*** ./src/scripts/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
function Project (title) {
    this.title = title;

    this.project = [];

    this.setTitle = (title) => {
        this.title = title;
    }

    this.addTodo = (todo) => {
        this.project.push(todo);
    }

    this.removeTodo = (index) => {
        this.project.splice(index, 1);
    }
}

/***/ }),

/***/ "./src/scripts/render.js":
/*!*******************************!*\
  !*** ./src/scripts/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderProjects: () => (/* binding */ renderProjects),
/* harmony export */   renderTodo: () => (/* binding */ renderTodo)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/scripts/data.js");
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./folder */ "./src/scripts/folder.js");



const projectContainer = document.querySelector(".project-container");
const todoContainer = document.querySelector('.todo-container');
const contentHeader = document.querySelector(".content-header");



function renderProjects() {
    const folder = (0,_folder__WEBPACK_IMPORTED_MODULE_1__.getFolder)();
    resetContainer(projectContainer);
    contentHeader.innerText = folder[_folder__WEBPACK_IMPORTED_MODULE_1__.selectedProject].title;

    for (let item in folder) {
        // Create Elements
        const project = document.createElement("div");
        const selector = document.createElement("button");
        const title = document.createElement("h3");
        const deleteButton = document.createElement("button");

        // Add Classes
        project.classList.add("project");
        selector.classList.add("project-select");
        deleteButton.classList.add("add-project");

        // Fill Elements
        title.innerText = folder[item].title;
        deleteButton.innerText = "x";

        // Append Elements 
        project.appendChild(selector);
        project.appendChild(title);
        project.appendChild(deleteButton);

        projectContainer.appendChild(project);

        selector.addEventListener("click", () => {
            renderTodo(folder[item]);
            (0,_folder__WEBPACK_IMPORTED_MODULE_1__.setSelectedProject)(item);
            contentHeader.innerText = folder[item].title;
        })

        deleteButton.addEventListener("click", () => {
            if ((0,_folder__WEBPACK_IMPORTED_MODULE_1__.getFolder)().length > 1) {
                (0,_folder__WEBPACK_IMPORTED_MODULE_1__.removeFromFolder)(item);
                
                (0,_folder__WEBPACK_IMPORTED_MODULE_1__.setSelectedProject)((0,_folder__WEBPACK_IMPORTED_MODULE_1__.getSelectedProjectIndex)() - 1);
                console.log((0,_folder__WEBPACK_IMPORTED_MODULE_1__.getFolder)().length);
                console.log((0,_folder__WEBPACK_IMPORTED_MODULE_1__.getSelectedProjectIndex)());

                renderProjects();
                renderTodo((0,_folder__WEBPACK_IMPORTED_MODULE_1__.getSelectedProject)());

            } else {
                alert("Must have at least one folder");
            }
        })
    }
}

function renderTodo(project) {
    resetContainer(todoContainer);
    
    for (let item in project.project) {
        // Create Elements
        const todo = document.createElement('div');
        const selector = document.createElement('button');
        const check = document.createElement('button');
        const content = document.createElement('div');
        const title = document.createElement('h3');
        const due = document.createElement('p');
        const deleteButton = document.createElement('button');
        const deleteButtonText = document.createElement('p');


        // Add classes
        todo.classList.add('todo');
        selector.classList.add('todo-selector');
        check.classList.add('check');
        content.classList.add('todo-content');
        deleteButton.classList.add('delete');

        // Fill elements
        title.innerText = project.project[item].name;
        due.innerText = project.project[item].dueDate;
        deleteButtonText.innerText = "x";

        // Append elements
        todo.appendChild(selector);
        todo.appendChild(check);
        todo.appendChild(content);
        content.appendChild(title);
        content.appendChild(due);
        todo.appendChild(deleteButton);
        deleteButton.appendChild(deleteButtonText);
        todoContainer.appendChild(todo);


        selector.addEventListener("click", () => {
            renderTodoItem(project, project.project[item], item);
            // console.log(project.project[item]);
        })
        
        // The illusion of choice
        check.addEventListener("click", () => {
            project.removeTodo(item);
            renderTodo(project);
            (0,_data__WEBPACK_IMPORTED_MODULE_0__.saveData)((0,_folder__WEBPACK_IMPORTED_MODULE_1__.getFolder)());
        })

        deleteButton.addEventListener("click", () => {
            project.removeTodo(item);
            renderTodo(project);
            (0,_data__WEBPACK_IMPORTED_MODULE_0__.saveData)((0,_folder__WEBPACK_IMPORTED_MODULE_1__.getFolder)());
        })
    }
}

function renderTodoItem (project, todo, index) {
    const todoExpanded = document.querySelector(".todo-expanded");
    const todoExpandedClose = document.querySelector(".todo-expanded-close");
    const title = document.querySelector(".window-title");
    const windowClose = document.querySelector(".window-close");
    const description = document.querySelector(".window-description-text");
    const due = document.querySelector(".window-due-text");
    const notes = document.querySelector(".window-notes-text");
    const edit = document.querySelector(".edit");
    const remove = document.querySelector(".remove");

    todoExpanded.classList.remove("hidden");

    // Fill Elements
    title.innerText = todo.name;
    description.innerText = todo.description;
    due.innerText = todo.dueDate;
    notes.innerText = todo.notes;

    // Button functions

    // I honestly have no idea why this doesn't work properly.....
    remove.addEventListener("click", () => {
        project.removeTodo(index);
        renderTodo(project);
        resetElements();
    })

    windowClose.addEventListener("click", () => {
        resetElements();
    })

    todoExpandedClose.addEventListener("click", () => {
        resetElements();
    })

    edit.addEventListener("click", () => {
        alert("I didn't implement this.");
        resetElements();
    })

    function resetElements() {
        title.innerText = "";
        description.innerText = "";
        due.innerText = "";
        notes.innerText = "";
        todoExpanded.classList.add("hidden");
    }
}

function resetContainer (container) {
    container.innerHTML = "";
}

/***/ }),

/***/ "./src/scripts/todo.js":
/*!*****************************!*\
  !*** ./src/scripts/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
function Todo (name, description, dueDate, notes) {
    this.name = name;
    this.description = description; 
    this.dueDate = dueDate;
    this.notes = notes;
}


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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/data */ "./src/scripts/data.js");
/* harmony import */ var _scripts_folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/folder */ "./src/scripts/folder.js");
/* harmony import */ var _scripts_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/project */ "./src/scripts/project.js");
/* harmony import */ var _scripts_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/render */ "./src/scripts/render.js");
/* harmony import */ var _scripts_todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/todo */ "./src/scripts/todo.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







let projects = (0,_scripts_folder__WEBPACK_IMPORTED_MODULE_1__.getFolder)();

//Side Bar
const addProject = document.querySelector(".add-project");
const createProject = document.querySelector(".create");
const projectDefault = document.querySelector(".project-default");
const projectAdd = document.querySelector(".project-add");
const projectName = document.querySelector("#project-name");

// Form
const formContainer = document.querySelector(".form-container");
const form = document.querySelector(".form");
const addTodoButton = document.querySelector('.add-todo');
const cancelButton = document.querySelector('.cancel');
const submitButton = document.querySelector(".submit");



    
(function pageLoad () {
    (0,_scripts_data__WEBPACK_IMPORTED_MODULE_0__.loadData)();
    if ((0,_scripts_folder__WEBPACK_IMPORTED_MODULE_1__.getFolder)().length <= 0) {
        const defaultProject = new _scripts_project__WEBPACK_IMPORTED_MODULE_2__.Project("Home");
        (0,_scripts_folder__WEBPACK_IMPORTED_MODULE_1__.addToFolder)(defaultProject);
    }
    update();
})();




// Event Listeners 
addProject.addEventListener("click", () => {
    projectDefault.classList.add("hidden");
    projectAdd.classList.remove("hidden");
})


// Create Project 
createProject.addEventListener("click", () => {
    projectDefault.classList.remove("hidden");
    projectAdd.classList.add("hidden");

    const newProject = new _scripts_project__WEBPACK_IMPORTED_MODULE_2__.Project(projectName.value);
    projectName.value = ""

    if (newProject.title === "") {
        newProject.setTitle("Unnamed Project");
    }

    (0,_scripts_folder__WEBPACK_IMPORTED_MODULE_1__.addToFolder)(newProject);
    update();
})

addTodoButton.addEventListener("click", () => {
    formContainer.classList.add("active");
})

cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    form.reset();
    formContainer.classList.remove("active");
})


// Create Todo

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector('#date').value;
    const notes = document.querySelector('#notes').value;

    const todo = new _scripts_todo__WEBPACK_IMPORTED_MODULE_4__.Todo(title, description, date, notes);
    (0,_scripts_folder__WEBPACK_IMPORTED_MODULE_1__.getSelectedProject)().addTodo(todo);

    form.reset();
    formContainer.classList.remove("active");

    // renderTodo(getSelectedProject());
    update();
})

function update() {
    ;(0,_scripts_render__WEBPACK_IMPORTED_MODULE_3__.renderProjects)();
    (0,_scripts_render__WEBPACK_IMPORTED_MODULE_3__.renderTodo)((0,_scripts_folder__WEBPACK_IMPORTED_MODULE_1__.getSelectedProject)());
    (0,_scripts_data__WEBPACK_IMPORTED_MODULE_0__.saveData)((0,_scripts_folder__WEBPACK_IMPORTED_MODULE_1__.getFolder)());
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxRQUFRLGFBQWEsTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFB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QUFDN0M7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtDQUFRLENBQUMsa0RBQVM7QUFDOUIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrQ0FBUSxDQUFDLGtEQUFTO0FBQzlCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM0tPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ0xBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBb0Q7QUFDMEI7QUFDbEM7QUFDa0I7QUFDeEI7QUFDakI7QUFDckI7QUFDQSxlQUFlLDBEQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBUTtBQUNaLFFBQVEsMERBQVM7QUFDakIsbUNBQW1DLHFEQUFPO0FBQzFDLFFBQVEsNERBQVc7QUFDbkI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFEQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQVc7QUFDZjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtDQUFJO0FBQ3pCLElBQUksbUVBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSxnRUFBYztBQUNsQixJQUFJLDJEQUFVLENBQUMsbUVBQWtCO0FBQ2pDLElBQUksdURBQVEsQ0FBQywwREFBUztBQUN0QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL3NyYy9zY3JpcHRzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vc3JjL3NjcmlwdHMvZm9sZGVyLmpzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL3NyYy9zY3JpcHRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vc3JjL3NjcmlwdHMvcmVuZGVyLmpzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC8uL3NyYy9zY3JpcHRzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9nMWRvLXVwZGF0ZWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2cxZG8tdXBkYXRlZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2cxZG8tdXBkYXRlZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZzFkby11cGRhdGVkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAtLW1haW4tY29sb3VyOiAjMGYyZjQ3O1xyXG4gICAgLS1iZy1jb2xvdXI6ICM3ZTg3OGY7XHJcbiAgICAtLWNvbmZpcm06IHJnYmEoMCwgMTQ0LCAwLCAwLjQpO1xyXG4gICAgLS1yZWplY3Q6IHJnYmEoMjU1LCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzeXN0ZW0tdWk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU2lkZWJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5tZW51IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3VyKTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtaW4td2lkdGg6IDM2MHB4O1xyXG4gICAgcGFkZGluZzogMjhweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvamVjdC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4vKiBQcm9qZWN0IERlZmF1bHQgKi9cclxuLnByb2plY3QtZGVmYXVsdCwgLnByb2plY3QtYWRkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnByb2plY3QtZGVmYXVsdCBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnByb2plY3QtZGVmYXVsdCBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMHB4IDI0cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWRlZmF1bHQgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWFkZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWFkZCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1hZGQgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDBweCAxNnB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1kZWZhdWx0LmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn1cclxuXHJcbi5wcm9qZWN0LWFkZC5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1lbnUgaHIge1xyXG4gICAgbWFyZ2luOiA0cHggYXV0byAxMnB4IGF1dG87XHJcbiAgICB3aWR0aDogODglO1xyXG59XHJcblxyXG4ucHJvamVjdC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDRweDtcclxufVxyXG5cclxuLnByb2plY3Qge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2plY3Qtc2VsZWN0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ucHJvamVjdC1zZWxlY3Q6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJvamVjdCBoMyB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLnByb2plY3QgLmFkZC1wcm9qZWN0IHtcclxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnByb2plY3QgLmFkZC1wcm9qZWN0OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ29udGVudCBXaW5kb3cgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qLyBcclxuXHJcbi5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG91cik7XHJcbiAgICBmbGV4OiA1O1xyXG59XHJcblxyXG4uY29udGVudCAuYWRkLXRvZG8ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDI4cHggYXV0bztcclxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxufVxyXG5cclxuLmNvbnRlbnQgaDIge1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDI4cHggMHB4O1xyXG59XHJcblxyXG4udG9kby1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDc0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDhweDtcclxufVxyXG5cclxuLnRvZG8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA2NHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udG9kby1zZWxlY3RvciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50b2RvLXNlbGVjdG9yOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxufVxyXG5cclxuLnRvZG8gLmNoZWNrIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG91cik7XHJcbiAgICBtYXJnaW46IDAgMjRweDtcclxuICAgIHBhZGRpbmc6IDhweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4udG9kbyAuY2hlY2s6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29uZmlybSk7XHJcbn1cclxuXHJcbi50b2RvIC50b2RvLWNvbnRlbnQge1xyXG4gICAgZmxleDogMTA7ICAgXHJcbn1cclxuXHJcbi50b2RvLWNvbnRlbnQgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi50b2RvLWNvbnRlbnQgcCB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLnRvZG8gLmRlbGV0ZSB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRvZG8gLmRlbGV0ZTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tcmVqZWN0KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG5cclxuLmRlbGV0ZSBwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnRvZG8uY29tcGxldGV7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRm9ybSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uZm9ybS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1pbi13aWR0aDogNjAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgcGFkZGluZzogNDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmZvcm0tZWxlbWVudCxcclxuLndpbmRvdy1lbGVtZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1lbGVtZW50IGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNkZXNjcmlwdGlvbixcclxuI25vdGVzIHtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuI2Rlc2NyaXB0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbn1cclxuXHJcbiNkYXRlIHtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxuI25vdGVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG59XHJcblxyXG4uZm9ybS1idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMjRweDtcclxufVxyXG5cclxuLmNhbmNlbCxcclxuLnN1Ym1pdCB7XHJcbiAgICB3aWR0aDogMTI4cHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLmNhbmNlbDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWplY3QpO1xyXG59XHJcblxyXG4uc3VibWl0OmhvdmVyIHsgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb25maXJtKTtcclxufVxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVG9kbyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4udG9kby1leHBhbmRlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnRvZG8tZXhwYW5kZWQuaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50b2RvLWV4cGFuZGVkLWNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi50b2RvLWV4cGFuZGVkLWNsb3NlOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud2luZG93IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHBhZGRpbmc6IDQ4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi53aW5kb3ctc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLndpbmRvdy1zZWN0aW9uIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLndpbmRvdy1zZWN0aW9uIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ud2luZG93LXNlY3Rpb246bnRoLWNoaWxkKDEpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi53aW5kb3ctY2xvc2Uge1xyXG4gICAgcGFkZGluZzogMHB4IDEycHg7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLndpbmRvdy1jbG9zZTpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29uZmlybSk7XHJcbn1cclxuXHJcbi53aW5kb3ctZGVzY3JpcHRpb24tYm9yZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG59XHJcblxyXG4ud2luZG93LWR1ZS10ZXh0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxufVxyXG5cclxuLndpbmRvdy1ub3Rlcy1ib3JkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgbWluLWhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi53aW5kb3ctYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDI0cHg7XHJcbn1cclxuXHJcbi5lZGl0LFxyXG4ucmVtb3ZlIHtcclxuICAgIHdpZHRoOiAxMjhweDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG4uZWRpdDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb25maXJtKTtcclxufVxyXG5cclxuLnJlbW92ZTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWplY3QpO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBLDhGQUE4Rjs7QUFFOUY7SUFDSSxvQ0FBb0M7SUFDcEMsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGFBQWE7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QVc7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0FBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1tYWluLWNvbG91cjogIzBmMmY0NztcXHJcXG4gICAgLS1iZy1jb2xvdXI6ICM3ZTg3OGY7XFxyXFxuICAgIC0tY29uZmlybTogcmdiYSgwLCAxNDQsIDAsIDAuNCk7XFxyXFxuICAgIC0tcmVqZWN0OiByZ2JhKDI1NSwgMCwgMCwgMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc3lzdGVtLXVpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFNpZGViYXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG91cik7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIG1pbi13aWR0aDogMzYwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDI4cHg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQcm9qZWN0IERlZmF1bHQgKi9cXHJcXG4ucHJvamVjdC1kZWZhdWx0LCAucHJvamVjdC1hZGQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1kZWZhdWx0IGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGVmYXVsdCBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwcHggMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGVmYXVsdCBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWFkZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1hZGQgaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWFkZCBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGVmYXVsdC5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWFkZC5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSBociB7XFxyXFxuICAgIG1hcmdpbjogNHB4IGF1dG8gMTJweCBhdXRvO1xcclxcbiAgICB3aWR0aDogODglO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc2VsZWN0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qtc2VsZWN0OmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCAuYWRkLXByb2plY3Qge1xcclxcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBjb2xvcjogZ3JleTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgLmFkZC1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBDb250ZW50IFdpbmRvdyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIFxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3VyKTtcXHJcXG4gICAgZmxleDogNTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgLmFkZC10b2RvIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMjhweCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAzZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAyOHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogNzQwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiA2NHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXNlbGVjdG9yIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tc2VsZWN0b3I6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG9wYWNpdHk6IDAuMjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gLmNoZWNrIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvdXIpO1xcclxcbiAgICBtYXJnaW46IDAgMjRweDtcXHJcXG4gICAgcGFkZGluZzogOHB4IDhweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyAuY2hlY2s6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbmZpcm0pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyAudG9kby1jb250ZW50IHtcXHJcXG4gICAgZmxleDogMTA7ICAgXFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRlbnQgaDMge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGVudCBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvIC5kZWxldGUge1xcclxcbiAgICBwYWRkaW5nOiAxNnB4IDhweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gLmRlbGV0ZTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLXJlamVjdCk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZSBwIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLmNvbXBsZXRle1xcclxcbiAgICBvcGFjaXR5OiAwLjM7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRm9ybSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lci5hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRhaW5lciBmb3JtIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIG1pbi13aWR0aDogNjAwcHg7XFxyXFxuICAgIG1heC13aWR0aDogODAwcHg7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcclxcbiAgICBwYWRkaW5nOiA0OHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWVsZW1lbnQsXFxyXFxuLndpbmRvdy1lbGVtZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWVsZW1lbnQgbGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNkZXNjcmlwdGlvbixcXHJcXG4jbm90ZXMge1xcclxcbiAgICBwYWRkaW5nOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNkZXNjcmlwdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbiNkYXRlIHtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbm90ZXMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsLFxcclxcbi5zdWJtaXQge1xcclxcbiAgICB3aWR0aDogMTI4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5jYW5jZWw6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlamVjdCk7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQ6aG92ZXIgeyBcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb25maXJtKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUb2RvIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuLnRvZG8tZXhwYW5kZWQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1leHBhbmRlZC5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1leHBhbmRlZC1jbG9zZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZXhwYW5kZWQtY2xvc2U6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmRvdyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXHJcXG4gICAgcGFkZGluZzogNDhweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZG93LXNlY3Rpb24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmRvdy1zZWN0aW9uIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZG93LXNlY3Rpb24gaDMge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZG93LXNlY3Rpb246bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZG93LWNsb3NlIHtcXHJcXG4gICAgcGFkZGluZzogMHB4IDEycHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi53aW5kb3ctY2xvc2U6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29uZmlybSk7XFxyXFxufVxcclxcblxcclxcbi53aW5kb3ctZGVzY3JpcHRpb24tYm9yZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXHJcXG4gICAgcGFkZGluZzogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmRvdy1kdWUtdGV4dCB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmRvdy1ub3Rlcy1ib3JkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDI0cHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZG93LWJ1dHRvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdCxcXHJcXG4ucmVtb3ZlIHtcXHJcXG4gICAgd2lkdGg6IDEyOHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29uZmlybSk7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmU6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlamVjdCk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYWRkVG9Gb2xkZXIgfSBmcm9tIFwiLi9mb2xkZXJcIjtcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlRGF0YSAoZm9sZGVyKSB7XHJcbiAgICBjb25zdCBzdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KGZvbGRlcik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhdGFcIiwgc3RyaW5naWZpZWQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGEgKCkge1xyXG4gICAgY29uc3Qgc3RyaW5naWZpZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhdGFcIik7XHJcbiAgICBpZiAoc3RyaW5naWZpZWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXNlZCA9IEpTT04ucGFyc2Uoc3RyaW5naWZpZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGluZGV4IGluIHNlcmlhbGlzZWQpIHtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3Qoc2VyaWFsaXNlZFtpbmRleF0udGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gc2VyaWFsaXNlZFtpbmRleF0ucHJvamVjdDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgdG9kbyBpbiBhcnJheSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oXHJcbiAgICAgICAgICAgICAgICBhcnJheVt0b2RvXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgYXJyYXlbdG9kb10uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBhcnJheVt0b2RvXS5kdWVEYXRlLFxyXG4gICAgICAgICAgICAgICAgYXJyYXlbdG9kb10ubm90ZXNcclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgbmV3UHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRkVG9Gb2xkZXIobmV3UHJvamVjdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImNvbnN0IGZvbGRlciA9IFtdO1xyXG5leHBvcnQgbGV0IHNlbGVjdGVkUHJvamVjdCA9IDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRQcm9qZWN0ICgpIHtcclxuICAgIHJldHVybiBmb2xkZXJbc2VsZWN0ZWRQcm9qZWN0XTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGVkUHJvamVjdEluZGV4KCkge1xyXG4gICAgcmV0dXJuIHNlbGVjdGVkUHJvamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbGVjdGVkUHJvamVjdCAoaW5kZXgpIHtcclxuICAgIHNlbGVjdGVkUHJvamVjdCA9IGluZGV4O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9Gb2xkZXIocHJvamVjdCkge1xyXG4gICAgZm9sZGVyLnB1c2gocHJvamVjdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb2xkZXIoKSB7XHJcbiAgICByZXR1cm4gZm9sZGVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbUZvbGRlcihwcm9qZWN0KSB7XHJcbiAgICBmb2xkZXIuc3BsaWNlKHByb2plY3QsIDEpO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIFByb2plY3QgKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcblxyXG4gICAgdGhpcy5wcm9qZWN0ID0gW107XHJcblxyXG4gICAgdGhpcy5zZXRUaXRsZSA9ICh0aXRsZSkgPT4ge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZFRvZG8gPSAodG9kbykgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvamVjdC5wdXNoKHRvZG8pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlVG9kbyA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvamVjdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tIFwiLi9kYXRhXCI7XHJcbmltcG9ydCB7IGdldEZvbGRlciwgZ2V0U2VsZWN0ZWRQcm9qZWN0LCBnZXRTZWxlY3RlZFByb2plY3RJbmRleCwgcmVtb3ZlRnJvbUZvbGRlciwgc2VsZWN0ZWRQcm9qZWN0LCBzZXRTZWxlY3RlZFByb2plY3QgfSBmcm9tIFwiLi9mb2xkZXJcIjtcclxuXHJcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xyXG5jb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XHJcbmNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtaGVhZGVyXCIpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XHJcbiAgICBjb25zdCBmb2xkZXIgPSBnZXRGb2xkZXIoKTtcclxuICAgIHJlc2V0Q29udGFpbmVyKHByb2plY3RDb250YWluZXIpO1xyXG4gICAgY29udGVudEhlYWRlci5pbm5lclRleHQgPSBmb2xkZXJbc2VsZWN0ZWRQcm9qZWN0XS50aXRsZTtcclxuXHJcbiAgICBmb3IgKGxldCBpdGVtIGluIGZvbGRlcikge1xyXG4gICAgICAgIC8vIENyZWF0ZSBFbGVtZW50c1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuICAgICAgICAvLyBBZGQgQ2xhc3Nlc1xyXG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XHJcbiAgICAgICAgc2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc2VsZWN0XCIpO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3RcIik7XHJcblxyXG4gICAgICAgIC8vIEZpbGwgRWxlbWVudHNcclxuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBmb2xkZXJbaXRlbV0udGl0bGU7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9IFwieFwiO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgRWxlbWVudHMgXHJcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChzZWxlY3Rvcik7XHJcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xyXG5cclxuICAgICAgICBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICByZW5kZXJUb2RvKGZvbGRlcltpdGVtXSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkUHJvamVjdChpdGVtKTtcclxuICAgICAgICAgICAgY29udGVudEhlYWRlci5pbm5lclRleHQgPSBmb2xkZXJbaXRlbV0udGl0bGU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnZXRGb2xkZXIoKS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVGcm9tRm9sZGVyKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFByb2plY3QoZ2V0U2VsZWN0ZWRQcm9qZWN0SW5kZXgoKSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2V0Rm9sZGVyKCkubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdldFNlbGVjdGVkUHJvamVjdEluZGV4KCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3RzKCk7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUb2RvKGdldFNlbGVjdGVkUHJvamVjdCgpKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIk11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgZm9sZGVyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvZG8ocHJvamVjdCkge1xyXG4gICAgcmVzZXRDb250YWluZXIodG9kb0NvbnRhaW5lcik7XHJcbiAgICBcclxuICAgIGZvciAobGV0IGl0ZW0gaW4gcHJvamVjdC5wcm9qZWN0KSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIEVsZW1lbnRzXHJcbiAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gQWRkIGNsYXNzZXNcclxuICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcclxuICAgICAgICBzZWxlY3Rvci5jbGFzc0xpc3QuYWRkKCd0b2RvLXNlbGVjdG9yJyk7XHJcbiAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGVudCcpO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcclxuXHJcbiAgICAgICAgLy8gRmlsbCBlbGVtZW50c1xyXG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QucHJvamVjdFtpdGVtXS5uYW1lO1xyXG4gICAgICAgIGR1ZS5pbm5lclRleHQgPSBwcm9qZWN0LnByb2plY3RbaXRlbV0uZHVlRGF0ZTtcclxuICAgICAgICBkZWxldGVCdXR0b25UZXh0LmlubmVyVGV4dCA9IFwieFwiO1xyXG5cclxuICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHNlbGVjdG9yKTtcclxuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGNoZWNrKTtcclxuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZHVlKTtcclxuICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvblRleHQpO1xyXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kbyk7XHJcblxyXG5cclxuICAgICAgICBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICByZW5kZXJUb2RvSXRlbShwcm9qZWN0LCBwcm9qZWN0LnByb2plY3RbaXRlbV0sIGl0ZW0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0LnByb2plY3RbaXRlbV0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVGhlIGlsbHVzaW9uIG9mIGNob2ljZVxyXG4gICAgICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3QucmVtb3ZlVG9kbyhpdGVtKTtcclxuICAgICAgICAgICAgcmVuZGVyVG9kbyhwcm9qZWN0KTtcclxuICAgICAgICAgICAgc2F2ZURhdGEoZ2V0Rm9sZGVyKCkpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0LnJlbW92ZVRvZG8oaXRlbSk7XHJcbiAgICAgICAgICAgIHJlbmRlclRvZG8ocHJvamVjdCk7XHJcbiAgICAgICAgICAgIHNhdmVEYXRhKGdldEZvbGRlcigpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUb2RvSXRlbSAocHJvamVjdCwgdG9kbywgaW5kZXgpIHtcclxuICAgIGNvbnN0IHRvZG9FeHBhbmRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1leHBhbmRlZFwiKTtcclxuICAgIGNvbnN0IHRvZG9FeHBhbmRlZENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWV4cGFuZGVkLWNsb3NlXCIpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRvdy10aXRsZVwiKTtcclxuICAgIGNvbnN0IHdpbmRvd0Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kb3ctY2xvc2VcIik7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZG93LWRlc2NyaXB0aW9uLXRleHRcIik7XHJcbiAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRvdy1kdWUtdGV4dFwiKTtcclxuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kb3ctbm90ZXMtdGV4dFwiKTtcclxuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXRcIik7XHJcbiAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlbW92ZVwiKTtcclxuXHJcbiAgICB0b2RvRXhwYW5kZWQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuXHJcbiAgICAvLyBGaWxsIEVsZW1lbnRzXHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSB0b2RvLm5hbWU7XHJcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0b2RvLmRlc2NyaXB0aW9uO1xyXG4gICAgZHVlLmlubmVyVGV4dCA9IHRvZG8uZHVlRGF0ZTtcclxuICAgIG5vdGVzLmlubmVyVGV4dCA9IHRvZG8ubm90ZXM7XHJcblxyXG4gICAgLy8gQnV0dG9uIGZ1bmN0aW9uc1xyXG5cclxuICAgIC8vIEkgaG9uZXN0bHkgaGF2ZSBubyBpZGVhIHdoeSB0aGlzIGRvZXNuJ3Qgd29yayBwcm9wZXJseS4uLi4uXHJcbiAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBwcm9qZWN0LnJlbW92ZVRvZG8oaW5kZXgpO1xyXG4gICAgICAgIHJlbmRlclRvZG8ocHJvamVjdCk7XHJcbiAgICAgICAgcmVzZXRFbGVtZW50cygpO1xyXG4gICAgfSlcclxuXHJcbiAgICB3aW5kb3dDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHJlc2V0RWxlbWVudHMoKTtcclxuICAgIH0pXHJcblxyXG4gICAgdG9kb0V4cGFuZGVkQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICByZXNldEVsZW1lbnRzKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBhbGVydChcIkkgZGlkbid0IGltcGxlbWVudCB0aGlzLlwiKTtcclxuICAgICAgICByZXNldEVsZW1lbnRzKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0RWxlbWVudHMoKSB7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgIGR1ZS5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgIG5vdGVzLmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgdG9kb0V4cGFuZGVkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Q29udGFpbmVyIChjb250YWluZXIpIHtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIFRvZG8gKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBub3Rlcykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjsgXHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGxvYWREYXRhLCBzYXZlRGF0YSB9IGZyb20gJy4vc2NyaXB0cy9kYXRhJztcclxuaW1wb3J0IHsgYWRkVG9Gb2xkZXIsIGdldEZvbGRlciwgZ2V0U2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSAnLi9zY3JpcHRzL2ZvbGRlcic7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3NjcmlwdHMvcHJvamVjdCc7XHJcbmltcG9ydCB7IHJlbmRlclByb2plY3RzLCByZW5kZXJUb2RvIH0gZnJvbSAnLi9zY3JpcHRzL3JlbmRlcic7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3NjcmlwdHMvdG9kbyc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxubGV0IHByb2plY3RzID0gZ2V0Rm9sZGVyKCk7XHJcblxyXG4vL1NpZGUgQmFyXHJcbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xyXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGVcIik7XHJcbmNvbnN0IHByb2plY3REZWZhdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWRlZmF1bHRcIik7XHJcbmNvbnN0IHByb2plY3RBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYWRkXCIpO1xyXG5jb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lXCIpO1xyXG5cclxuLy8gRm9ybVxyXG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcclxuY29uc3QgYWRkVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kbycpO1xyXG5jb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsJyk7XHJcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0XCIpO1xyXG5cclxuXHJcblxyXG4gICAgXHJcbihmdW5jdGlvbiBwYWdlTG9hZCAoKSB7XHJcbiAgICBsb2FkRGF0YSgpO1xyXG4gICAgaWYgKGdldEZvbGRlcigpLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkhvbWVcIik7XHJcbiAgICAgICAgYWRkVG9Gb2xkZXIoZGVmYXVsdFByb2plY3QpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKCk7XHJcbn0pKCk7XHJcblxyXG5cclxuXHJcblxyXG4vLyBFdmVudCBMaXN0ZW5lcnMgXHJcbmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHByb2plY3REZWZhdWx0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICBwcm9qZWN0QWRkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbn0pXHJcblxyXG5cclxuLy8gQ3JlYXRlIFByb2plY3QgXHJcbmNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHByb2plY3REZWZhdWx0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICBwcm9qZWN0QWRkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKTtcclxuICAgIHByb2plY3ROYW1lLnZhbHVlID0gXCJcIlxyXG5cclxuICAgIGlmIChuZXdQcm9qZWN0LnRpdGxlID09PSBcIlwiKSB7XHJcbiAgICAgICAgbmV3UHJvamVjdC5zZXRUaXRsZShcIlVubmFtZWQgUHJvamVjdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUb0ZvbGRlcihuZXdQcm9qZWN0KTtcclxuICAgIHVwZGF0ZSgpO1xyXG59KVxyXG5cclxuYWRkVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG59KVxyXG5cclxuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZm9ybS5yZXNldCgpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG59KVxyXG5cclxuXHJcbi8vIENyZWF0ZSBUb2RvXHJcblxyXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIikudmFsdWU7XHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKS52YWx1ZTtcclxuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVzJykudmFsdWU7XHJcblxyXG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgbm90ZXMpO1xyXG4gICAgZ2V0U2VsZWN0ZWRQcm9qZWN0KCkuYWRkVG9kbyh0b2RvKTtcclxuXHJcbiAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgLy8gcmVuZGVyVG9kbyhnZXRTZWxlY3RlZFByb2plY3QoKSk7XHJcbiAgICB1cGRhdGUoKTtcclxufSlcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgIHJlbmRlclByb2plY3RzKCk7XHJcbiAgICByZW5kZXJUb2RvKGdldFNlbGVjdGVkUHJvamVjdCgpKTtcclxuICAgIHNhdmVEYXRhKGdldEZvbGRlcigpKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==