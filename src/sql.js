"use strict";
exports.__esModule = true;
exports.queryProtector = void 0;
var engine_js_1 = require("./engine.js");
var dangeroursChars = ["'", "\\"];
var protectorChar = "\\";
function queryProtector(queryToProtect) {
    var sanitizerResult = (0, engine_js_1.charInsertEngine)(queryToProtect, dangeroursChars, protectorChar);
    return {
        isOk: sanitizerResult.isOk,
        sanitizedData: sanitizerResult.sanitizedData
    };
}
exports.queryProtector = queryProtector;
