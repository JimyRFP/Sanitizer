import { SanitizerEngine } from "./engine.js";
export function justCharsAndNumbers(stringToSanize:string,allowSpace:boolean):string{
   let allowChars=[];
   if(allowSpace)
      allowChars.push(' ');
   return SanitizerEngine(stringToSanize,true,true,allowChars).sanitizedData;
}