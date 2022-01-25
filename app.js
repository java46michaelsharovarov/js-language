function myForEach(array, callbackFn){
    for(let i = 0; i < array.length; i++){
        callbackFn(array[i], i, array);
    }
};
function myFilter(array, callbackFn) {
    const arrayRes = [];
    myForEach(array, (n, i, a) => callbackFn(n, i, a) ? arrayRes.push(n) : -1);
    return arrayRes;    
};
function myReduce(array, callbackFnReduce, vol) {
    let res;
    if(vol == undefined){
        const array2 = array.slice();
        res = array2.shift();
        myForEach(array2, n => res = callbackFnReduce(res, n));
    }
    else{    
    res = vol;
    myForEach(array, n => res = callbackFnReduce(res, n));
    }
    return res;
};

let test = () => {
    const ar = [6, 2, 8, 7, 5, 56];
    const arEvenOdd = myFilter(ar, (n, _i, a) => a.length % 2 == 0 ? n % 2 == 0 : n % 2 == 1);
    console.log(arEvenOdd);
    let res = myReduce(ar, (res, n) => res + n, 1); 
    console.log(`Reduce with initialValue: ${res}`);
    res = myReduce(ar, (res, n) => res + n); 
    console.log(`Reduce without initialValue: ${res}`);
    
};

test();