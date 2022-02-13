function getRandomNumber(min, max) {
        min <= max || ([min, max] = [max, min]);
        //if min > max then you should swap values without additional variable in one line code
        return Math.floor(Math.random() * (max - min + 1) + min);
}
function concatenate(prefix) {
        return message => prefix + message;   
}
        
console.log(getRandomNumber(1.2, 0.3)); //Example getRandomNumber(0, 1) -> returns number that is either 0 or 1
const concatApp = concatenate('App - ');
const concatMessage = concatApp('Test status: Done');
console.log(concatMessage); //there should be displayed out App - Test status: Done