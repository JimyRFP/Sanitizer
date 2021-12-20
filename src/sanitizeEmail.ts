import { SanitizerEngine } from "./engine.js";
import {SanitizerResponse,SanitizerEngineResponse} from './interfaces.js';
const emailAllowedChars=['_','.','@'];
export function sanitizeEmail(email:string):SanitizerResponse{
  let engineData:SanitizerEngineResponse=SanitizerEngine(email,true,true,emailAllowedChars);
  return {
      isOk:engineData.isOk,
      sanitizedData:engineData.sanitizedData,
  };
}