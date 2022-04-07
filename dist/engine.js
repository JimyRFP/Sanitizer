"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.charInsertEngine = exports.SanitizerEngineExcluder = exports.SanitizerEngine = void 0;
function SanitizerEngine(dataToSanitize, keepLetters, keepNumbers, allowedChars) {
    let verify = verifyDataToSanitizer(dataToSanitize);
    if (!verify.isOk) {
        throw verify.error;
    }
    let sanitizedData = "";
    const correctDataToSanitize = verify.dataToSanitize;
    for (let i = 0; i < correctDataToSanitize.length; i++) {
        let currentChar = correctDataToSanitize[i];
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
function SanitizerEngineExcluder(dataToSanitize, blockedChars) {
    let verify = verifyDataToSanitizer(dataToSanitize);
    if (!verify.isOk) {
        throw verify.error;
    }
    if (blockedChars == undefined)
        throw "Must set chars to exclude";
    let sanitizedData = "";
    const blockedCharsSize = blockedChars.length;
    const correctDataToSanitize = verify.dataToSanitize;
    for (let i = 0; i < correctDataToSanitize.length; i++) {
        let allow = true;
        for (let j = 0; j < blockedCharsSize; j++) {
            if (correctDataToSanitize[i] === blockedChars[j]) {
                allow = false;
                break;
            }
        }
        if (!allow)
            continue;
        sanitizedData += correctDataToSanitize[i];
    }
    return sanitizedData;
}
exports.SanitizerEngineExcluder = SanitizerEngineExcluder;
function charInsertEngine(dataToSanitize, searchChars, insertString) {
    let verify = verifyDataToSanitizer(dataToSanitize);
    if (!verify.isOk) {
        throw verify.error;
    }
    const correctDataToSanitize = verify.dataToSanitize;
    let sanitizedData = '';
    for (let i = 0; i < correctDataToSanitize.length; i++) {
        let currentChar = correctDataToSanitize[i];
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
    const type = typeof (dataToSanitize);
    let correctDataToSanitize = dataToSanitize;
    if (type !== 'string') {
        if (type !== 'number' && type !== 'bigint') {
            error = 'Invalid Data To Sanitize Type';
            isOk = false;
        }
        else {
            correctDataToSanitize = dataToSanitize.toString();
        }
    }
    return {
        isOk: isOk,
        error: error,
        dataToSanitize: correctDataToSanitize,
    };
}
