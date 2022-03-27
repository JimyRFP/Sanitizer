import { SanitizerEngineResponse } from './interfaces.js';
export declare function SanitizerEngine(dataToSanitize: string, keepLetters: boolean, keepNumbers: boolean, allowedChars: Array<string>): SanitizerEngineResponse;
export declare function SanitizerEngineExcluder(dataToSanitize: string, blockedChars: Array<string>): string;
export declare function charInsertEngine(dataToSanitize: string, searchChars: Array<string>, insertString: string): {
    isOk: boolean;
    sanitizedData: string;
    error: string;
};
