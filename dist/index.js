"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sanitizeEmail_js_1 = require("./sanitizeEmail.js");
const sql_js_1 = require("./sql.js");
const justCharsAndNumbers_1 = require("./justCharsAndNumbers");
const engine_1 = require("./engine");
const justChars_js_1 = require("./justChars.js");
const engine_2 = require("./engine");
const filterCommandChars_js_1 = require("./filterCommandChars.js");
const justNumbers_js_1 = require("./justNumbers.js");
const filterDouble_js_1 = require("./filterDouble.js");
const engine_3 = require("./engine");
const engine_4 = require("./engine");
const meta_sanitizer = {
    sanitizeEmail: sanitizeEmail_js_1.sanitizeEmail,
    queryProtector: sql_js_1.queryProtector,
    justCharsAndNumbers: justCharsAndNumbers_1.justCharsAndNumbers,
    SanitizerEngine: engine_1.SanitizerEngine,
    justChars: justChars_js_1.justChars,
    filterCommandChars: filterCommandChars_js_1.filterCommandChars,
    ExcluderEngine: engine_2.SanitizerEngineExcluder,
    justNumbers: justNumbers_js_1.justNumbers,
    filterDouble: filterDouble_js_1.filterDouble,
    charInsertEngine: engine_3.charInsertEngine,
    removeAccentuation: engine_4.removeAccentuation,
};
exports.default = meta_sanitizer;
