import { charInsertEngine } from "./engine.js";
import {SanitizerResponse,SanitizerEngineResponse} from './interfaces.js';
const dangeroursChars=["'","\\"];
const protectorChar="\\";

export function queryProtector(queryToProtect:string):SanitizerResponse{
    let sanitizerResult=charInsertEngine(queryToProtect,dangeroursChars,protectorChar);
    return {
       isOk:sanitizerResult.isOk,
       sanitizedData:sanitizerResult.sanitizedData,
    }
}