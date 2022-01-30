function displayOccurrences(array) {
    let res = array.reduce((acc, n) => ((acc[n] === undefined ? acc[n] = 1 : acc[n] += 1), acc), {});
    res = sortObj(res);
    console.log(res); 
}
function countBy(arr, callbackFn) {
    let res = arr.reduce((acc, n) => {
        n = callbackFn(n);
        acc[n] === undefined ? acc[n] = 1 : acc[n] += 1;
        return acc;
    }, {});
    res = sortObj(res);
    return res;
}
function sortObj(obj) {
    const arraySort = Object.entries(obj).sort((e1, e2) => {
        const res = e2[1] - e1[1];
        return res === 0 ? e2[0].localeCompare(e1[0], {options: 'kn'}) : res;
    })
    console.log(arraySort);
    return arraySort.reduce((acc, n) => {
        acc[n[0]] = n[1]
        return acc;
    }, {});
}

let test = () => {
    const ar = ["lmn", "d", "d", "lmn", "a", "lmn", "a", "bc"];
    const arr = [6.4, 7.3, 6.5, 6.9];
    const arr1 = ['abcd', 'lmnr', 'ab', 'dddd'];
    const arr2 = [{age: 25, id: 123, name: 'Vasya'},{age: 50, id: 123, name: 'Vasya'},
    {age: 25, id: 123, name: 'Vasya'},{age: 70, id: 123, name: 'Vasya'}];
    displayOccurrences(ar);
    console.log(countBy(arr, element => Math.floor(element)));
    console.log(countBy(arr1, element => element.length));
    console.log(countBy(arr2, element => element.age));
}
test();