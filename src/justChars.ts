import { SanitizerEngine } from "./engine.js";
export function justChars(stringToSanize:string,allowSpace:boolean):string{
   let allowChars=[];
   if(allowSpace)
      allowChars.push(' ');
   return SanitizerEngine(stringToSanize,true,false,allowChars).sanitizedData;
}