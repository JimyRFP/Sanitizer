import {SanitizerEngineResponse,SanitizerError} from './interfaces.js';



export function SanitizerEngine(dataToSanitize:string,
                         keepLetters:boolean,
                         keepNumbers:boolean,
                         allowedChars:Array<string>
                         ):SanitizerEngineResponse{
    let verify=verifyDataToSanitizer(dataToSanitize);
    if(!verify.isOk){
       throw verify.error;
    }
    let sanitizedData="";
    const correctDataToSanitize=verify.dataToSanitize;
    for(let i=0;i<correctDataToSanitize.length;i++){
       let currentChar=correctDataToSanitize[i];
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

export function SanitizerEngineExcluder(dataToSanitize:string,
                                      blockedChars:Array<string>
                                    ):string{
          let verify=verifyDataToSanitizer(dataToSanitize);
          if(!verify.isOk){
             throw verify.error;
          }
          if(blockedChars==undefined)
            throw "Must set chars to exclude";
            
          let sanitizedData="";
          const blockedCharsSize=blockedChars.length;
          const correctDataToSanitize=verify.dataToSanitize;
          for(let i=0;i<correctDataToSanitize.length;i++){
             let allow=true;
             for(let j=0;j<blockedCharsSize;j++){
                 if(correctDataToSanitize[i]===blockedChars[j]){
                    allow=false;
                    break;
                 }
             }
             if(!allow)
               continue;
             sanitizedData+=correctDataToSanitize[i];  
          }
          return sanitizedData;
}

export function charInsertEngine(dataToSanitize:string,searchChars:Array<string>,insertString:string){
   let verify=verifyDataToSanitizer(dataToSanitize);
   if(!verify.isOk){
     throw verify.error;
   }
   const correctDataToSanitize=verify.dataToSanitize;
   let sanitizedData='';
   for(let i=0;i<correctDataToSanitize.length;i++){
       let currentChar=correctDataToSanitize[i];
       let j=0;
       for(;j<searchChars.length;j++)
          if(currentChar===searchChars[j])
            break;   
       if(j<searchChars.length)
         sanitizedData+=insertString;
       sanitizedData+=currentChar;       
   }
   return {
    isOk:true,
    sanitizedData:sanitizedData,
    error:'no Error'
   };
}

function verifyDataToSanitizer(dataToSanitize:string){
   let isOk=true;
   let error:SanitizerError='no Error';
   const type=typeof(dataToSanitize);
   let correctDataToSanitize=dataToSanitize;
   if(type!=='string'){
     if(type!=='number' && type!=='bigint'){
       error='Invalid Data To Sanitize Type';
       isOk=false;
     }else{
        correctDataToSanitize=dataToSanitize.toString();
     }
   }
   return {
     isOk:isOk,
     error:error,
     dataToSanitize:correctDataToSanitize,
   }
}

export function removeAccentuation(str:string){
  return str.normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
}
