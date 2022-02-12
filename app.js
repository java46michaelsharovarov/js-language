function getRandomNumber(min, max) {
        min > max ? [min, max] = [max, min] : 0;
         //if min > max then you should swap values without additional variable in one line code
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
}
function concatinate(prefix) {
             return text => prefix + text;   
}
        
console.log(getRandomNumber(0, 1)); //Example getRandomNumber(0, 1) -> returns number that is either 0 or 1
const concatApp = concatinate('App - ');
const concatMessage = concatApp('Test status: Done');
console.log(concatMessage); //there should be displayed out App - Test status: Done