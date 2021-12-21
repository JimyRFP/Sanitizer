"use strict";
exports.__esModule = true;
var sanitizeEmail_js_1 = require("./sanitizeEmail.js");
var sql_js_1 = require("./sql.js");
module.exports = {
    email: sanitizeEmail_js_1.sanitizeEmail,
    sqlQueryProtector: sql_js_1.queryProtector
};
