import { SanitizerEngineExcluder } from "./engine";

export function filterCommandChars(dataToSanitize:string,moreChars:Array<string>=[]):string{
    let commandChars=["'","<",">","-",'/','\\'];
    commandChars.concat(moreChars);
    try{
       return SanitizerEngineExcluder(dataToSanitize,commandChars);
    }catch(e){
       throw e;
    }
}