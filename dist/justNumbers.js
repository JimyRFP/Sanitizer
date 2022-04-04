"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.justNumbers = void 0;
const engine_js_1 = require("./engine.js");
function justNumbers(stringToSanize, allowSpace) {
    let allowChars = [];
    if (allowSpace)
        allowChars.push(' ');
    return (0, engine_js_1.SanitizerEngine)(stringToSanize, false, true, allowChars).sanitizedData;
}
exports.justNumbers = justNumbers;
