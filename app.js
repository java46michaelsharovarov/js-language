function myForEach(array, callbackFn){
    for(let i = 0; i < array.length; i++){
        callbackFn(array[i], i, array);
    }
};
function myMap(array, callbackFn) {
    const arrayRes = [];
    myForEach(array, (n,i,a) => arrayRes.push(callbackFn(n, i , a)));
    return arrayRes;
} 

let test = () => {
    const ar = [1, -12, 8, -87, 0, 56];
    let str = '';
    myForEach(ar, n => str += '#' + n);
    console.log(`myForEach: ${str}`);
    myForEach(ar, (n, i, a) => console.log(`${i + 1} of ${a.length} - ${n}`));
    const ar2 = myMap(ar, n => n * 2);
    console.log(ar2);
}

test();