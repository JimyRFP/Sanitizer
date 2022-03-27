"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_1 = require("./engine");
function filterCommandChars(dataToSanitize, moreChars = []) {
    let commandChars = ["'", "<", ">", "-", '/', '\\'];
    commandChars.concat(moreChars);
    try {
        return engine_1.SanitizerEngineExcluder(dataToSanitize, commandChars);
    }
    catch (e) {
        throw e;
    }
}
exports.filterCommandChars = filterCommandChars;
