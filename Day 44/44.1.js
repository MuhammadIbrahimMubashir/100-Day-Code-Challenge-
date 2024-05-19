"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
// In another file where you want to use the add function:
var mathFunction_1 = require("./mathFunction");
console.log((0, exports.add)(2, 3)); // Outputs: 5
// Demonstrates importing the add function from mathFunctions.ts and using it.
// In file: mathFunctions.ts
var add = function (a, b) { return a + b; };
exports.add = add;
// This line exports an add function from mathFunctions.ts
