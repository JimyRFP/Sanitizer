export type SanitizerError='no Error'|'Invalid Data To Sanitize Type';
export interface SanitizerEngineResponse{
    isOk:boolean,
    sanitizedData:string,
    error:SanitizerError,
};
