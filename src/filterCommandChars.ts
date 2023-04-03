import { SanitizerEngineExcluder } from "./engine";
import { removeAccentuation as rmvAc } from "./engine";
export function filterCommandChars(dataToSanitize:string,moreChars:Array<string>=[],removeAccentuation:boolean=false):string{
    let commandChars=["'","<",">","-",'/','\\'];
    commandChars.concat(moreChars);
    try{
       let useString=dataToSanitize;
       if(removeAccentuation)
          useString=rmvAc(useString);
       return SanitizerEngineExcluder(dataToSanitize,commandChars);
    }catch(e){
       throw e;
    }
}