// input: ["lmn", "d", "d", "lmn", "a", "lmn", "a", "bc"]
// output: 
// lmn -> 3
// a -> 2
// d -> 2
// bc -> 1
function displayOccurrences(array) {
    const res = {};
    for(let i = 0; i < array.length; i++) {
        if (res[array[i]] === undefined) {
            res[array[i]] = 1;
        } else {
            res[array[i]] = res[array[i]] + 1;
        }
    }
    Object.entries(res).sort((e1, e2) => {
        const res = e2[1] - e1[1];
        return res === 0 ? e1[0].localeCompare(e2[0]) : res;
    }).forEach(e => console.log(`${e[0]} -> ${e[1]}`));
    console.log(res);
}
const ar = ["lmn", "d", "d", "lmn", "a", "lmn", "a", "bc"];
displayOccurrences(ar);
