function encode(num, codingString){
    let res = "";
    const base = codingString.length;
    do {
        const digit = num % base;
        const symb = getSymbol(digit,codingString);
        res = symb + res;
        num = Math.trunc(num / base);
    } while(num > 0);
    return res;
}
function getSymbol(digit,codingString){
    return codingString[digit];
}
function validation(codingString){
    let sub;
    let res = encode;
    for(let i = 0; i < codingString.length; i++){
        sub = codingString[i];
        if (i != codingString.lastIndexOf(sub)) {
            return res = logError;         
        }
    }
    return res;
}
function logError(){
    return "CANNOT BE ENCODED!!! The encoding string contains repeated characters!";
}
let num = 12092;
let codingString = ".--";
console.log(`Coding string: "${codingString}"  Encoded number: "${num}" => "${validation(codingString)(num,codingString)}"`);