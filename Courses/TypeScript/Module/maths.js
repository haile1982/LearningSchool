"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.absolute = exports.RandomNumberGenerator = exports.phi = exports.squareTwo = exports.PI = void 0;
// @filename: maths.ts
exports.PI = 3.14;
exports.squareTwo = 1.41;
exports.phi = 1.61;
var RandomNumberGenerator = /** @class */ (function () {
    function RandomNumberGenerator() {
    }
    return RandomNumberGenerator;
}());
exports.RandomNumberGenerator = RandomNumberGenerator;
function absolute(num) {
    if (num < 0)
        return num * -1;
    return num;
}
exports.absolute = absolute;
