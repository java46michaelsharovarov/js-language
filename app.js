console.log("a" + +"a" + "as");
console.log(`a${+"a"}as`);

calculation(18,5,"-");

function calculation(num1, num2, action){
    let result;
    switch(action){
        case "+": result = num1 + num2;
            break;
        case "-": result = num1 - num2;
            break;
        case "*": result = num1 * num2;
            break;
        case "/": if(num2 != 0){
                result = num1 / num2;
                break;
            }
            else
            console.log("ERROR: division by ZERO");
            break;
            default: console.log("ERROR: wrong action");
        }
    console.log(result);
}

console.log(fun(5)(10,3));

function fun(a){
    return function(b,c){
        return a*(b+c);
    };
}