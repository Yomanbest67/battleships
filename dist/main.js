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
___CSS_LOADER_EXPORT___.push([module.id, `.body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.app {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.playerHalf {
    display: flex;
    gap: 10px;
}

.playerHalf .info {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.playerBoard,
.enemyBoard {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
}

.playerBoard .line,
.enemyBoard .line {
    display: flex;
}

.line .square {
    border: 1px solid black;
    height: 20px;
    width: 20px;
    padding: 5px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,YAAY;AAChB","sourcesContent":[".body {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n}\r\n\r\n.app {\r\n    border: 1px solid black;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n.playerHalf {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.playerHalf .info {\r\n    display: flex;\r\n    gap: 10px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.playerBoard,\r\n.enemyBoard {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid black;\r\n}\r\n\r\n.playerBoard .line,\r\n.enemyBoard .line {\r\n    display: flex;\r\n}\r\n\r\n.line .square {\r\n    border: 1px solid black;\r\n    height: 20px;\r\n    width: 20px;\r\n    padding: 5px;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayBoard: () => (/* binding */ displayBoard),
/* harmony export */   playerMessage: () => (/* binding */ playerMessage)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");



function displayBoard(board, enemy = false) {
  let domPBoard = document.querySelector('.playerBoard');

  if (enemy) {
    domPBoard = document.querySelector('.enemyBoard');
  }

  while (domPBoard.firstChild) {
    domPBoard.removeChild(domPBoard.firstChild);
  }

  for (const line of board.board) {
    const boardLine = document.createElement('div');
    boardLine.classList.add('line');
    let i = -1;
    for (const square of line) {
      i++;
      const boardSquare = document.createElement('div');
      boardSquare.classList.add('square');
      boardSquare.id = `[${board.board.indexOf(line)}, ${i}]`;

      switch (square) {
        case null:
          //   boardSquare.textContent = '0';
          break;
        case 'X':
          boardSquare.textContent = 'X';
          break;
        case 'O':
          boardSquare.textContent = 'O';
          break;
        default:
          if (enemy) {
            /* Do Nothing */
          } else boardSquare.style.backgroundColor = 'blue';
      }

      boardLine.appendChild(boardSquare);
    }

    domPBoard.appendChild(boardLine);
  }
}

function playerMessage(message) {
  const messageArea = document.querySelector('.playerMessage');

  messageArea.textContent = message;
}




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");


class Gameboard {
  constructor(size) {
    this.size = size;
    this.rows = size;
    this.columns = size;
    this.board = this.makeBoard();
  }

  makeBoard() {
    const board = [];

    for (let i = 0; i < this.rows; i++) {
      board.push(new Array(this.columns).fill(null));
    }

    return board;
  }

  receiveAttack(x, y) {
    const location = this.board[x][y];

    switch (location) {
      case null:
        this.board[x][y] = 'O';
        return 'miss';
      default:
        this.board[x][y].hit();
        this.board[x][y] = 'X';
        return 'hit';
    }
  }

  placeShip(ship, start, end) {
    if (this.board[start[0]] === this.board[end[0]]) {
      let wid = 0;
      for (let i = 0; i < ship.length; i++) {
        if (this.board[start[0]][start[1] + i] === null) {
          wid++;
        }
      }

      if (wid === ship.length) {
        for (let i = 0; i < ship.length; i++) {
          this.board[start[0]][start[1] + i] = ship;
        }
      } else {
        throw new Error("Can't place ship!");
      }
    } else if (this.board[start[1]] === this.board[end[1]]) {
      let len = 0;
      for (let i = 0; i < ship.length; i++) {
        if (this.board[start[0] + i][start[1]] === null) {
          len++;
        }
      }

      if (len === ship.length) {
        for (let i = 0; i < ship.length; i++) {
          this.board[start[0] + i][start[1]] = ship;
        }
      } else {
        throw new Error("Can't place ship!");
      }
    } else {
      throw new Error("Can't place ship!");
    }
  }
}

// const gameBoard = new Gameboard(10);
// const ship = new Ship(3);
// const newShip = new Ship(2);

// gameBoard.placeShip(ship, [0, 1], [0, 3]);

// gameBoard.placeShip(newShip, [3, 1], [3, 2]);

// gameBoard.receiveAttack(5, 3);

// console.log(gameBoard.receiveAttack(0, 1));

// console.table(gameBoard.board);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _pcEnemy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pcEnemy.js */ "./src/pcEnemy.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _turnController_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./turnController.js */ "./src/turnController.js");







let playerGameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](10);
let enemyBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](10);
driver();

function driver() {
  playerGameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](10);
  enemyBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](10);
  (0,_pcEnemy_js__WEBPACK_IMPORTED_MODULE_1__.createEnemyBoard2)(enemyBoard);

  (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.displayBoard)(enemyBoard, true);
  setupGame(playerGameboard);
}

function randomDriver() {
  (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.displayBoard)(playerGameboard);
  (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.displayBoard)(enemyBoard, true);

  startGame(enemyBoard, playerGameboard);
}

function setupGame(
  board,
  ships = [
    { length: 5 },
    { length: 4 },
    { length: 3 },
    { length: 3 },
    { length: 2 },
  ],
) {
  (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.displayBoard)(board);

  if (ships.length === 0) {
    return startGame(enemyBoard, playerGameboard);
  }

  let firstCoord = 0;
  let secondCoord = 0;
  (function placeShips() {
    const currentShip = ships[0];

    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.playerMessage)(
      `Place your ships! 
      Current Ship: Length ${currentShip.length}`,
    );

    const squares = document.querySelectorAll('.playerBoard > .line > .square');

    for (const square of squares) {
      square.addEventListener('click', () => setShipValues(square));
    }

    function setShipValues(square) {
      if (firstCoord === 0) {
        firstCoord = [parseInt(square.id[1]), parseInt([square.id[4]])];

        square.style.backgroundColor = 'blue';
      } else {
        secondCoord = [parseInt(square.id[1]), parseInt([square.id[4]])];

        if (
          firstCoord[0] !== secondCoord[0] &&
          firstCoord[1] !== secondCoord[1]
        ) {
          setupGame(board, ships);
        } else {
          const ship = new _ship_js__WEBPACK_IMPORTED_MODULE_4__["default"](currentShip.length);

          board.placeShip(ship, firstCoord, secondCoord);
          ships.splice(0, 1);

          setupGame(board, ships);
        }
      }
    }
  })();
}

function startGame(enemyBoard, gameBoard) {
  (0,_DOM_js__WEBPACK_IMPORTED_MODULE_3__.playerMessage)('Game Start! Your turn!');

  (0,_turnController_js__WEBPACK_IMPORTED_MODULE_5__.setTurn)(enemyBoard, gameBoard);
}

(function resetButton() {
  const resetBtn = document.querySelector('.reset');

  resetBtn.addEventListener('click', () => {
    driver();
  });
})();

(function randomButton() {
  const resetBtn = document.querySelector('.random');

  resetBtn.addEventListener('click', () => {
    randomMap();
  });

  function randomMap() {
    const ships = [
      { length: 5 },
      { length: 4 },
      { length: 3 },
      { length: 3 },
      { length: 2 },
    ];

    while (ships.length > 0) {
      const currentShip = ships.shift();

      const randomCoord = [
        (0,_pcEnemy_js__WEBPACK_IMPORTED_MODULE_1__.randomNum)(playerGameboard.size),
        (0,_pcEnemy_js__WEBPACK_IMPORTED_MODULE_1__.randomNum)(playerGameboard.size),
      ];

      // const location = playerGameboard.board;

      if (playerGameboard.board[randomCoord[0]][randomCoord[1]] === null) {
        const emptySpaces = tryAllDirections(
          ['right', 'left', 'up', 'down'],
          randomCoord,
          currentShip,
        );

        if (emptySpaces) {
          for (const index of emptySpaces) {
            playerGameboard.board[index[0]][index[1]] = new _ship_js__WEBPACK_IMPORTED_MODULE_4__["default"](
              currentShip.length,
            );
          }
        }
      } else {
        // Generate new coords and try again.
      }
    }

    randomDriver();

    function getNextIndices(coords, direction, size) {
      const nextIndices = [];
      const [x, y] = coords;

      for (let i = 0; i < size; i++) {
        let newX = x;
        let newY = y;

        if (direction === 'right') {
          newY = y + i;
        } else if (direction === 'left') {
          newY = y - i;
        } else if (direction === 'down') {
          newX = x + i;
        } else {
          newX = x - i;
        }

        nextIndices.push([newX, newY]);
      }

      return nextIndices;
    }

    function tryDirection(direction, coords, ship) {
      const nextIndices = getNextIndices(coords, direction, ship.length);

      const isEmpty = (coords) =>
        playerGameboard.board[coords[0]][coords[1]] === null;

      if (nextIndices.every(isEmpty)) {
        return nextIndices;
      }

      return false;
    }

    function tryAllDirections(directions, coords, ship) {
      if (directions.length === 0) {
        return false;
      }

      const direction = directions.shift();

      const nextIndices = tryDirection(direction, coords, ship);

      if (nextIndices) return nextIndices;
      return tryAllDirections(directions, coords, ship);
    }
  }
})();


/***/ }),

/***/ "./src/pcEnemy.js":
/*!************************!*\
  !*** ./src/pcEnemy.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEnemyBoard: () => (/* binding */ createEnemyBoard),
/* harmony export */   createEnemyBoard2: () => (/* binding */ createEnemyBoard2),
/* harmony export */   displayEnemyBoard: () => (/* binding */ displayEnemyBoard),
/* harmony export */   randomNum: () => (/* binding */ randomNum)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");



function createEnemyBoard(size) {
  const enemyBoard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"](size);
  const ships = [
    { length: 5 },
    { length: 4 },
    { length: 3 },
    { length: 3 },
    { length: 2 },
  ];

  while (ships.length > 0) {
    const currentShip = ships.shift();
    const createShip = new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](currentShip.length);

    const coordsStart = [randomNum(currentShip.length), randomNum(size)];
    let coordsEnd = null;

    if (randomNum(2) === 0) {
      coordsEnd = [coordsStart[0], coordsStart[1] + (currentShip.length - 1)];
    } else {
      coordsEnd = [coordsStart[0] + (currentShip.length - 1), coordsStart[1]];
    }

    try {
      enemyBoard.placeShip(createShip, coordsStart, coordsEnd);
    } catch (error) {
      // Empty
    }
  }
  return enemyBoard;
}

function createEnemyBoard2(enemyBoard) {
  const ships = [
    { length: 5 },
    { length: 4 },
    { length: 3 },
    { length: 3 },
    { length: 2 },
  ];

  while (ships.length > 0) {
    const currentShip = ships.shift();

    const randomCoord = [
      randomNum(enemyBoard.size),
      randomNum(enemyBoard.size),
    ];

    // const location = enemyBoard.board;

    if (enemyBoard.board[randomCoord[0]][randomCoord[1]] === null) {
      const emptySpaces = tryAllDirections(
        ['right', 'left', 'up', 'down'],
        randomCoord,
        currentShip,
      );

      if (emptySpaces) {
        for (const index of emptySpaces) {
          enemyBoard.board[index[0]][index[1]] = new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"](currentShip.length);
        }
      }
    } else {
      createEnemyBoard2(new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"](10));
    }
  }

  function getNextIndices(coords, direction, size) {
    const nextIndices = [];
    const [x, y] = coords;

    for (let i = 0; i < size; i++) {
      let newX = x;
      let newY = y;

      if (direction === 'right') {
        newY = y + i;
      } else if (direction === 'left') {
        newY = y - i;
      } else if (direction === 'down') {
        newX = x + i;
      } else {
        newX = x - i;
      }

      nextIndices.push([newX, newY]);
    }

    return nextIndices;
  }

  function tryDirection(direction, coords, ship) {
    const nextIndices = getNextIndices(coords, direction, ship.length);

    const isEmpty = (coords) => enemyBoard.board[coords[0]][coords[1]] === null;

    if (nextIndices.every(isEmpty)) {
      return nextIndices;
    }

    return false;
  }

  function tryAllDirections(directions, coords, ship) {
    if (directions.length === 0) {
      return false;
    }

    const direction = directions.shift();

    const nextIndices = tryDirection(direction, coords, ship);

    if (nextIndices) return nextIndices;
    return tryAllDirections(directions, coords, ship);
  }
}

function randomNum(limit) {
  return Math.floor(Math.random() * limit);
}

function displayEnemyBoard(board) {}




/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    this.health = length;
    this.isSunk = false;
  }

  hit() {
    this.health--;

    if (this.health === 0) this.sink();

    return 'X';
  }

  sink() {
    this.isSunk = true;
  }
}


/***/ }),

/***/ "./src/turnController.js":
/*!*******************************!*\
  !*** ./src/turnController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setTurn: () => (/* binding */ setTurn)
/* harmony export */ });
/* harmony import */ var _pcEnemy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pcEnemy.js */ "./src/pcEnemy.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");





let turn = null;

function setTurn(enemyBoard, playerBoard) {
  (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.displayBoard)(enemyBoard, true);
  (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.displayBoard)(playerBoard);

  turn === 'player' ? (turn = 'enemy') : (turn = 'player');
  setFunctionality(enemyBoard, playerBoard);
}

function setFunctionality(enemyBoard, playerBoard) {
  const enemySquares = document.querySelectorAll(
    '.enemyBoard > .line > .square',
  );

  if (turn === 'player') {
    for (const square of enemySquares) {
      const handler = (event) => {
        playerFunction(square);
      };

      square.addEventListener('click', handler);
      square._clickListener = handler; // Store the handler for later removal
    }
  } else {
    console.log('Enemy Turn');
    for (const square of enemySquares) {
      const handler = square._clickListener;

      if (handler) {
        square.removeEventListener('click', handler);
      }
    }

    // Get random coordinate and attack.
    let attackSpot = [(0,_pcEnemy_js__WEBPACK_IMPORTED_MODULE_0__.randomNum)(10), (0,_pcEnemy_js__WEBPACK_IMPORTED_MODULE_0__.randomNum)(10)]; // Hardcoded value;

    while (
      typeof playerBoard.board[attackSpot[0]][attackSpot[1]] === 'string'
    ) {
      attackSpot = [(0,_pcEnemy_js__WEBPACK_IMPORTED_MODULE_0__.randomNum)(10), (0,_pcEnemy_js__WEBPACK_IMPORTED_MODULE_0__.randomNum)(10)];
    }

    playerBoard.receiveAttack(attackSpot[0], attackSpot[1]);

    if (checkVictory(playerBoard)) (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.playerMessage)('You Lost!');
    else setTurn(enemyBoard, playerBoard);
  }

  const playerFunction = (square) => {
    if (typeof enemyBoard.board[square.id[1]][square.id[4]] !== 'string') {
      enemyBoard.receiveAttack(square.id[1], square.id[4]);

      if (checkVictory(enemyBoard)) (0,_DOM_js__WEBPACK_IMPORTED_MODULE_2__.playerMessage)('You Win!');
      else setTurn(enemyBoard, playerBoard);
    }
  };
}

function checkVictory(board) {
  let count = 0;
  for (const line of board.board) {
    if (line.some((arr) => arr instanceof _ship_js__WEBPACK_IMPORTED_MODULE_3__["default"])) count++;
  }

  if (count === 0) return true;

  return false;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL3dlYnBhY2stZXNsaW50LXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXRlbXBsYXRlLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC10ZW1wbGF0ZS8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtdGVtcGxhdGUvLi9zcmMvcGNFbmVteS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC10ZW1wbGF0ZS8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXRlbXBsYXRlLy4vc3JjL3R1cm5Db250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXRlbXBsYXRlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtdGVtcGxhdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXRlbXBsYXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5hcHAge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5wbGF5ZXJIYWxmIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5wbGF5ZXJIYWxmIC5pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucGxheWVyQm9hcmQsXHJcbi5lbmVteUJvYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5wbGF5ZXJCb2FyZCAubGluZSxcclxuLmVuZW15Qm9hcmQgLmxpbmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmxpbmUgLnNxdWFyZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllckhhbGYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJIYWxmIC5pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllckJvYXJkLFxcclxcbi5lbmVteUJvYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJCb2FyZCAubGluZSxcXHJcXG4uZW5lbXlCb2FyZCAubGluZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5saW5lIC5zcXVhcmUge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZHJpdmVyIH0gZnJvbSAnLi9pbmRleC5qcyc7XHJcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmQoYm9hcmQsIGVuZW15ID0gZmFsc2UpIHtcclxuICBsZXQgZG9tUEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckJvYXJkJyk7XHJcblxyXG4gIGlmIChlbmVteSkge1xyXG4gICAgZG9tUEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15Qm9hcmQnKTtcclxuICB9XHJcblxyXG4gIHdoaWxlIChkb21QQm9hcmQuZmlyc3RDaGlsZCkge1xyXG4gICAgZG9tUEJvYXJkLnJlbW92ZUNoaWxkKGRvbVBCb2FyZC5maXJzdENoaWxkKTtcclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgbGluZSBvZiBib2FyZC5ib2FyZCkge1xyXG4gICAgY29uc3QgYm9hcmRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBib2FyZExpbmUuY2xhc3NMaXN0LmFkZCgnbGluZScpO1xyXG4gICAgbGV0IGkgPSAtMTtcclxuICAgIGZvciAoY29uc3Qgc3F1YXJlIG9mIGxpbmUpIHtcclxuICAgICAgaSsrO1xyXG4gICAgICBjb25zdCBib2FyZFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBib2FyZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcclxuICAgICAgYm9hcmRTcXVhcmUuaWQgPSBgWyR7Ym9hcmQuYm9hcmQuaW5kZXhPZihsaW5lKX0sICR7aX1dYDtcclxuXHJcbiAgICAgIHN3aXRjaCAoc3F1YXJlKSB7XHJcbiAgICAgICAgY2FzZSBudWxsOlxyXG4gICAgICAgICAgLy8gICBib2FyZFNxdWFyZS50ZXh0Q29udGVudCA9ICcwJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1gnOlxyXG4gICAgICAgICAgYm9hcmRTcXVhcmUudGV4dENvbnRlbnQgPSAnWCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdPJzpcclxuICAgICAgICAgIGJvYXJkU3F1YXJlLnRleHRDb250ZW50ID0gJ08nO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGlmIChlbmVteSkge1xyXG4gICAgICAgICAgICAvKiBEbyBOb3RoaW5nICovXHJcbiAgICAgICAgICB9IGVsc2UgYm9hcmRTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBib2FyZExpbmUuYXBwZW5kQ2hpbGQoYm9hcmRTcXVhcmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvbVBCb2FyZC5hcHBlbmRDaGlsZChib2FyZExpbmUpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcGxheWVyTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgY29uc3QgbWVzc2FnZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyTWVzc2FnZScpO1xyXG5cclxuICBtZXNzYWdlQXJlYS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGRpc3BsYXlCb2FyZCwgcGxheWVyTWVzc2FnZSB9O1xyXG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcclxuICBjb25zdHJ1Y3RvcihzaXplKSB7XHJcbiAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgdGhpcy5yb3dzID0gc2l6ZTtcclxuICAgIHRoaXMuY29sdW1ucyA9IHNpemU7XHJcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5tYWtlQm9hcmQoKTtcclxuICB9XHJcblxyXG4gIG1ha2VCb2FyZCgpIHtcclxuICAgIGNvbnN0IGJvYXJkID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xyXG4gICAgICBib2FyZC5wdXNoKG5ldyBBcnJheSh0aGlzLmNvbHVtbnMpLmZpbGwobnVsbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBib2FyZDtcclxuICB9XHJcblxyXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLmJvYXJkW3hdW3ldO1xyXG5cclxuICAgIHN3aXRjaCAobG9jYXRpb24pIHtcclxuICAgICAgY2FzZSBudWxsOlxyXG4gICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSAnTyc7XHJcbiAgICAgICAgcmV0dXJuICdtaXNzJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aGlzLmJvYXJkW3hdW3ldLmhpdCgpO1xyXG4gICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSAnWCc7XHJcbiAgICAgICAgcmV0dXJuICdoaXQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcGxhY2VTaGlwKHNoaXAsIHN0YXJ0LCBlbmQpIHtcclxuICAgIGlmICh0aGlzLmJvYXJkW3N0YXJ0WzBdXSA9PT0gdGhpcy5ib2FyZFtlbmRbMF1dKSB7XHJcbiAgICAgIGxldCB3aWQgPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5ib2FyZFtzdGFydFswXV1bc3RhcnRbMV0gKyBpXSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgd2lkKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAod2lkID09PSBzaGlwLmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdGhpcy5ib2FyZFtzdGFydFswXV1bc3RhcnRbMV0gKyBpXSA9IHNoaXA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHBsYWNlIHNoaXAhXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9hcmRbc3RhcnRbMV1dID09PSB0aGlzLmJvYXJkW2VuZFsxXV0pIHtcclxuICAgICAgbGV0IGxlbiA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmJvYXJkW3N0YXJ0WzBdICsgaV1bc3RhcnRbMV1dID09PSBudWxsKSB7XHJcbiAgICAgICAgICBsZW4rKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChsZW4gPT09IHNoaXAubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLmJvYXJkW3N0YXJ0WzBdICsgaV1bc3RhcnRbMV1dID0gc2hpcDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgcGxhY2Ugc2hpcCFcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHBsYWNlIHNoaXAhXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gY29uc3QgZ2FtZUJvYXJkID0gbmV3IEdhbWVib2FyZCgxMCk7XHJcbi8vIGNvbnN0IHNoaXAgPSBuZXcgU2hpcCgzKTtcclxuLy8gY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKDIpO1xyXG5cclxuLy8gZ2FtZUJvYXJkLnBsYWNlU2hpcChzaGlwLCBbMCwgMV0sIFswLCAzXSk7XHJcblxyXG4vLyBnYW1lQm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIFszLCAxXSwgWzMsIDJdKTtcclxuXHJcbi8vIGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKDUsIDMpO1xyXG5cclxuLy8gY29uc29sZS5sb2coZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soMCwgMSkpO1xyXG5cclxuLy8gY29uc29sZS50YWJsZShnYW1lQm9hcmQuYm9hcmQpO1xyXG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcclxuaW1wb3J0IHsgY3JlYXRlRW5lbXlCb2FyZCwgcmFuZG9tTnVtLCBjcmVhdGVFbmVteUJvYXJkMiB9IGZyb20gJy4vcGNFbmVteS5qcyc7XHJcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBkaXNwbGF5Qm9hcmQsIHBsYXllck1lc3NhZ2UgfSBmcm9tICcuL0RPTS5qcyc7XHJcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XHJcbmltcG9ydCB7IHNldFR1cm4gfSBmcm9tICcuL3R1cm5Db250cm9sbGVyLmpzJztcclxuXHJcbmxldCBwbGF5ZXJHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKDEwKTtcclxubGV0IGVuZW15Qm9hcmQgPSBuZXcgR2FtZWJvYXJkKDEwKTtcclxuZHJpdmVyKCk7XHJcblxyXG5mdW5jdGlvbiBkcml2ZXIoKSB7XHJcbiAgcGxheWVyR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgxMCk7XHJcbiAgZW5lbXlCb2FyZCA9IG5ldyBHYW1lYm9hcmQoMTApO1xyXG4gIGNyZWF0ZUVuZW15Qm9hcmQyKGVuZW15Qm9hcmQpO1xyXG5cclxuICBkaXNwbGF5Qm9hcmQoZW5lbXlCb2FyZCwgdHJ1ZSk7XHJcbiAgc2V0dXBHYW1lKHBsYXllckdhbWVib2FyZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbURyaXZlcigpIHtcclxuICBkaXNwbGF5Qm9hcmQocGxheWVyR2FtZWJvYXJkKTtcclxuICBkaXNwbGF5Qm9hcmQoZW5lbXlCb2FyZCwgdHJ1ZSk7XHJcblxyXG4gIHN0YXJ0R2FtZShlbmVteUJvYXJkLCBwbGF5ZXJHYW1lYm9hcmQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cEdhbWUoXHJcbiAgYm9hcmQsXHJcbiAgc2hpcHMgPSBbXHJcbiAgICB7IGxlbmd0aDogNSB9LFxyXG4gICAgeyBsZW5ndGg6IDQgfSxcclxuICAgIHsgbGVuZ3RoOiAzIH0sXHJcbiAgICB7IGxlbmd0aDogMyB9LFxyXG4gICAgeyBsZW5ndGg6IDIgfSxcclxuICBdLFxyXG4pIHtcclxuICBkaXNwbGF5Qm9hcmQoYm9hcmQpO1xyXG5cclxuICBpZiAoc2hpcHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gc3RhcnRHYW1lKGVuZW15Qm9hcmQsIHBsYXllckdhbWVib2FyZCk7XHJcbiAgfVxyXG5cclxuICBsZXQgZmlyc3RDb29yZCA9IDA7XHJcbiAgbGV0IHNlY29uZENvb3JkID0gMDtcclxuICAoZnVuY3Rpb24gcGxhY2VTaGlwcygpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gc2hpcHNbMF07XHJcblxyXG4gICAgcGxheWVyTWVzc2FnZShcclxuICAgICAgYFBsYWNlIHlvdXIgc2hpcHMhIFxyXG4gICAgICBDdXJyZW50IFNoaXA6IExlbmd0aCAke2N1cnJlbnRTaGlwLmxlbmd0aH1gLFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllckJvYXJkID4gLmxpbmUgPiAuc3F1YXJlJyk7XHJcblxyXG4gICAgZm9yIChjb25zdCBzcXVhcmUgb2Ygc3F1YXJlcykge1xyXG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXRTaGlwVmFsdWVzKHNxdWFyZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFNoaXBWYWx1ZXMoc3F1YXJlKSB7XHJcbiAgICAgIGlmIChmaXJzdENvb3JkID09PSAwKSB7XHJcbiAgICAgICAgZmlyc3RDb29yZCA9IFtwYXJzZUludChzcXVhcmUuaWRbMV0pLCBwYXJzZUludChbc3F1YXJlLmlkWzRdXSldO1xyXG5cclxuICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlY29uZENvb3JkID0gW3BhcnNlSW50KHNxdWFyZS5pZFsxXSksIHBhcnNlSW50KFtzcXVhcmUuaWRbNF1dKV07XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGZpcnN0Q29vcmRbMF0gIT09IHNlY29uZENvb3JkWzBdICYmXHJcbiAgICAgICAgICBmaXJzdENvb3JkWzFdICE9PSBzZWNvbmRDb29yZFsxXVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgc2V0dXBHYW1lKGJvYXJkLCBzaGlwcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChjdXJyZW50U2hpcC5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwLCBmaXJzdENvb3JkLCBzZWNvbmRDb29yZCk7XHJcbiAgICAgICAgICBzaGlwcy5zcGxpY2UoMCwgMSk7XHJcblxyXG4gICAgICAgICAgc2V0dXBHYW1lKGJvYXJkLCBzaGlwcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRHYW1lKGVuZW15Qm9hcmQsIGdhbWVCb2FyZCkge1xyXG4gIHBsYXllck1lc3NhZ2UoJ0dhbWUgU3RhcnQhIFlvdXIgdHVybiEnKTtcclxuXHJcbiAgc2V0VHVybihlbmVteUJvYXJkLCBnYW1lQm9hcmQpO1xyXG59XHJcblxyXG4oZnVuY3Rpb24gcmVzZXRCdXR0b24oKSB7XHJcbiAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKTtcclxuXHJcbiAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkcml2ZXIoKTtcclxuICB9KTtcclxufSkoKTtcclxuXHJcbihmdW5jdGlvbiByYW5kb21CdXR0b24oKSB7XHJcbiAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tJyk7XHJcblxyXG4gIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmFuZG9tTWFwKCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHJhbmRvbU1hcCgpIHtcclxuICAgIGNvbnN0IHNoaXBzID0gW1xyXG4gICAgICB7IGxlbmd0aDogNSB9LFxyXG4gICAgICB7IGxlbmd0aDogNCB9LFxyXG4gICAgICB7IGxlbmd0aDogMyB9LFxyXG4gICAgICB7IGxlbmd0aDogMyB9LFxyXG4gICAgICB7IGxlbmd0aDogMiB9LFxyXG4gICAgXTtcclxuXHJcbiAgICB3aGlsZSAoc2hpcHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXBzLnNoaWZ0KCk7XHJcblxyXG4gICAgICBjb25zdCByYW5kb21Db29yZCA9IFtcclxuICAgICAgICByYW5kb21OdW0ocGxheWVyR2FtZWJvYXJkLnNpemUpLFxyXG4gICAgICAgIHJhbmRvbU51bShwbGF5ZXJHYW1lYm9hcmQuc2l6ZSksXHJcbiAgICAgIF07XHJcblxyXG4gICAgICAvLyBjb25zdCBsb2NhdGlvbiA9IHBsYXllckdhbWVib2FyZC5ib2FyZDtcclxuXHJcbiAgICAgIGlmIChwbGF5ZXJHYW1lYm9hcmQuYm9hcmRbcmFuZG9tQ29vcmRbMF1dW3JhbmRvbUNvb3JkWzFdXSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGVtcHR5U3BhY2VzID0gdHJ5QWxsRGlyZWN0aW9ucyhcclxuICAgICAgICAgIFsncmlnaHQnLCAnbGVmdCcsICd1cCcsICdkb3duJ10sXHJcbiAgICAgICAgICByYW5kb21Db29yZCxcclxuICAgICAgICAgIGN1cnJlbnRTaGlwLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChlbXB0eVNwYWNlcykge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBlbXB0eVNwYWNlcykge1xyXG4gICAgICAgICAgICBwbGF5ZXJHYW1lYm9hcmQuYm9hcmRbaW5kZXhbMF1dW2luZGV4WzFdXSA9IG5ldyBTaGlwKFxyXG4gICAgICAgICAgICAgIGN1cnJlbnRTaGlwLmxlbmd0aCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gR2VuZXJhdGUgbmV3IGNvb3JkcyBhbmQgdHJ5IGFnYWluLlxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tRHJpdmVyKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TmV4dEluZGljZXMoY29vcmRzLCBkaXJlY3Rpb24sIHNpemUpIHtcclxuICAgICAgY29uc3QgbmV4dEluZGljZXMgPSBbXTtcclxuICAgICAgY29uc3QgW3gsIHldID0gY29vcmRzO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICBsZXQgbmV3WCA9IHg7XHJcbiAgICAgICAgbGV0IG5ld1kgPSB5O1xyXG5cclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICBuZXdZID0geSArIGk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgbmV3WSA9IHkgLSBpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcclxuICAgICAgICAgIG5ld1ggPSB4ICsgaTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV3WCA9IHggLSBpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV4dEluZGljZXMucHVzaChbbmV3WCwgbmV3WV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbmV4dEluZGljZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgY29vcmRzLCBzaGlwKSB7XHJcbiAgICAgIGNvbnN0IG5leHRJbmRpY2VzID0gZ2V0TmV4dEluZGljZXMoY29vcmRzLCBkaXJlY3Rpb24sIHNoaXAubGVuZ3RoKTtcclxuXHJcbiAgICAgIGNvbnN0IGlzRW1wdHkgPSAoY29vcmRzKSA9PlxyXG4gICAgICAgIHBsYXllckdhbWVib2FyZC5ib2FyZFtjb29yZHNbMF1dW2Nvb3Jkc1sxXV0gPT09IG51bGw7XHJcblxyXG4gICAgICBpZiAobmV4dEluZGljZXMuZXZlcnkoaXNFbXB0eSkpIHtcclxuICAgICAgICByZXR1cm4gbmV4dEluZGljZXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cnlBbGxEaXJlY3Rpb25zKGRpcmVjdGlvbnMsIGNvb3Jkcywgc2hpcCkge1xyXG4gICAgICBpZiAoZGlyZWN0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGRpcmVjdGlvbnMuc2hpZnQoKTtcclxuXHJcbiAgICAgIGNvbnN0IG5leHRJbmRpY2VzID0gdHJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgY29vcmRzLCBzaGlwKTtcclxuXHJcbiAgICAgIGlmIChuZXh0SW5kaWNlcykgcmV0dXJuIG5leHRJbmRpY2VzO1xyXG4gICAgICByZXR1cm4gdHJ5QWxsRGlyZWN0aW9ucyhkaXJlY3Rpb25zLCBjb29yZHMsIHNoaXApO1xyXG4gICAgfVxyXG4gIH1cclxufSkoKTtcclxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZC5qcyc7XHJcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbmVteUJvYXJkKHNpemUpIHtcclxuICBjb25zdCBlbmVteUJvYXJkID0gbmV3IEdhbWVib2FyZChzaXplKTtcclxuICBjb25zdCBzaGlwcyA9IFtcclxuICAgIHsgbGVuZ3RoOiA1IH0sXHJcbiAgICB7IGxlbmd0aDogNCB9LFxyXG4gICAgeyBsZW5ndGg6IDMgfSxcclxuICAgIHsgbGVuZ3RoOiAzIH0sXHJcbiAgICB7IGxlbmd0aDogMiB9LFxyXG4gIF07XHJcblxyXG4gIHdoaWxlIChzaGlwcy5sZW5ndGggPiAwKSB7XHJcbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXBzLnNoaWZ0KCk7XHJcbiAgICBjb25zdCBjcmVhdGVTaGlwID0gbmV3IFNoaXAoY3VycmVudFNoaXAubGVuZ3RoKTtcclxuXHJcbiAgICBjb25zdCBjb29yZHNTdGFydCA9IFtyYW5kb21OdW0oY3VycmVudFNoaXAubGVuZ3RoKSwgcmFuZG9tTnVtKHNpemUpXTtcclxuICAgIGxldCBjb29yZHNFbmQgPSBudWxsO1xyXG5cclxuICAgIGlmIChyYW5kb21OdW0oMikgPT09IDApIHtcclxuICAgICAgY29vcmRzRW5kID0gW2Nvb3Jkc1N0YXJ0WzBdLCBjb29yZHNTdGFydFsxXSArIChjdXJyZW50U2hpcC5sZW5ndGggLSAxKV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb29yZHNFbmQgPSBbY29vcmRzU3RhcnRbMF0gKyAoY3VycmVudFNoaXAubGVuZ3RoIC0gMSksIGNvb3Jkc1N0YXJ0WzFdXTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBlbmVteUJvYXJkLnBsYWNlU2hpcChjcmVhdGVTaGlwLCBjb29yZHNTdGFydCwgY29vcmRzRW5kKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIEVtcHR5XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBlbmVteUJvYXJkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbmVteUJvYXJkMihlbmVteUJvYXJkKSB7XHJcbiAgY29uc3Qgc2hpcHMgPSBbXHJcbiAgICB7IGxlbmd0aDogNSB9LFxyXG4gICAgeyBsZW5ndGg6IDQgfSxcclxuICAgIHsgbGVuZ3RoOiAzIH0sXHJcbiAgICB7IGxlbmd0aDogMyB9LFxyXG4gICAgeyBsZW5ndGg6IDIgfSxcclxuICBdO1xyXG5cclxuICB3aGlsZSAoc2hpcHMubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwcy5zaGlmdCgpO1xyXG5cclxuICAgIGNvbnN0IHJhbmRvbUNvb3JkID0gW1xyXG4gICAgICByYW5kb21OdW0oZW5lbXlCb2FyZC5zaXplKSxcclxuICAgICAgcmFuZG9tTnVtKGVuZW15Qm9hcmQuc2l6ZSksXHJcbiAgICBdO1xyXG5cclxuICAgIC8vIGNvbnN0IGxvY2F0aW9uID0gZW5lbXlCb2FyZC5ib2FyZDtcclxuXHJcbiAgICBpZiAoZW5lbXlCb2FyZC5ib2FyZFtyYW5kb21Db29yZFswXV1bcmFuZG9tQ29vcmRbMV1dID09PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGVtcHR5U3BhY2VzID0gdHJ5QWxsRGlyZWN0aW9ucyhcclxuICAgICAgICBbJ3JpZ2h0JywgJ2xlZnQnLCAndXAnLCAnZG93biddLFxyXG4gICAgICAgIHJhbmRvbUNvb3JkLFxyXG4gICAgICAgIGN1cnJlbnRTaGlwLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKGVtcHR5U3BhY2VzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBlbXB0eVNwYWNlcykge1xyXG4gICAgICAgICAgZW5lbXlCb2FyZC5ib2FyZFtpbmRleFswXV1baW5kZXhbMV1dID0gbmV3IFNoaXAoY3VycmVudFNoaXAubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNyZWF0ZUVuZW15Qm9hcmQyKG5ldyBHYW1lYm9hcmQoMTApKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldE5leHRJbmRpY2VzKGNvb3JkcywgZGlyZWN0aW9uLCBzaXplKSB7XHJcbiAgICBjb25zdCBuZXh0SW5kaWNlcyA9IFtdO1xyXG4gICAgY29uc3QgW3gsIHldID0gY29vcmRzO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgIGxldCBuZXdYID0geDtcclxuICAgICAgbGV0IG5ld1kgPSB5O1xyXG5cclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgIG5ld1kgPSB5ICsgaTtcclxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICAgIG5ld1kgPSB5IC0gaTtcclxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykge1xyXG4gICAgICAgIG5ld1ggPSB4ICsgaTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdYID0geCAtIGk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5leHRJbmRpY2VzLnB1c2goW25ld1gsIG5ld1ldKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV4dEluZGljZXM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0cnlEaXJlY3Rpb24oZGlyZWN0aW9uLCBjb29yZHMsIHNoaXApIHtcclxuICAgIGNvbnN0IG5leHRJbmRpY2VzID0gZ2V0TmV4dEluZGljZXMoY29vcmRzLCBkaXJlY3Rpb24sIHNoaXAubGVuZ3RoKTtcclxuXHJcbiAgICBjb25zdCBpc0VtcHR5ID0gKGNvb3JkcykgPT4gZW5lbXlCb2FyZC5ib2FyZFtjb29yZHNbMF1dW2Nvb3Jkc1sxXV0gPT09IG51bGw7XHJcblxyXG4gICAgaWYgKG5leHRJbmRpY2VzLmV2ZXJ5KGlzRW1wdHkpKSB7XHJcbiAgICAgIHJldHVybiBuZXh0SW5kaWNlcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0cnlBbGxEaXJlY3Rpb25zKGRpcmVjdGlvbnMsIGNvb3Jkcywgc2hpcCkge1xyXG4gICAgaWYgKGRpcmVjdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBkaXJlY3Rpb25zLnNoaWZ0KCk7XHJcblxyXG4gICAgY29uc3QgbmV4dEluZGljZXMgPSB0cnlEaXJlY3Rpb24oZGlyZWN0aW9uLCBjb29yZHMsIHNoaXApO1xyXG5cclxuICAgIGlmIChuZXh0SW5kaWNlcykgcmV0dXJuIG5leHRJbmRpY2VzO1xyXG4gICAgcmV0dXJuIHRyeUFsbERpcmVjdGlvbnMoZGlyZWN0aW9ucywgY29vcmRzLCBzaGlwKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbU51bShsaW1pdCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsaW1pdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlFbmVteUJvYXJkKGJvYXJkKSB7fVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlRW5lbXlCb2FyZCwgZGlzcGxheUVuZW15Qm9hcmQsIHJhbmRvbU51bSwgY3JlYXRlRW5lbXlCb2FyZDIgfTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XHJcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgIHRoaXMuaGVhbHRoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5pc1N1bmsgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhpdCgpIHtcclxuICAgIHRoaXMuaGVhbHRoLS07XHJcblxyXG4gICAgaWYgKHRoaXMuaGVhbHRoID09PSAwKSB0aGlzLnNpbmsoKTtcclxuXHJcbiAgICByZXR1cm4gJ1gnO1xyXG4gIH1cclxuXHJcbiAgc2luaygpIHtcclxuICAgIHRoaXMuaXNTdW5rID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmFuZG9tTnVtIH0gZnJvbSAnLi9wY0VuZW15LmpzJztcclxuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xyXG5pbXBvcnQgeyBkaXNwbGF5Qm9hcmQsIHBsYXllck1lc3NhZ2UgfSBmcm9tICcuL0RPTS5qcyc7XHJcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcC5qcyc7XHJcblxyXG5sZXQgdHVybiA9IG51bGw7XHJcblxyXG5mdW5jdGlvbiBzZXRUdXJuKGVuZW15Qm9hcmQsIHBsYXllckJvYXJkKSB7XHJcbiAgZGlzcGxheUJvYXJkKGVuZW15Qm9hcmQsIHRydWUpO1xyXG4gIGRpc3BsYXlCb2FyZChwbGF5ZXJCb2FyZCk7XHJcblxyXG4gIHR1cm4gPT09ICdwbGF5ZXInID8gKHR1cm4gPSAnZW5lbXknKSA6ICh0dXJuID0gJ3BsYXllcicpO1xyXG4gIHNldEZ1bmN0aW9uYWxpdHkoZW5lbXlCb2FyZCwgcGxheWVyQm9hcmQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRGdW5jdGlvbmFsaXR5KGVuZW15Qm9hcmQsIHBsYXllckJvYXJkKSB7XHJcbiAgY29uc3QgZW5lbXlTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICcuZW5lbXlCb2FyZCA+IC5saW5lID4gLnNxdWFyZScsXHJcbiAgKTtcclxuXHJcbiAgaWYgKHR1cm4gPT09ICdwbGF5ZXInKSB7XHJcbiAgICBmb3IgKGNvbnN0IHNxdWFyZSBvZiBlbmVteVNxdWFyZXMpIHtcclxuICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHBsYXllckZ1bmN0aW9uKHNxdWFyZSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKTtcclxuICAgICAgc3F1YXJlLl9jbGlja0xpc3RlbmVyID0gaGFuZGxlcjsgLy8gU3RvcmUgdGhlIGhhbmRsZXIgZm9yIGxhdGVyIHJlbW92YWxcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ0VuZW15IFR1cm4nKTtcclxuICAgIGZvciAoY29uc3Qgc3F1YXJlIG9mIGVuZW15U3F1YXJlcykge1xyXG4gICAgICBjb25zdCBoYW5kbGVyID0gc3F1YXJlLl9jbGlja0xpc3RlbmVyO1xyXG5cclxuICAgICAgaWYgKGhhbmRsZXIpIHtcclxuICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCByYW5kb20gY29vcmRpbmF0ZSBhbmQgYXR0YWNrLlxyXG4gICAgbGV0IGF0dGFja1Nwb3QgPSBbcmFuZG9tTnVtKDEwKSwgcmFuZG9tTnVtKDEwKV07IC8vIEhhcmRjb2RlZCB2YWx1ZTtcclxuXHJcbiAgICB3aGlsZSAoXHJcbiAgICAgIHR5cGVvZiBwbGF5ZXJCb2FyZC5ib2FyZFthdHRhY2tTcG90WzBdXVthdHRhY2tTcG90WzFdXSA9PT0gJ3N0cmluZydcclxuICAgICkge1xyXG4gICAgICBhdHRhY2tTcG90ID0gW3JhbmRvbU51bSgxMCksIHJhbmRvbU51bSgxMCldO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrU3BvdFswXSwgYXR0YWNrU3BvdFsxXSk7XHJcblxyXG4gICAgaWYgKGNoZWNrVmljdG9yeShwbGF5ZXJCb2FyZCkpIHBsYXllck1lc3NhZ2UoJ1lvdSBMb3N0IScpO1xyXG4gICAgZWxzZSBzZXRUdXJuKGVuZW15Qm9hcmQsIHBsYXllckJvYXJkKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYXllckZ1bmN0aW9uID0gKHNxdWFyZSkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBlbmVteUJvYXJkLmJvYXJkW3NxdWFyZS5pZFsxXV1bc3F1YXJlLmlkWzRdXSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHNxdWFyZS5pZFsxXSwgc3F1YXJlLmlkWzRdKTtcclxuXHJcbiAgICAgIGlmIChjaGVja1ZpY3RvcnkoZW5lbXlCb2FyZCkpIHBsYXllck1lc3NhZ2UoJ1lvdSBXaW4hJyk7XHJcbiAgICAgIGVsc2Ugc2V0VHVybihlbmVteUJvYXJkLCBwbGF5ZXJCb2FyZCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWaWN0b3J5KGJvYXJkKSB7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuICBmb3IgKGNvbnN0IGxpbmUgb2YgYm9hcmQuYm9hcmQpIHtcclxuICAgIGlmIChsaW5lLnNvbWUoKGFycikgPT4gYXJyIGluc3RhbmNlb2YgU2hpcCkpIGNvdW50Kys7XHJcbiAgfVxyXG5cclxuICBpZiAoY291bnQgPT09IDApIHJldHVybiB0cnVlO1xyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNldFR1cm4gfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=