import { SanitizerEngine } from "./engine.js";
import { removeAccentuation as rmvAc } from "./engine.js";
export function justCharsAndNumbers(stringToSanize:string,allowSpace:boolean=true,removeAccentuation:boolean=true):string{
   let allowChars=[];
   if(allowSpace)
      allowChars.push(' ');
   let useString=stringToSanize;   
   if(removeAccentuation)
       useString=rmvAc(useString);
   return SanitizerEngine(useString,true,true,allowChars).sanitizedData;
}