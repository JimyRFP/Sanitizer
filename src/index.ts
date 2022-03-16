import { sanitizeEmail } from "./sanitizeEmail.js";
import {queryProtector} from "./sql.js";
import {justCharsAndNumbers} from './justCharsAndNumbers';
import {SanitizerEngine} from './engine';
const meta_sanitizer={
    sanitizeEmail:sanitizeEmail,
    queryProtector:queryProtector,
    justCharsAndNumbers:justCharsAndNumbers,
    SanitizerEngine:SanitizerEngine,
}
export default meta_sanitizer;