"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilTwo = exports.utilOne = void 0;
// This code illustrates the syntax and usage differences between default and named exports.
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    return Calculator;
}());
exports.default = Calculator;
// Named export example in file: utils.ts
var utilOne = function () {
    /*...*/
};
exports.utilOne = utilOne;
var utilTwo = function () {
    /*...*/
};
exports.utilTwo = utilTwo;
