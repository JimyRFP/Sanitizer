import { SanitizerEngine } from "./engine.js";
import {SanitizerEngineResponse} from './interfaces.js';
export function justCharsAndNumbers(stringToSanize:string,allowSpace:boolean):string{
   let allowChars=[];
   if(allowSpace)
      allowChars.push(' ');
   return SanitizerEngine(stringToSanize,true,true,allowChars).sanitizedData;
}