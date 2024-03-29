import { sanitizeEmail } from "./sanitizeEmail.js";
import {queryProtector} from "./sql.js";
import {justCharsAndNumbers} from './justCharsAndNumbers';
import {SanitizerEngine} from './engine';
import { justChars } from "./justChars.js";
import { SanitizerEngineExcluder } from "./engine";
import { filterCommandChars } from "./filterCommandChars.js";
import { justNumbers } from "./justNumbers.js";
import { filterDouble } from "./filterDouble.js";
import { charInsertEngine } from "./engine";
import { removeAccentuation } from "./engine";
const meta_sanitizer={
    sanitizeEmail:sanitizeEmail,
    queryProtector:queryProtector,
    justCharsAndNumbers:justCharsAndNumbers,
    SanitizerEngine:SanitizerEngine,
    justChars:justChars,
    filterCommandChars:filterCommandChars,
    ExcluderEngine:SanitizerEngineExcluder,
    justNumbers:justNumbers,
    filterDouble:filterDouble,
    charInsertEngine:charInsertEngine,
    removeAccentuation,
}
export default meta_sanitizer;