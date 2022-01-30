function displayOccurrences(array) {
    const res = array.reduce((acc, n) => ((acc[n] === undefined ? acc[n] = 1 : acc[n] += 1), acc), {});
    Object.entries(res).sort((e1, e2) => {
        const res = e2[1] - e1[1];
        return res === 0 ? e1[0].localeCompare(e2[0]) : res;
    }).forEach(e => console.log(`${e[0]} -> ${e[1]}`));
    console.log(res);
}
function countBy(arr, callbackFn) {
    const res = arr.reduce((acc, n) => {
        n = callbackFn(n);
        acc[n] === undefined ? acc[n] = 1 : acc[n] += 1;
        return acc;
    }, {});
    return res;
}
function createAddress (city, street) {
    return {city, street}
}
function createPerson(id, name, address) {
    return {id, name, address}
}

function countByAdditional(arr, callbackFn, callbackFn2) {
    const res = arr.reduce((acc, n) => {
        const red = callbackFn2(n);
        n = callbackFn(n);
        acc[n] === undefined ? acc[n] = red : Array.isArray(red) ? acc[n].push(...red) : acc[n] += red;
        return acc;
    }, {});
    return res;
}
let test = () => {
    const ar = ["lmn", "d", "d", "lmn", "a", "lmn", "a", "bc"];
    const arr = [6.4, 7.3, 6.5, 6.9];
    const arr1 = ['abcd', 'lmnr', 'ab', 'dddd'];
    const arr2 = [{age: 25, id: 123, name: 'Vasya'},{age: 50, id: 123, name: 'Vasya'},
    {age: 25, id: 123, name: 'Vasya'},{age: 70, id: 123, name: 'Vasya'}];
    const persons = [
        createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
        createPerson(124, "Olya",  createAddress("Rehovot", "Pr.Plaut")),
        createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
        createPerson(126, "Sara",  createAddress("Lod", "Sokolov"))
    ];
    displayOccurrences(ar);
    console.log(countBy(arr, element => Math.floor(element)));
    console.log(countBy(arr1, element => element.length));
    console.log(countBy(arr2, element => element.age));
    console.log(countByAdditional(persons, element => element.address.city, element => element = 1));
    console.log(countByAdditional(persons, element => element.address.city,  element => [element.name]));
}

test();