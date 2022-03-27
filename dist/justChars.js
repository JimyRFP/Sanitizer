"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_js_1 = require("./engine.js");
function justChars(stringToSanize, allowSpace) {
    let allowChars = [];
    if (allowSpace)
        allowChars.push(' ');
    return engine_js_1.SanitizerEngine(stringToSanize, true, false, allowChars).sanitizedData;
}
exports.justChars = justChars;
