import { sanitizeEmail } from "./sanitizeEmail.js";
import {queryProtector} from "./sql.js";
module.exports={
    email:sanitizeEmail,
    sqlQueryProtector:queryProtector,
}