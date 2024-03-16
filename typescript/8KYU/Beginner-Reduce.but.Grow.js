"use strict";
/**
 Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 * */
Object.defineProperty(exports, "__esModule", { value: true });
exports.grow = void 0;
function grow(arr) {
    var initialValue = 1;
    return arr.reduce(function (acc, curr) { return acc * curr; }, initialValue);
}
exports.grow = grow;
console.log(grow([1, 2, 3, 4]));
