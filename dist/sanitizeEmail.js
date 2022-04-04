"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeEmail = void 0;
const engine_js_1 = require("./engine.js");
const emailAllowedChars = ['_', '.', '@'];
function sanitizeEmail(email) {
    let engineData = (0, engine_js_1.SanitizerEngine)(email, true, true, emailAllowedChars);
    return engineData.sanitizedData;
}
exports.sanitizeEmail = sanitizeEmail;
