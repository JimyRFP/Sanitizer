"use strict";
exports.__esModule = true;
exports.sanitizeEmail = void 0;
var engine_js_1 = require("./engine.js");
var emailAllowedChars = ['_', '.', '@'];
function sanitizeEmail(email) {
    var engineData = (0, engine_js_1.SanitizerEngine)(email, true, true, emailAllowedChars);
    return {
        isOk: engineData.isOk,
        sanitizedData: engineData.sanitizedData
    };
}
exports.sanitizeEmail = sanitizeEmail;
