import { SanitizerEngine } from "./engine.js";
import {SanitizerResponse,SanitizerEngineResponse} from './interfaces.js';
export function justCharsAndNumbers(stringToSanize:string,allowSpace:boolean):SanitizerEngineResponse{
   let allowChars=[];
   if(allowSpace)
      allowChars.push(' ');
   return SanitizerEngine(stringToSanize,true,true,allowChars);
}