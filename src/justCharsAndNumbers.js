"use strict";
exports.__esModule = true;
exports.justCharsAndNumbers = void 0;
var engine_js_1 = require("./engine.js");
function justCharsAndNumbers(stringToSanize, allowSpace) {
    var allowChars = [];
    if (allowSpace)
        allowChars.push(' ');
    return (0, engine_js_1.SanitizerEngine)(stringToSanize, true, true, allowChars);
}
exports.justCharsAndNumbers = justCharsAndNumbers;
