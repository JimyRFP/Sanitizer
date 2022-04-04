export function filterDouble(val:string):number{
    let i=0;
    for(;i<val.length;i++){
        let asc2Char=val.charCodeAt(i);
        if(asc2Char>47 && asc2Char<58)
          break;
    }
    return parseFloat(val.slice(i));      
}