"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SanitizerEngine(dataToSanitize, keepLetters, keepNumbers, allowedChars) {
    let verify = verifyDataToSanitizer(dataToSanitize);
    if (!verify.isOk) {
        throw verify.error;
    }
    let sanitizedData = "";
    for (let i = 0; i < dataToSanitize.length; i++) {
        let currentChar = dataToSanitize[i];
        let asc2Char = currentChar.charCodeAt(0);
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
        for (let j = 0; j < allowedChars.length; j++) {
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
    let verify = verifyDataToSanitizer(dataToSanitize);
    if (!verify.isOk) {
        throw verify.error;
    }
    let sanitizedData = '';
    for (let i = 0; i < dataToSanitize.length; i++) {
        let currentChar = dataToSanitize[i];
        let j = 0;
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
    let isOk = true;
    let error = 'no Error';
    if (typeof (dataToSanitize) !== 'string') {
        error = 'Invalid Data To Sanitize Type';
        isOk = false;
    }
    return {
        isOk: isOk,
        error: error,
    };
}
