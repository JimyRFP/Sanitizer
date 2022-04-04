"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterDouble = void 0;
function filterDouble(val) {
    let i = 0;
    for (; i < val.length; i++) {
        let asc2Char = val.charCodeAt(i);
        if (asc2Char > 47 && asc2Char < 58)
            break;
    }
    return parseFloat(val.slice(i));
}
exports.filterDouble = filterDouble;
