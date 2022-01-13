const str1 = "abc";
const str2 = "abc";
console.log(`str1 = str2 is ${str1==str2}`);
console.log(`str1 < "s" is ${str1 < "s"}`);
console.log(`"123" > 23 is ${"123" > 23}`);
console.log(`"123" > "23" is ${"123" > "23"}`);
console.log(+"123" + 23);
console.log(`"abc" > 23 is ${"abc" > 23}`);
console.log(`"abc" < 23 is ${"abc" > 23}`);
console.log(`"abc" != 23 is ${"abc" != 23}`);
console.log(`"abc" != 23 is ${!("abc" == 23)}`);
function stringProcessing(str){
    const strP = "" + str;
    console.log(`"${str}[4]" is "${str[4]}"`);
    console.log(`length of "${str}" is "${strP.length}"`);
    console.log(`"${str}" includes "abc" is "${strP.includes("abc")}"`);
    console.log(`substring  of "${str}" begining from index 2 to index 5 is "${strP.substring(2,5)}"`);
    console.log(`index and last index of substring "ll" in the "${str}" is ${strP.indexOf("ll")}; ${strP.lastIndexOf("ll")}`);
}
stringProcessing("abcd*lmn*ll(oo&&ttll");

function encode(num, base){
    let res = "";
    do {
        const digit = Math.trunc(num % base);
        const symb = getSymbol(digit);
        res = symb + res;
        num = Math.trunc(num / base);
    } while(num >= 1);
    return res;
}
function getSymbol(digit){
    return "" + digit;
}
console.log(encode(10,2));