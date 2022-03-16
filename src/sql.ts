import { charInsertEngine } from "./engine.js";
const dangeroursChars=["'","\\"];
const protectorChar="\\";

export function queryProtector(queryToProtect:string):string{
    let sanitizerResult=charInsertEngine(queryToProtect,dangeroursChars,protectorChar);
    return sanitizerResult.sanitizedData;
}