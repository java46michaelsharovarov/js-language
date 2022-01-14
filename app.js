// const str1 = "abc";
// const str2 = "abc";
// console.log(`str1 = str2 is ${str1==str2}`);
// console.log(`str1 < "s" is ${str1 < "s"}`);
// console.log(`"123" > 23 is ${"123" > 23}`);
// console.log(`"123" > "23" is ${"123" > "23"}`);
// console.log(+"123" + 23);
// console.log(`"abc" > 23 is ${"abc" > 23}`);
// console.log(`"abc" < 23 is ${"abc" > 23}`);
// console.log(`"abc" != 23 is ${"abc" != 23}`);
// console.log(`"abc" != 23 is ${!("abc" == 23)}`);
// function stringProcessing(str){
//     const strP = "" + str;
//     console.log(`"${str}[4]" is "${str[4]}"`);
//     console.log(`length of "${str}" is "${strP.length}"`);
//     console.log(`"${str}" includes "abc" is "${strP.includes("abc")}"`);
//     console.log(`substring  of "${str}" begining from index 2 to index 5 is "${strP.substring(2,5)}"`);
//     console.log(`index and last index of substring "ll" in the "${str}" is ${strP.indexOf("ll")}; ${strP.lastIndexOf("ll")}`);
// }
// stringProcessing("abcd*lmn*ll(oo&&ttll");

// function encode(num, base){
//     let res = "";
//     do {
//         const digit = Math.trunc(num % base);
//         const symb = getSymbol(digit);
//         res = symb + res;
//         num = Math.trunc(num / base);
//     } while(num >= 1);
//     return res;
// }
// function getSymbol(digit){
//     return "" + digit;
// }
// console.log(encode(10,2));

let num = 1256;
let codingString = ".-";
console.log(`Encoded number - "${num}" in coding string "${codingString}" is : "${encode(num,codingString)}"`);

function encode(num, codingString){
    let res = "";
    let base = codingString.length;
    do {
        let digit = num % base;
        digit = Math.trunc(digit);
        const symb = getSymbol(digit,codingString);
        res = symb + res;
        num = num / base;
        num = Math.trunc(num);
    } while(num >= 1);
    return res;
}
function getSymbol(digit,codingString){
    return codingString[digit];
}
// function validation(codingString){
//     let sub, res;
//     for(let i = 0; i < codingString.length; i++){
//         sub = codingString[i];
//         if (codingString.indexOf(sub) != codingString.lastIndexOf(sub)) {
//             console.log("ERROR");  
//             res = false;          
//         }
//         res = true;
//     }
//     return res;
//     // console.log(`"${sub}" is ${codingString.indexOf(sub)}; ${codingString.lastIndexOf(sub)}`);
// }
// // chek var