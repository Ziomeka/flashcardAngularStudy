(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-container\">\n  <h1 class=\"app-title\">{{ title }}</h1>\n  <app-flashcards></app-flashcards>\n</div>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/flashcard/flashcard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/flashcard/flashcard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='card' [ngClass]=\"setFlippedClass()\" (click)=\"flipCard()\">\r\n  <span class='card__text card__text--question'>{{ card.question }}</span>\r\n  <span class='card__text card__text--answer'>{{ card.answer }}</span>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/flashcards-controls/flashcards-controls.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/flashcards-controls/flashcards-controls.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"controls\">\n  <button (click)=\"prev()\" *ngIf=\"showPrev\" class=\"btn controls__btn controls__btn--prev\"><< Prev</button>\n  <button (click)=\"next()\" *ngIf=\"showNext\" class=\"btn controls__btn controls__btn--next\">Next >></button>\n  <button (click)=\"reset()\" *ngIf=\"showReset\" class=\"btn controls__btn controls__btn--restart\">Restart</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/flashcards/flashcards.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/flashcards/flashcards.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-flashcard [card]=\"flashcards[deck.currentIndex]\"></app-flashcard>\n  <app-flashcards-controls [deck]=\"deck\" (currentIndex)=\"setCurrentIndex($event)\"></app-flashcards-controls>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-container {\n  max-width: 30rem;\n  margin: 0 auto;\n  background: rgba(255, 255, 255, 0.3);\n  height: 100vh;\n  border-left: 0.1rem #34bd82 solid;\n  border-right: 0.1rem #34bd82 solid;\n}\n@media (min-width: 768px) {\n  .app-container {\n    max-width: 50rem;\n  }\n}\n.app-title {\n  text-align: center;\n  padding: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFBvemlvbWtpXFxFZHVjYXRpb25hbFByb2plY3RzXFxmbGFzaGNhcmRBbmd1bGFyU3R1ZHkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQzpcXFBvemlvbWtpXFxFZHVjYXRpb25hbFByb2plY3RzXFxmbGFzaGNhcmRBbmd1bGFyU3R1ZHkvc3JjXFxhYnN0cmFjdC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0N5QmtCO0VEeEJsQixhQUFBO0VBQ0EsaUNBTFM7RUFNVCxrQ0FOUztBRUlYO0FESU07RURUTjtJQVNJLGdCQUFBO0VFQUY7QUFDRjtBRkdBO0VBQ0Usa0JBQUE7RUFDQSxlQ2lCZTtBQ2pCakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9hYnN0cmFjdC5zY3NzJztcclxuXHJcbi5hcHAtY29udGFpbmVyIHtcclxuICAkYm9yZGVyOiAuMXJlbSBkYXJrZW4oJGdyZWVuLWp1bmdsZS1lbmQsIC45KSBzb2xpZDtcclxuICBtYXgtd2lkdGg6IDMwcmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICR3aGl0ZS10cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJvcmRlci1sZWZ0OiAkYm9yZGVyO1xyXG4gIGJvcmRlci1yaWdodDogJGJvcmRlcjtcclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1kKSB7XHJcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmFwcC10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6ICRzdGFuZGFyZC1zcGFjZTtcclxufVxyXG4iLCIvLyBCcmVha3BvaW50c1xyXG4kd2lkdGgtbGc6IDEyMDBweDtcclxuJHdpZHRoLW1kOiA3NjhweDtcclxuJHdpZHRoLXNtOiA1MDBweDtcclxuXHJcbkBtaXhpbiBicmVha3BvaW50KCRjbGFzcykge1xyXG4gIEBpZiAkY2xhc3MgPT0gc20ge1xyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoLXNtKSB7XHJcbiAgICAgICAgICBAY29udGVudDtcclxuICAgICAgfVxyXG4gIH0gQGVsc2UgaWYgJGNsYXNzID09IG1kIHtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aC1tZCkge1xyXG4gICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgIH1cclxuICB9IEBlbHNlIGlmICRjbGFzcyA9PSBsZyB7XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkd2lkdGgtbGcpIHtcclxuICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICB9XHJcbiAgfSBAZWxzZSB7XHJcbiAgICAgIEB3YXJuICdCcmVha3BvaW50IG1peGluIHN1cHBvcnRzOiBzbSwgbWQsIGxnJztcclxuICB9XHJcbn1cclxuXHJcbi8vIEdsb2JhbCBjb2xvdXJzXHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJsYWNrLWNvYWw6ICMzNjM1M2M7XHJcbiRncmVlbi1qdW5nbGUtc3RhcnQ6ICMzNmMzODY7XHJcbiRncmVlbi1qdW5nbGUtZW5kOiBkYXJrZW4oJGdyZWVuLWp1bmdsZS1zdGFydCwgLjUpO1xyXG4keWVsbG93OiAjZmZkZjg4O1xyXG4keWVsbG93LXN1bjogI2ZkYjYzMztcclxuJHllbGxvdy1jYXJyb3Q6ICNmYzgwMmE7XHJcbiR3aGl0ZS10cmFuc3BhcmVudDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMyk7XHJcblxyXG4vLyBEaXN0YW5jZXNcclxuJHN0YW5kYXJkLXNwYWNlOiAxLjVyZW07XHJcbiIsIi5hcHAtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYm9yZGVyLWxlZnQ6IDAuMXJlbSAjMzRiZDgyIHNvbGlkO1xuICBib3JkZXItcmlnaHQ6IDAuMXJlbSAjMzRiZDgyIHNvbGlkO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5hcHAtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xuICB9XG59XG5cbi5hcHAtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Simple flashcards';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_flashcards_flashcards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/flashcards/flashcards.component */ "./src/app/components/flashcards/flashcards.component.ts");
/* harmony import */ var _components_flashcard_flashcard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/flashcard/flashcard.component */ "./src/app/components/flashcard/flashcard.component.ts");
/* harmony import */ var _components_flashcards_controls_flashcards_controls_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/flashcards-controls/flashcards-controls.component */ "./src/app/components/flashcards-controls/flashcards-controls.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_flashcards_flashcards_component__WEBPACK_IMPORTED_MODULE_5__["FlashcardsComponent"],
            _components_flashcard_flashcard_component__WEBPACK_IMPORTED_MODULE_6__["FlashcardComponent"],
            _components_flashcards_controls_flashcards_controls_component__WEBPACK_IMPORTED_MODULE_7__["FlashcardsControlsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/flashcard/flashcard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/flashcard/flashcard.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  background: #fff;\n  margin: 1.5rem;\n  padding: 1.5rem;\n  border-radius: 1.5rem;\n  height: 25rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  box-shadow: 0.1rem 0.1rem 0.5rem 0 rgba(0, 0, 0, 0.75);\n  cursor: pointer;\n}\n.card__text {\n  font-size: 1.5rem;\n}\n.card__text--question {\n  display: inline;\n}\n.card__text--answer {\n  display: none;\n}\n.card--flipped .card__text--question {\n  display: none;\n}\n.card--flipped .card__text--answer {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbGFzaGNhcmQvQzpcXFBvemlvbWtpXFxFZHVjYXRpb25hbFByb2plY3RzXFxmbGFzaGNhcmRBbmd1bGFyU3R1ZHkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZsYXNoY2FyZFxcZmxhc2hjYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZsYXNoY2FyZC9DOlxcUG96aW9ta2lcXEVkdWNhdGlvbmFsUHJvamVjdHNcXGZsYXNoY2FyZEFuZ3VsYXJTdHVkeS9zcmNcXGFic3RyYWN0LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmxhc2hjYXJkL2ZsYXNoY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLGdCQ3FCTTtFRHBCTixjQzhCZTtFRDdCZixlQzZCZTtFRDVCZixxQkM0QmU7RUQzQmYsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esc0RBQUE7RUFDQSxlQUFBO0FFREY7QUZFRTtFQUNFLGlCQUFBO0FFQUo7QUZDSTtFQUNFLGVBQUE7QUVDTjtBRkNJO0VBQ0UsYUFBQTtBRUNOO0FGSU07RUFDRSxhQUFBO0FFRlI7QUZJTTtFQUNFLGVBQUE7QUVGUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmxhc2hjYXJkL2ZsYXNoY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fic3RyYWN0LnNjc3MnO1xyXG4uY2FyZCB7XHJcbiAgJHJvb3Q6ICY7XHJcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gIG1hcmdpbjogJHN0YW5kYXJkLXNwYWNlO1xyXG4gIHBhZGRpbmc6ICRzdGFuZGFyZC1zcGFjZTtcclxuICBib3JkZXItcmFkaXVzOiAkc3RhbmRhcmQtc3BhY2U7XHJcbiAgaGVpZ2h0OiAyNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogLjFyZW0gLjFyZW0gLjVyZW0gMCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmX190ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgJi0tcXVlc3Rpb24ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcbiAgICAmLS1hbnN3ZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLS1mbGlwcGVkIHtcclxuICAgICN7JHJvb3R9X190ZXh0IHtcclxuICAgICAgJi0tcXVlc3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgJi0tYW5zd2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gQnJlYWtwb2ludHNcclxuJHdpZHRoLWxnOiAxMjAwcHg7XHJcbiR3aWR0aC1tZDogNzY4cHg7XHJcbiR3aWR0aC1zbTogNTAwcHg7XHJcblxyXG5AbWl4aW4gYnJlYWtwb2ludCgkY2xhc3MpIHtcclxuICBAaWYgJGNsYXNzID09IHNtIHtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aC1zbSkge1xyXG4gICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgIH1cclxuICB9IEBlbHNlIGlmICRjbGFzcyA9PSBtZCB7XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkd2lkdGgtbWQpIHtcclxuICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICB9XHJcbiAgfSBAZWxzZSBpZiAkY2xhc3MgPT0gbGcge1xyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoLWxnKSB7XHJcbiAgICAgICAgICBAY29udGVudDtcclxuICAgICAgfVxyXG4gIH0gQGVsc2Uge1xyXG4gICAgICBAd2FybiAnQnJlYWtwb2ludCBtaXhpbiBzdXBwb3J0czogc20sIG1kLCBsZyc7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBHbG9iYWwgY29sb3Vyc1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibGFjay1jb2FsOiAjMzYzNTNjO1xyXG4kZ3JlZW4tanVuZ2xlLXN0YXJ0OiAjMzZjMzg2O1xyXG4kZ3JlZW4tanVuZ2xlLWVuZDogZGFya2VuKCRncmVlbi1qdW5nbGUtc3RhcnQsIC41KTtcclxuJHllbGxvdzogI2ZmZGY4ODtcclxuJHllbGxvdy1zdW46ICNmZGI2MzM7XHJcbiR5ZWxsb3ctY2Fycm90OiAjZmM4MDJhO1xyXG4kd2hpdGUtdHJhbnNwYXJlbnQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjMpO1xyXG5cclxuLy8gRGlzdGFuY2VzXHJcbiRzdGFuZGFyZC1zcGFjZTogMS41cmVtO1xyXG4iLCIuY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMS41cmVtO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgaGVpZ2h0OiAyNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAuMXJlbSAwLjFyZW0gMC41cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmRfX3RleHQge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5jYXJkX190ZXh0LS1xdWVzdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5jYXJkX190ZXh0LS1hbnN3ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNhcmQtLWZsaXBwZWQgLmNhcmRfX3RleHQtLXF1ZXN0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jYXJkLS1mbGlwcGVkIC5jYXJkX190ZXh0LS1hbnN3ZXIge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/flashcard/flashcard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/flashcard/flashcard.component.ts ***!
  \*************************************************************/
/*! exports provided: FlashcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashcardComponent", function() { return FlashcardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FlashcardComponent = class FlashcardComponent {
    constructor() {
        this.isFlipped = false;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.isFlipped = false;
    }
    setFlippedClass() {
        return { 'card--flipped': this.isFlipped };
    }
    flipCard() {
        this.isFlipped = !this.isFlipped;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FlashcardComponent.prototype, "card", void 0);
FlashcardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flashcard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./flashcard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/flashcard/flashcard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./flashcard.component.scss */ "./src/app/components/flashcard/flashcard.component.scss")).default]
    })
], FlashcardComponent);



/***/ }),

/***/ "./src/app/components/flashcards-controls/flashcards-controls.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/flashcards-controls/flashcards-controls.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".controls {\n  padding: 1.5rem;\n  display: -webkit-box;\n  display: flex;\n}\n.controls__btn {\n  padding: 1.5rem;\n  border-radius: 1.5rem;\n  border: 0;\n  color: #36353c;\n  width: 10rem;\n  cursor: pointer;\n}\n@media (pointer: fine) {\n  .controls__btn:hover {\n    font-weight: bold;\n    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.75);\n  }\n}\n.controls__btn--next {\n  background-color: #fdb633;\n  margin-left: auto;\n}\n.controls__btn--restart {\n  background-color: #fc802a;\n  margin-left: auto;\n}\n.controls__btn--prev {\n  background-color: #ffdf88;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbGFzaGNhcmRzLWNvbnRyb2xzL0M6XFxQb3ppb21raVxcRWR1Y2F0aW9uYWxQcm9qZWN0c1xcZmxhc2hjYXJkQW5ndWxhclN0dWR5L3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbGFzaGNhcmRzLWNvbnRyb2xzXFxmbGFzaGNhcmRzLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZsYXNoY2FyZHMtY29udHJvbHMvQzpcXFBvemlvbWtpXFxFZHVjYXRpb25hbFByb2plY3RzXFxmbGFzaGNhcmRBbmd1bGFyU3R1ZHkvc3JjXFxhYnN0cmFjdC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZsYXNoY2FyZHMtY29udHJvbHMvZmxhc2hjYXJkcy1jb250cm9scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVDZ0NlO0VEL0JmLG9CQUFBO0VBQUEsYUFBQTtBRUFGO0FGQ0U7RUFDRSxlQzZCYTtFRDVCYixxQkM0QmE7RUQzQmIsU0FBQTtFQUNBLGNDaUJTO0VEaEJULFlBQUE7RUFDQSxlQUFBO0FFQ0o7QUZBSTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSw0Q0FBQTtFRUVOO0FBQ0Y7QUZBSTtFQUNFLHlCQ1dPO0VEVlAsaUJBQUE7QUVFTjtBRkFJO0VBQ0UseUJDUVU7RURQVixpQkFBQTtBRUVOO0FGQUk7RUFDRSx5QkNFRztBQ0FUIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbGFzaGNhcmRzLWNvbnRyb2xzL2ZsYXNoY2FyZHMtY29udHJvbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hYnN0cmFjdC5zY3NzJztcclxuLmNvbnRyb2xzIHtcclxuICBwYWRkaW5nOiAkc3RhbmRhcmQtc3BhY2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAmX19idG4ge1xyXG4gICAgcGFkZGluZzogJHN0YW5kYXJkLXNwYWNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJHN0YW5kYXJkLXNwYWNlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6ICRibGFjay1jb2FsO1xyXG4gICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgQG1lZGlhIChwb2ludGVyOiBmaW5lKSB7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAuNXJlbSAwIHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYtLW5leHQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93LXN1bjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAmLS1yZXN0YXJ0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHllbGxvdy1jYXJyb3Q7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgJi0tcHJldiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3c7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIEJyZWFrcG9pbnRzXHJcbiR3aWR0aC1sZzogMTIwMHB4O1xyXG4kd2lkdGgtbWQ6IDc2OHB4O1xyXG4kd2lkdGgtc206IDUwMHB4O1xyXG5cclxuQG1peGluIGJyZWFrcG9pbnQoJGNsYXNzKSB7XHJcbiAgQGlmICRjbGFzcyA9PSBzbSB7XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkd2lkdGgtc20pIHtcclxuICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICB9XHJcbiAgfSBAZWxzZSBpZiAkY2xhc3MgPT0gbWQge1xyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoLW1kKSB7XHJcbiAgICAgICAgICBAY29udGVudDtcclxuICAgICAgfVxyXG4gIH0gQGVsc2UgaWYgJGNsYXNzID09IGxnIHtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aC1sZykge1xyXG4gICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgICAgQHdhcm4gJ0JyZWFrcG9pbnQgbWl4aW4gc3VwcG9ydHM6IHNtLCBtZCwgbGcnO1xyXG4gIH1cclxufVxyXG5cclxuLy8gR2xvYmFsIGNvbG91cnNcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmxhY2stY29hbDogIzM2MzUzYztcclxuJGdyZWVuLWp1bmdsZS1zdGFydDogIzM2YzM4NjtcclxuJGdyZWVuLWp1bmdsZS1lbmQ6IGRhcmtlbigkZ3JlZW4tanVuZ2xlLXN0YXJ0LCAuNSk7XHJcbiR5ZWxsb3c6ICNmZmRmODg7XHJcbiR5ZWxsb3ctc3VuOiAjZmRiNjMzO1xyXG4keWVsbG93LWNhcnJvdDogI2ZjODAyYTtcclxuJHdoaXRlLXRyYW5zcGFyZW50OiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcclxuXHJcbi8vIERpc3RhbmNlc1xyXG4kc3RhbmRhcmQtc3BhY2U6IDEuNXJlbTtcclxuIiwiLmNvbnRyb2xzIHtcbiAgcGFkZGluZzogMS41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRyb2xzX19idG4ge1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogIzM2MzUzYztcbiAgd2lkdGg6IDEwcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLmNvbnRyb2xzX19idG46aG92ZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICB9XG59XG4uY29udHJvbHNfX2J0bi0tbmV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGI2MzM7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLmNvbnRyb2xzX19idG4tLXJlc3RhcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmM4MDJhO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5jb250cm9sc19fYnRuLS1wcmV2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGY4ODtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/flashcards-controls/flashcards-controls.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/flashcards-controls/flashcards-controls.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FlashcardsControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashcardsControlsComponent", function() { return FlashcardsControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FlashcardsControlsComponent = class FlashcardsControlsComponent {
    constructor() {
        this.currentIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.index = this.deck.currentIndex;
        this.setButtons();
    }
    prev() {
        this.index--;
        this.update();
    }
    next() {
        this.index++;
        this.update();
    }
    reset() {
        this.index = 0;
        this.update();
    }
    setButtons() {
        this.showPrev = (this.index > 0);
        this.showNext = (this.index < this.deck.deckLength - 1);
        this.showReset = (this.index === this.deck.deckLength - 1);
    }
    update() {
        this.setButtons();
        this.currentIndex.emit(this.index);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FlashcardsControlsComponent.prototype, "deck", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FlashcardsControlsComponent.prototype, "currentIndex", void 0);
FlashcardsControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flashcards-controls',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./flashcards-controls.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/flashcards-controls/flashcards-controls.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./flashcards-controls.component.scss */ "./src/app/components/flashcards-controls/flashcards-controls.component.scss")).default]
    })
], FlashcardsControlsComponent);



/***/ }),

/***/ "./src/app/components/flashcards/flashcards.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/flashcards/flashcards.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmxhc2hjYXJkcy9mbGFzaGNhcmRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/flashcards/flashcards.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/flashcards/flashcards.component.ts ***!
  \***************************************************************/
/*! exports provided: FlashcardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashcardsComponent", function() { return FlashcardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FlashcardsComponent = class FlashcardsComponent {
    constructor() { }
    ngOnInit() {
        this.flashcards = [
            {
                id: 1,
                question: 'Question 1?',
                answer: 'Answer 1!'
            },
            {
                id: 3,
                question: 'Question 2?',
                answer: 'Answer 2!'
            },
            {
                id: 3,
                question: 'Question 3?',
                answer: 'Answer 3!'
            },
            {
                id: 4,
                question: 'Question 4?',
                answer: 'Answer 4!'
            },
            {
                id: 5,
                question: 'Question 5?',
                answer: 'Answer 5!'
            },
            {
                id: 6,
                question: 'Question 6?',
                answer: 'Answer 6!'
            },
        ];
        this.deck = {
            currentIndex: 0,
            deckLength: this.flashcards.length,
        };
    }
    setCurrentIndex(index) {
        this.deck.currentIndex = index;
    }
};
FlashcardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flashcards',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./flashcards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/flashcards/flashcards.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./flashcards.component.scss */ "./src/app/components/flashcards/flashcards.component.scss")).default]
    })
], FlashcardsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Poziomki\EducationalProjects\flashcardAngularStudy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map