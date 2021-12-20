import {SanitizerEngineResponse} from './interfaces.js';
export function SanitizerEngine(dataToSanitize:string,
                         keepLetters:boolean,
                         keepNumbers:boolean,
                         allowedChars:Array<string>
                         ):SanitizerEngineResponse{
    let sanitizedData="";
    for(let i=0;i<dataToSanitize.length;i++){
       let currentChar=dataToSanitize[i];
       let asc2Char:number=currentChar.charCodeAt(0);
       if(keepLetters)
         if((asc2Char>64 && asc2Char<91)||(asc2Char>96 && asc2Char<123)){
             sanitizedData+=currentChar;
             continue;
         }
       if(keepNumbers)     
         if(asc2Char>47 && asc2Char<58){
             sanitizedData+=currentChar;
             continue;
         }  
       for(let j=0;j<allowedChars.length;j++){
             if(currentChar===allowedChars[j]){
                 sanitizedData+=currentChar;
                 break;
             }
       }
    }
    return {
        isOk:true,
        sanitizedData:sanitizedData,
        error:'no Error'
    };
}
