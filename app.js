let num = 120923;
let codingString = ".-.";
console.log(`Coding string: "${codingString}"  Encoded number: "${num}" => "${encode(num,codingString)}"`);
function encode(num, codingString){
    let res = "";
    let valid = true;
    const base = codingString.length;
    for(let i = 0; i < codingString.length; i++){
        sub = codingString[i];
        if (codingString.indexOf(sub) != codingString.lastIndexOf(sub)) {
            res = "CANNOT BE ENCODED!!! The encoding string contains repeated characters!"; 
            valid = false;  
            break;       
        }
    }  
    if(valid){
        res = "";  
        do {
            const digit = Math.trunc(num % base);
            const symb = getSymbol(digit,codingString);
            res = symb + res;
            num = Math.trunc(num / base);
        } while(num >= 1);
    }   
    return res;
}
function getSymbol(digit,codingString){
    return codingString[digit];
}