import { SanitizerEngine } from "./engine.js";
export function justNumbers(stringToSanize:string,allowSpace:boolean):string{
   let allowChars=[];
   if(allowSpace)
      allowChars.push(' ');
   return SanitizerEngine(stringToSanize,false,true,allowChars).sanitizedData;
}