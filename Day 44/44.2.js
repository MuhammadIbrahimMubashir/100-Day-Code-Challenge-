"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// In another file:
var Person_1 = require("./Person");
Object.defineProperty(exports, "Person", { enumerable: true, get: function () { return Person_1.Person; } });
var alice = new Person_1.Person("Alice");
alice.greet(); // Outputs: Hello, my name is Alice
// This snippet imports the Person class and uses it to create an instance.
// In file: Person.ts
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
exports.Person = Person;
// Exports the Person class
