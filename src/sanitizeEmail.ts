import { SanitizerEngine } from "./engine.js";
import {SanitizerEngineResponse} from './interfaces.js';
const emailAllowedChars=['_','.','@'];
export function sanitizeEmail(email:string):string{
  let engineData:SanitizerEngineResponse=SanitizerEngine(email,true,true,emailAllowedChars);
  return engineData.sanitizedData;
}