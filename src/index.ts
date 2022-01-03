import { sanitizeEmail } from "./sanitizeEmail.js";
import {queryProtector} from "./sql.js";
import {justCharsAndNumbers} from './justCharsAndNumbers'
module.exports={
    email:sanitizeEmail,
    sqlQueryProtector:queryProtector,
    justCharsAndNumbers:justCharsAndNumbers,
}