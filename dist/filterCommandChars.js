"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterCommandChars = void 0;
const engine_1 = require("./engine");
const engine_2 = require("./engine");
function filterCommandChars(dataToSanitize, moreChars = [], removeAccentuation = false) {
    let commandChars = ["'", "<", ">", "-", '/', '\\'];
    commandChars.concat(moreChars);
    try {
        let useString = dataToSanitize;
        if (removeAccentuation)
            useString = (0, engine_2.removeAccentuation)(useString);
        return (0, engine_1.SanitizerEngineExcluder)(dataToSanitize, commandChars);
    }
    catch (e) {
        throw e;
    }
}
exports.filterCommandChars = filterCommandChars;
