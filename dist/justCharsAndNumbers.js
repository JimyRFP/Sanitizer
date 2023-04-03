"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.justCharsAndNumbers = void 0;
const engine_js_1 = require("./engine.js");
const engine_js_2 = require("./engine.js");
function justCharsAndNumbers(stringToSanize, allowSpace = true, removeAccentuation = true) {
    let allowChars = [];
    if (allowSpace)
        allowChars.push(' ');
    let useString = stringToSanize;
    if (removeAccentuation)
        useString = (0, engine_js_2.removeAccentuation)(useString);
    return (0, engine_js_1.SanitizerEngine)(useString, true, true, allowChars).sanitizedData;
}
exports.justCharsAndNumbers = justCharsAndNumbers;
