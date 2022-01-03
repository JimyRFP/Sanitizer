"use strict";
exports.__esModule = true;
exports.charInsertEngine = exports.SanitizerEngine = void 0;
function SanitizerEngine(dataToSanitize, keepLetters, keepNumbers, allowedChars) {
    var verify = verifyDataToSanitizer(dataToSanitize);
    if (!verify.isOk) {
        return verify;
    }
    var sanitizedData = "";
    for (var i = 0; i < dataToSanitize.length; i++) {
        var currentChar = dataToSanitize[i];
        var asc2Char = currentChar.charCodeAt(0);
        if (keepLetters)
            if ((asc2Char > 64 && asc2Char < 91) || (asc2Char > 96 && asc2Char < 123)) {
                sanitizedData += currentChar;
                continue;
            }
        if (keepNumbers)
            if (asc2Char > 47 && asc2Char < 58) {
                sanitizedData += currentChar;
                continue;
            }
        for (var j = 0; j < allowedChars.length; j++) {
            if (currentChar === allowedChars[j]) {
                sanitizedData += currentChar;
                break;
            }
        }
    }
    return {
        isOk: true,
        sanitizedData: sanitizedData,
        error: 'no Error'
    };
}
exports.SanitizerEngine = SanitizerEngine;
function charInsertEngine(dataToSanitize, searchChars, insertString) {
    var verify = verifyDataToSanitizer(dataToSanitize);
    if (!verify.isOk) {
        return verify;
    }
    var sanitizedData = '';
    for (var i = 0; i < dataToSanitize.length; i++) {
        var currentChar = dataToSanitize[i];
        var j = 0;
        for (; j < searchChars.length; j++)
            if (currentChar === searchChars[j])
                break;
        if (j < searchChars.length)
            sanitizedData += insertString;
        sanitizedData += currentChar;
    }
    return {
        isOk: true,
        sanitizedData: sanitizedData,
        error: 'no Error'
    };
}
exports.charInsertEngine = charInsertEngine;
function verifyDataToSanitizer(dataToSanitize) {
    var isOk = true;
    var error = 'no Error';
    if (typeof (dataToSanitize) !== 'string') {
        error = 'Invalid Data To Sanitize Type';
        isOk = false;
    }
    return {
        isOk: isOk,
        error: error,
        sanitizedData: ''
    };
}
