import { sanitizeEmail } from "./sanitizeEmail.js";
import { queryProtector } from "./sql.js";
import { justCharsAndNumbers } from './justCharsAndNumbers';
import { SanitizerEngine } from './engine';
declare const meta_sanitizer: {
    sanitizeEmail: typeof sanitizeEmail;
    queryProtector: typeof queryProtector;
    justCharsAndNumbers: typeof justCharsAndNumbers;
    SanitizerEngine: typeof SanitizerEngine;
};
export default meta_sanitizer;
