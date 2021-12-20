"use strict";
exports.__esModule = true;
exports.SanitizerEngine = void 0;
function SanitizerEngine(dataToSanitize, keepLetters, keepNumbers, allowedChars) {
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
