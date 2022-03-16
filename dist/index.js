"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sanitizeEmail_js_1 = require("./sanitizeEmail.js");
const sql_js_1 = require("./sql.js");
const justCharsAndNumbers_1 = require("./justCharsAndNumbers");
const engine_1 = require("./engine");
const meta_sanitizer = {
    sanitizeEmail: sanitizeEmail_js_1.sanitizeEmail,
    queryProtector: sql_js_1.queryProtector,
    justCharsAndNumbers: justCharsAndNumbers_1.justCharsAndNumbers,
    SanitizerEngine: engine_1.SanitizerEngine,
};
exports.default = meta_sanitizer;
