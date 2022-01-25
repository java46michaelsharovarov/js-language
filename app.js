function createAddress(city, street) {
        return {city, street};
};
function createPerson(id, name, address) {
        return {id, name, address};
};
const persons = [
        createPerson(123, "Vasya", createAddress("Rehovot","Parshani")),
        createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")),
        createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")),
        createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
];
function getPersonsCity(persons, city){
    const arRes = persons.filter(n => n.address.city === city);
    return arRes;
};
// function movePersonsNoCityAtBeginning(persons, city){
//     const arRes = [];
//     persons.forEach(n => n.address.city != city ? arRes.unshift(n) : arRes.push(n));
//     return arRes;
// };
function movePersonsNoCityAtBeginning(persons, city){
    const arRes = persons.filter(n => n.address.city === city);
    const arRes1 = persons.filter(n => n.address.city != city);
    return arRes1.concat(arRes);
};
// function movePersonsNoCityAtBeginning(persons, city){
//     const arRes = persons.slice();
//     arRes.sort(n => n.address.city != city ? -1 : 1);    
//     return arRes;
// };

let test = () => {
    console.log(getPersonsCity(persons, "Rehovot"));
    console.log(movePersonsNoCityAtBeginning(persons, "Rehovot"));
};

test();