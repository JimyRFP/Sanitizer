"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.justChars = void 0;
const engine_js_1 = require("./engine.js");
function justChars(stringToSanize, allowSpace) {
    let allowChars = [];
    if (allowSpace)
        allowChars.push(' ');
    return (0, engine_js_1.SanitizerEngine)(stringToSanize, true, false, allowChars).sanitizedData;
}
exports.justChars = justChars;
