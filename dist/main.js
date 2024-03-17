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
      tryPlacing(currentShip);
    }

    function tryPlacing(currentShip) {
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
        tryPlacing(currentShip);
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
    tryPlacing(currentShip);
  }

  function tryPlacing(currentShip) {
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
      tryPlacing(currentShip);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC10ZW1wbGF0ZS8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtdGVtcGxhdGUvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXRlbXBsYXRlLy4vc3JjL3BjRW5lbXkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtdGVtcGxhdGUvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC10ZW1wbGF0ZS8uL3NyYy90dXJuQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC10ZW1wbGF0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXRlbXBsYXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC10ZW1wbGF0ZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uYXBwIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ucGxheWVySGFsZiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ucGxheWVySGFsZiAuaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYXllckJvYXJkLFxyXG4uZW5lbXlCb2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4ucGxheWVyQm9hcmQgLmxpbmUsXHJcbi5lbmVteUJvYXJkIC5saW5lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5saW5lIC5zcXVhcmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJIYWxmIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVySGFsZiAuaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJCb2FyZCxcXHJcXG4uZW5lbXlCb2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyQm9hcmQgLmxpbmUsXFxyXFxuLmVuZW15Qm9hcmQgLmxpbmUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGluZSAuc3F1YXJlIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGRyaXZlciB9IGZyb20gJy4vaW5kZXguanMnO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xyXG5cclxuZnVuY3Rpb24gZGlzcGxheUJvYXJkKGJvYXJkLCBlbmVteSA9IGZhbHNlKSB7XHJcbiAgbGV0IGRvbVBCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJCb2FyZCcpO1xyXG5cclxuICBpZiAoZW5lbXkpIHtcclxuICAgIGRvbVBCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteUJvYXJkJyk7XHJcbiAgfVxyXG5cclxuICB3aGlsZSAoZG9tUEJvYXJkLmZpcnN0Q2hpbGQpIHtcclxuICAgIGRvbVBCb2FyZC5yZW1vdmVDaGlsZChkb21QQm9hcmQuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IGxpbmUgb2YgYm9hcmQuYm9hcmQpIHtcclxuICAgIGNvbnN0IGJvYXJkTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm9hcmRMaW5lLmNsYXNzTGlzdC5hZGQoJ2xpbmUnKTtcclxuICAgIGxldCBpID0gLTE7XHJcbiAgICBmb3IgKGNvbnN0IHNxdWFyZSBvZiBsaW5lKSB7XHJcbiAgICAgIGkrKztcclxuICAgICAgY29uc3QgYm9hcmRTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgYm9hcmRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XHJcbiAgICAgIGJvYXJkU3F1YXJlLmlkID0gYFske2JvYXJkLmJvYXJkLmluZGV4T2YobGluZSl9LCAke2l9XWA7XHJcblxyXG4gICAgICBzd2l0Y2ggKHNxdWFyZSkge1xyXG4gICAgICAgIGNhc2UgbnVsbDpcclxuICAgICAgICAgIC8vICAgYm9hcmRTcXVhcmUudGV4dENvbnRlbnQgPSAnMCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdYJzpcclxuICAgICAgICAgIGJvYXJkU3F1YXJlLnRleHRDb250ZW50ID0gJ1gnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnTyc6XHJcbiAgICAgICAgICBib2FyZFNxdWFyZS50ZXh0Q29udGVudCA9ICdPJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBpZiAoZW5lbXkpIHtcclxuICAgICAgICAgICAgLyogRG8gTm90aGluZyAqL1xyXG4gICAgICAgICAgfSBlbHNlIGJvYXJkU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcclxuICAgICAgfVxyXG5cclxuICAgICAgYm9hcmRMaW5lLmFwcGVuZENoaWxkKGJvYXJkU3F1YXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBkb21QQm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRMaW5lKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXllck1lc3NhZ2UobWVzc2FnZSkge1xyXG4gIGNvbnN0IG1lc3NhZ2VBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllck1lc3NhZ2UnKTtcclxuXHJcbiAgbWVzc2FnZUFyZWEudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG59XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5Qm9hcmQsIHBsYXllck1lc3NhZ2UgfTtcclxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XHJcbiAgY29uc3RydWN0b3Ioc2l6ZSkge1xyXG4gICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgIHRoaXMucm93cyA9IHNpemU7XHJcbiAgICB0aGlzLmNvbHVtbnMgPSBzaXplO1xyXG4gICAgdGhpcy5ib2FyZCA9IHRoaXMubWFrZUJvYXJkKCk7XHJcbiAgfVxyXG5cclxuICBtYWtlQm9hcmQoKSB7XHJcbiAgICBjb25zdCBib2FyZCA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcclxuICAgICAgYm9hcmQucHVzaChuZXcgQXJyYXkodGhpcy5jb2x1bW5zKS5maWxsKG51bGwpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYm9hcmQ7XHJcbiAgfVxyXG5cclxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy5ib2FyZFt4XVt5XTtcclxuXHJcbiAgICBzd2l0Y2ggKGxvY2F0aW9uKSB7XHJcbiAgICAgIGNhc2UgbnVsbDpcclxuICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gJ08nO1xyXG4gICAgICAgIHJldHVybiAnbWlzcyc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhpcy5ib2FyZFt4XVt5XS5oaXQoKTtcclxuICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gJ1gnO1xyXG4gICAgICAgIHJldHVybiAnaGl0JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBsYWNlU2hpcChzaGlwLCBzdGFydCwgZW5kKSB7XHJcbiAgICBpZiAodGhpcy5ib2FyZFtzdGFydFswXV0gPT09IHRoaXMuYm9hcmRbZW5kWzBdXSkge1xyXG4gICAgICBsZXQgd2lkID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbc3RhcnRbMF1dW3N0YXJ0WzFdICsgaV0gPT09IG51bGwpIHtcclxuICAgICAgICAgIHdpZCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHdpZCA9PT0gc2hpcC5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHRoaXMuYm9hcmRbc3RhcnRbMF1dW3N0YXJ0WzFdICsgaV0gPSBzaGlwO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBwbGFjZSBzaGlwIVwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmJvYXJkW3N0YXJ0WzFdXSA9PT0gdGhpcy5ib2FyZFtlbmRbMV1dKSB7XHJcbiAgICAgIGxldCBsZW4gPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGhpcy5ib2FyZFtzdGFydFswXSArIGldW3N0YXJ0WzFdXSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgbGVuKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobGVuID09PSBzaGlwLmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdGhpcy5ib2FyZFtzdGFydFswXSArIGldW3N0YXJ0WzFdXSA9IHNoaXA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHBsYWNlIHNoaXAhXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBwbGFjZSBzaGlwIVwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIGNvbnN0IGdhbWVCb2FyZCA9IG5ldyBHYW1lYm9hcmQoMTApO1xyXG4vLyBjb25zdCBzaGlwID0gbmV3IFNoaXAoMyk7XHJcbi8vIGNvbnN0IG5ld1NoaXAgPSBuZXcgU2hpcCgyKTtcclxuXHJcbi8vIGdhbWVCb2FyZC5wbGFjZVNoaXAoc2hpcCwgWzAsIDFdLCBbMCwgM10pO1xyXG5cclxuLy8gZ2FtZUJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBbMywgMV0sIFszLCAyXSk7XHJcblxyXG4vLyBnYW1lQm9hcmQucmVjZWl2ZUF0dGFjayg1LCAzKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKDAsIDEpKTtcclxuXHJcbi8vIGNvbnNvbGUudGFibGUoZ2FtZUJvYXJkLmJvYXJkKTtcclxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XHJcbmltcG9ydCB7IGNyZWF0ZUVuZW15Qm9hcmQsIHJhbmRvbU51bSwgY3JlYXRlRW5lbXlCb2FyZDIgfSBmcm9tICcuL3BjRW5lbXkuanMnO1xyXG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgZGlzcGxheUJvYXJkLCBwbGF5ZXJNZXNzYWdlIH0gZnJvbSAnLi9ET00uanMnO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xyXG5pbXBvcnQgeyBzZXRUdXJuIH0gZnJvbSAnLi90dXJuQ29udHJvbGxlci5qcyc7XHJcblxyXG5sZXQgcGxheWVyR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgxMCk7XHJcbmxldCBlbmVteUJvYXJkID0gbmV3IEdhbWVib2FyZCgxMCk7XHJcbmRyaXZlcigpO1xyXG5cclxuZnVuY3Rpb24gZHJpdmVyKCkge1xyXG4gIHBsYXllckdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoMTApO1xyXG4gIGVuZW15Qm9hcmQgPSBuZXcgR2FtZWJvYXJkKDEwKTtcclxuICBjcmVhdGVFbmVteUJvYXJkMihlbmVteUJvYXJkKTtcclxuXHJcbiAgZGlzcGxheUJvYXJkKGVuZW15Qm9hcmQsIHRydWUpO1xyXG4gIHNldHVwR2FtZShwbGF5ZXJHYW1lYm9hcmQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21Ecml2ZXIoKSB7XHJcbiAgZGlzcGxheUJvYXJkKHBsYXllckdhbWVib2FyZCk7XHJcbiAgZGlzcGxheUJvYXJkKGVuZW15Qm9hcmQsIHRydWUpO1xyXG5cclxuICBzdGFydEdhbWUoZW5lbXlCb2FyZCwgcGxheWVyR2FtZWJvYXJkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBHYW1lKFxyXG4gIGJvYXJkLFxyXG4gIHNoaXBzID0gW1xyXG4gICAgeyBsZW5ndGg6IDUgfSxcclxuICAgIHsgbGVuZ3RoOiA0IH0sXHJcbiAgICB7IGxlbmd0aDogMyB9LFxyXG4gICAgeyBsZW5ndGg6IDMgfSxcclxuICAgIHsgbGVuZ3RoOiAyIH0sXHJcbiAgXSxcclxuKSB7XHJcbiAgZGlzcGxheUJvYXJkKGJvYXJkKTtcclxuXHJcbiAgaWYgKHNoaXBzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIHN0YXJ0R2FtZShlbmVteUJvYXJkLCBwbGF5ZXJHYW1lYm9hcmQpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGZpcnN0Q29vcmQgPSAwO1xyXG4gIGxldCBzZWNvbmRDb29yZCA9IDA7XHJcbiAgKGZ1bmN0aW9uIHBsYWNlU2hpcHMoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXBzWzBdO1xyXG5cclxuICAgIHBsYXllck1lc3NhZ2UoXHJcbiAgICAgIGBQbGFjZSB5b3VyIHNoaXBzISBcclxuICAgICAgQ3VycmVudCBTaGlwOiBMZW5ndGggJHtjdXJyZW50U2hpcC5sZW5ndGh9YCxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXJCb2FyZCA+IC5saW5lID4gLnNxdWFyZScpO1xyXG5cclxuICAgIGZvciAoY29uc3Qgc3F1YXJlIG9mIHNxdWFyZXMpIHtcclxuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0U2hpcFZhbHVlcyhzcXVhcmUpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTaGlwVmFsdWVzKHNxdWFyZSkge1xyXG4gICAgICBpZiAoZmlyc3RDb29yZCA9PT0gMCkge1xyXG4gICAgICAgIGZpcnN0Q29vcmQgPSBbcGFyc2VJbnQoc3F1YXJlLmlkWzFdKSwgcGFyc2VJbnQoW3NxdWFyZS5pZFs0XV0pXTtcclxuXHJcbiAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZWNvbmRDb29yZCA9IFtwYXJzZUludChzcXVhcmUuaWRbMV0pLCBwYXJzZUludChbc3F1YXJlLmlkWzRdXSldO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBmaXJzdENvb3JkWzBdICE9PSBzZWNvbmRDb29yZFswXSAmJlxyXG4gICAgICAgICAgZmlyc3RDb29yZFsxXSAhPT0gc2Vjb25kQ29vcmRbMV1cclxuICAgICAgICApIHtcclxuICAgICAgICAgIHNldHVwR2FtZShib2FyZCwgc2hpcHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoY3VycmVudFNoaXAubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcCwgZmlyc3RDb29yZCwgc2Vjb25kQ29vcmQpO1xyXG4gICAgICAgICAgc2hpcHMuc3BsaWNlKDAsIDEpO1xyXG5cclxuICAgICAgICAgIHNldHVwR2FtZShib2FyZCwgc2hpcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0R2FtZShlbmVteUJvYXJkLCBnYW1lQm9hcmQpIHtcclxuICBwbGF5ZXJNZXNzYWdlKCdHYW1lIFN0YXJ0ISBZb3VyIHR1cm4hJyk7XHJcblxyXG4gIHNldFR1cm4oZW5lbXlCb2FyZCwgZ2FtZUJvYXJkKTtcclxufVxyXG5cclxuKGZ1bmN0aW9uIHJlc2V0QnV0dG9uKCkge1xyXG4gIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0Jyk7XHJcblxyXG4gIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZHJpdmVyKCk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcblxyXG4oZnVuY3Rpb24gcmFuZG9tQnV0dG9uKCkge1xyXG4gIGNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbScpO1xyXG5cclxuICByZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJhbmRvbU1hcCgpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiByYW5kb21NYXAoKSB7XHJcbiAgICBjb25zdCBzaGlwcyA9IFtcclxuICAgICAgeyBsZW5ndGg6IDUgfSxcclxuICAgICAgeyBsZW5ndGg6IDQgfSxcclxuICAgICAgeyBsZW5ndGg6IDMgfSxcclxuICAgICAgeyBsZW5ndGg6IDMgfSxcclxuICAgICAgeyBsZW5ndGg6IDIgfSxcclxuICAgIF07XHJcblxyXG4gICAgd2hpbGUgKHNoaXBzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwcy5zaGlmdCgpO1xyXG4gICAgICB0cnlQbGFjaW5nKGN1cnJlbnRTaGlwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cnlQbGFjaW5nKGN1cnJlbnRTaGlwKSB7XHJcbiAgICAgIGNvbnN0IHJhbmRvbUNvb3JkID0gW1xyXG4gICAgICAgIHJhbmRvbU51bShwbGF5ZXJHYW1lYm9hcmQuc2l6ZSksXHJcbiAgICAgICAgcmFuZG9tTnVtKHBsYXllckdhbWVib2FyZC5zaXplKSxcclxuICAgICAgXTtcclxuXHJcbiAgICAgIC8vIGNvbnN0IGxvY2F0aW9uID0gcGxheWVyR2FtZWJvYXJkLmJvYXJkO1xyXG5cclxuICAgICAgaWYgKHBsYXllckdhbWVib2FyZC5ib2FyZFtyYW5kb21Db29yZFswXV1bcmFuZG9tQ29vcmRbMV1dID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlTcGFjZXMgPSB0cnlBbGxEaXJlY3Rpb25zKFxyXG4gICAgICAgICAgWydyaWdodCcsICdsZWZ0JywgJ3VwJywgJ2Rvd24nXSxcclxuICAgICAgICAgIHJhbmRvbUNvb3JkLFxyXG4gICAgICAgICAgY3VycmVudFNoaXAsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGVtcHR5U3BhY2VzKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIGVtcHR5U3BhY2VzKSB7XHJcbiAgICAgICAgICAgIHBsYXllckdhbWVib2FyZC5ib2FyZFtpbmRleFswXV1baW5kZXhbMV1dID0gbmV3IFNoaXAoXHJcbiAgICAgICAgICAgICAgY3VycmVudFNoaXAubGVuZ3RoLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0cnlQbGFjaW5nKGN1cnJlbnRTaGlwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbURyaXZlcigpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldE5leHRJbmRpY2VzKGNvb3JkcywgZGlyZWN0aW9uLCBzaXplKSB7XHJcbiAgICAgIGNvbnN0IG5leHRJbmRpY2VzID0gW107XHJcbiAgICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkcztcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG5ld1ggPSB4O1xyXG4gICAgICAgIGxldCBuZXdZID0geTtcclxuXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgbmV3WSA9IHkgKyBpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgIG5ld1kgPSB5IC0gaTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XHJcbiAgICAgICAgICBuZXdYID0geCArIGk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5ld1ggPSB4IC0gaTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5leHRJbmRpY2VzLnB1c2goW25ld1gsIG5ld1ldKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5leHRJbmRpY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRyeURpcmVjdGlvbihkaXJlY3Rpb24sIGNvb3Jkcywgc2hpcCkge1xyXG4gICAgICBjb25zdCBuZXh0SW5kaWNlcyA9IGdldE5leHRJbmRpY2VzKGNvb3JkcywgZGlyZWN0aW9uLCBzaGlwLmxlbmd0aCk7XHJcblxyXG4gICAgICBjb25zdCBpc0VtcHR5ID0gKGNvb3JkcykgPT5cclxuICAgICAgICBwbGF5ZXJHYW1lYm9hcmQuYm9hcmRbY29vcmRzWzBdXVtjb29yZHNbMV1dID09PSBudWxsO1xyXG5cclxuICAgICAgaWYgKG5leHRJbmRpY2VzLmV2ZXJ5KGlzRW1wdHkpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5leHRJbmRpY2VzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJ5QWxsRGlyZWN0aW9ucyhkaXJlY3Rpb25zLCBjb29yZHMsIHNoaXApIHtcclxuICAgICAgaWYgKGRpcmVjdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBkaXJlY3Rpb25zLnNoaWZ0KCk7XHJcblxyXG4gICAgICBjb25zdCBuZXh0SW5kaWNlcyA9IHRyeURpcmVjdGlvbihkaXJlY3Rpb24sIGNvb3Jkcywgc2hpcCk7XHJcblxyXG4gICAgICBpZiAobmV4dEluZGljZXMpIHJldHVybiBuZXh0SW5kaWNlcztcclxuICAgICAgcmV0dXJuIHRyeUFsbERpcmVjdGlvbnMoZGlyZWN0aW9ucywgY29vcmRzLCBzaGlwKTtcclxuICAgIH1cclxuICB9XHJcbn0pKCk7XHJcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRW5lbXlCb2FyZChzaXplKSB7XHJcbiAgY29uc3QgZW5lbXlCb2FyZCA9IG5ldyBHYW1lYm9hcmQoc2l6ZSk7XHJcbiAgY29uc3Qgc2hpcHMgPSBbXHJcbiAgICB7IGxlbmd0aDogNSB9LFxyXG4gICAgeyBsZW5ndGg6IDQgfSxcclxuICAgIHsgbGVuZ3RoOiAzIH0sXHJcbiAgICB7IGxlbmd0aDogMyB9LFxyXG4gICAgeyBsZW5ndGg6IDIgfSxcclxuICBdO1xyXG5cclxuICB3aGlsZSAoc2hpcHMubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwcy5zaGlmdCgpO1xyXG4gICAgY29uc3QgY3JlYXRlU2hpcCA9IG5ldyBTaGlwKGN1cnJlbnRTaGlwLmxlbmd0aCk7XHJcblxyXG4gICAgY29uc3QgY29vcmRzU3RhcnQgPSBbcmFuZG9tTnVtKGN1cnJlbnRTaGlwLmxlbmd0aCksIHJhbmRvbU51bShzaXplKV07XHJcbiAgICBsZXQgY29vcmRzRW5kID0gbnVsbDtcclxuXHJcbiAgICBpZiAocmFuZG9tTnVtKDIpID09PSAwKSB7XHJcbiAgICAgIGNvb3Jkc0VuZCA9IFtjb29yZHNTdGFydFswXSwgY29vcmRzU3RhcnRbMV0gKyAoY3VycmVudFNoaXAubGVuZ3RoIC0gMSldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29vcmRzRW5kID0gW2Nvb3Jkc1N0YXJ0WzBdICsgKGN1cnJlbnRTaGlwLmxlbmd0aCAtIDEpLCBjb29yZHNTdGFydFsxXV07XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgZW5lbXlCb2FyZC5wbGFjZVNoaXAoY3JlYXRlU2hpcCwgY29vcmRzU3RhcnQsIGNvb3Jkc0VuZCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBFbXB0eVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZW5lbXlCb2FyZDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRW5lbXlCb2FyZDIoZW5lbXlCb2FyZCkge1xyXG4gIGNvbnN0IHNoaXBzID0gW1xyXG4gICAgeyBsZW5ndGg6IDUgfSxcclxuICAgIHsgbGVuZ3RoOiA0IH0sXHJcbiAgICB7IGxlbmd0aDogMyB9LFxyXG4gICAgeyBsZW5ndGg6IDMgfSxcclxuICAgIHsgbGVuZ3RoOiAyIH0sXHJcbiAgXTtcclxuXHJcbiAgd2hpbGUgKHNoaXBzLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gc2hpcHMuc2hpZnQoKTtcclxuICAgIHRyeVBsYWNpbmcoY3VycmVudFNoaXApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdHJ5UGxhY2luZyhjdXJyZW50U2hpcCkge1xyXG4gICAgY29uc3QgcmFuZG9tQ29vcmQgPSBbXHJcbiAgICAgIHJhbmRvbU51bShlbmVteUJvYXJkLnNpemUpLFxyXG4gICAgICByYW5kb21OdW0oZW5lbXlCb2FyZC5zaXplKSxcclxuICAgIF07XHJcblxyXG4gICAgLy8gY29uc3QgbG9jYXRpb24gPSBlbmVteUJvYXJkLmJvYXJkO1xyXG5cclxuICAgIGlmIChlbmVteUJvYXJkLmJvYXJkW3JhbmRvbUNvb3JkWzBdXVtyYW5kb21Db29yZFsxXV0gPT09IG51bGwpIHtcclxuICAgICAgY29uc3QgZW1wdHlTcGFjZXMgPSB0cnlBbGxEaXJlY3Rpb25zKFxyXG4gICAgICAgIFsncmlnaHQnLCAnbGVmdCcsICd1cCcsICdkb3duJ10sXHJcbiAgICAgICAgcmFuZG9tQ29vcmQsXHJcbiAgICAgICAgY3VycmVudFNoaXAsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoZW1wdHlTcGFjZXMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGluZGV4IG9mIGVtcHR5U3BhY2VzKSB7XHJcbiAgICAgICAgICBlbmVteUJvYXJkLmJvYXJkW2luZGV4WzBdXVtpbmRleFsxXV0gPSBuZXcgU2hpcChjdXJyZW50U2hpcC5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJ5UGxhY2luZyhjdXJyZW50U2hpcCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXROZXh0SW5kaWNlcyhjb29yZHMsIGRpcmVjdGlvbiwgc2l6ZSkge1xyXG4gICAgY29uc3QgbmV4dEluZGljZXMgPSBbXTtcclxuICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkcztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICBsZXQgbmV3WCA9IHg7XHJcbiAgICAgIGxldCBuZXdZID0geTtcclxuXHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcclxuICAgICAgICBuZXdZID0geSArIGk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcclxuICAgICAgICBuZXdZID0geSAtIGk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcclxuICAgICAgICBuZXdYID0geCArIGk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3WCA9IHggLSBpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBuZXh0SW5kaWNlcy5wdXNoKFtuZXdYLCBuZXdZXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHRJbmRpY2VzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdHJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgY29vcmRzLCBzaGlwKSB7XHJcbiAgICBjb25zdCBuZXh0SW5kaWNlcyA9IGdldE5leHRJbmRpY2VzKGNvb3JkcywgZGlyZWN0aW9uLCBzaGlwLmxlbmd0aCk7XHJcblxyXG4gICAgY29uc3QgaXNFbXB0eSA9IChjb29yZHMpID0+IGVuZW15Qm9hcmQuYm9hcmRbY29vcmRzWzBdXVtjb29yZHNbMV1dID09PSBudWxsO1xyXG5cclxuICAgIGlmIChuZXh0SW5kaWNlcy5ldmVyeShpc0VtcHR5KSkge1xyXG4gICAgICByZXR1cm4gbmV4dEluZGljZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdHJ5QWxsRGlyZWN0aW9ucyhkaXJlY3Rpb25zLCBjb29yZHMsIHNoaXApIHtcclxuICAgIGlmIChkaXJlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5zaGlmdCgpO1xyXG5cclxuICAgIGNvbnN0IG5leHRJbmRpY2VzID0gdHJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgY29vcmRzLCBzaGlwKTtcclxuXHJcbiAgICBpZiAobmV4dEluZGljZXMpIHJldHVybiBuZXh0SW5kaWNlcztcclxuICAgIHJldHVybiB0cnlBbGxEaXJlY3Rpb25zKGRpcmVjdGlvbnMsIGNvb3Jkcywgc2hpcCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21OdW0obGltaXQpIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGltaXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5RW5lbXlCb2FyZChib2FyZCkge31cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUVuZW15Qm9hcmQsIGRpc3BsYXlFbmVteUJvYXJkLCByYW5kb21OdW0sIGNyZWF0ZUVuZW15Qm9hcmQyIH07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLmhlYWx0aCA9IGxlbmd0aDtcclxuICAgIHRoaXMuaXNTdW5rID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBoaXQoKSB7XHJcbiAgICB0aGlzLmhlYWx0aC0tO1xyXG5cclxuICAgIGlmICh0aGlzLmhlYWx0aCA9PT0gMCkgdGhpcy5zaW5rKCk7XHJcblxyXG4gICAgcmV0dXJuICdYJztcclxuICB9XHJcblxyXG4gIHNpbmsoKSB7XHJcbiAgICB0aGlzLmlzU3VuayA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHJhbmRvbU51bSB9IGZyb20gJy4vcGNFbmVteS5qcyc7XHJcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcclxuaW1wb3J0IHsgZGlzcGxheUJvYXJkLCBwbGF5ZXJNZXNzYWdlIH0gZnJvbSAnLi9ET00uanMnO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAuanMnO1xyXG5cclxubGV0IHR1cm4gPSBudWxsO1xyXG5cclxuZnVuY3Rpb24gc2V0VHVybihlbmVteUJvYXJkLCBwbGF5ZXJCb2FyZCkge1xyXG4gIGRpc3BsYXlCb2FyZChlbmVteUJvYXJkLCB0cnVlKTtcclxuICBkaXNwbGF5Qm9hcmQocGxheWVyQm9hcmQpO1xyXG5cclxuICB0dXJuID09PSAncGxheWVyJyA/ICh0dXJuID0gJ2VuZW15JykgOiAodHVybiA9ICdwbGF5ZXInKTtcclxuICBzZXRGdW5jdGlvbmFsaXR5KGVuZW15Qm9hcmQsIHBsYXllckJvYXJkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RnVuY3Rpb25hbGl0eShlbmVteUJvYXJkLCBwbGF5ZXJCb2FyZCkge1xyXG4gIGNvbnN0IGVuZW15U3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAnLmVuZW15Qm9hcmQgPiAubGluZSA+IC5zcXVhcmUnLFxyXG4gICk7XHJcblxyXG4gIGlmICh0dXJuID09PSAncGxheWVyJykge1xyXG4gICAgZm9yIChjb25zdCBzcXVhcmUgb2YgZW5lbXlTcXVhcmVzKSB7XHJcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBwbGF5ZXJGdW5jdGlvbihzcXVhcmUpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XHJcbiAgICAgIHNxdWFyZS5fY2xpY2tMaXN0ZW5lciA9IGhhbmRsZXI7IC8vIFN0b3JlIHRoZSBoYW5kbGVyIGZvciBsYXRlciByZW1vdmFsXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKCdFbmVteSBUdXJuJyk7XHJcbiAgICBmb3IgKGNvbnN0IHNxdWFyZSBvZiBlbmVteVNxdWFyZXMpIHtcclxuICAgICAgY29uc3QgaGFuZGxlciA9IHNxdWFyZS5fY2xpY2tMaXN0ZW5lcjtcclxuXHJcbiAgICAgIGlmIChoYW5kbGVyKSB7XHJcbiAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgcmFuZG9tIGNvb3JkaW5hdGUgYW5kIGF0dGFjay5cclxuICAgIGxldCBhdHRhY2tTcG90ID0gW3JhbmRvbU51bSgxMCksIHJhbmRvbU51bSgxMCldOyAvLyBIYXJkY29kZWQgdmFsdWU7XHJcblxyXG4gICAgd2hpbGUgKFxyXG4gICAgICB0eXBlb2YgcGxheWVyQm9hcmQuYm9hcmRbYXR0YWNrU3BvdFswXV1bYXR0YWNrU3BvdFsxXV0gPT09ICdzdHJpbmcnXHJcbiAgICApIHtcclxuICAgICAgYXR0YWNrU3BvdCA9IFtyYW5kb21OdW0oMTApLCByYW5kb21OdW0oMTApXTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja1Nwb3RbMF0sIGF0dGFja1Nwb3RbMV0pO1xyXG5cclxuICAgIGlmIChjaGVja1ZpY3RvcnkocGxheWVyQm9hcmQpKSBwbGF5ZXJNZXNzYWdlKCdZb3UgTG9zdCEnKTtcclxuICAgIGVsc2Ugc2V0VHVybihlbmVteUJvYXJkLCBwbGF5ZXJCb2FyZCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGF5ZXJGdW5jdGlvbiA9IChzcXVhcmUpID0+IHtcclxuICAgIGlmICh0eXBlb2YgZW5lbXlCb2FyZC5ib2FyZFtzcXVhcmUuaWRbMV1dW3NxdWFyZS5pZFs0XV0gIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayhzcXVhcmUuaWRbMV0sIHNxdWFyZS5pZFs0XSk7XHJcblxyXG4gICAgICBpZiAoY2hlY2tWaWN0b3J5KGVuZW15Qm9hcmQpKSBwbGF5ZXJNZXNzYWdlKCdZb3UgV2luIScpO1xyXG4gICAgICBlbHNlIHNldFR1cm4oZW5lbXlCb2FyZCwgcGxheWVyQm9hcmQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVmljdG9yeShib2FyZCkge1xyXG4gIGxldCBjb3VudCA9IDA7XHJcbiAgZm9yIChjb25zdCBsaW5lIG9mIGJvYXJkLmJvYXJkKSB7XHJcbiAgICBpZiAobGluZS5zb21lKChhcnIpID0+IGFyciBpbnN0YW5jZW9mIFNoaXApKSBjb3VudCsrO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvdW50ID09PSAwKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgeyBzZXRUdXJuIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9