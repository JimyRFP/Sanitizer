"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.justCharsAndNumbers = void 0;
const engine_js_1 = require("./engine.js");
function justCharsAndNumbers(stringToSanize, allowSpace) {
    let allowChars = [];
    if (allowSpace)
        allowChars.push(' ');
    return (0, engine_js_1.SanitizerEngine)(stringToSanize, true, true, allowChars).sanitizedData;
}
exports.justCharsAndNumbers = justCharsAndNumbers;
