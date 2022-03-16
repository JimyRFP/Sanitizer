"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_js_1 = require("./engine.js");
const dangeroursChars = ["'", "\\"];
const protectorChar = "\\";
function queryProtector(queryToProtect) {
    let sanitizerResult = engine_js_1.charInsertEngine(queryToProtect, dangeroursChars, protectorChar);
    return sanitizerResult.sanitizedData;
}
exports.queryProtector = queryProtector;
