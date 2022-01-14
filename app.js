let num = 12092;
let codingString = ".-";
console.log(`Encoded number - "${num}" in coding string "${codingString}"${validation(codingString)(num,codingString)}`);
function encode(num, codingString){
    let res = "";
    const base = codingString.length;
    do {
        const digit = Math.trunc(num % base);
        const symb = getSymbol(digit,codingString);
        res = symb + res;
        num = Math.trunc(num / base);
    } while(num >= 1);
    return " is : " + `"${res}"`;
}
function getSymbol(digit,codingString){
    return codingString[digit];
}
function validation(codingString){
    let sub;
    let res = encode;
    for(let i = 0; i < codingString.length; i++){
        sub = codingString[i];
        if (codingString.indexOf(sub) != codingString.lastIndexOf(sub)) {
            res = logError;   
            break;       
        }
    }
    return res;
}
function logError(num, codingString){
    return ", CANNOT BE ENCODED!!! The encoding string contains repeated characters!";
}