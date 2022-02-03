function Deferred() {
    this.array = [];
}
Deferred.prototype.then = function (element) {
    this.array.push(element); 
}
Deferred.prototype.resolve = function (res) {
    this.array.forEach(n => res = n(res));
}
const d = new Deferred()
d.then(function(res){ console.log('1 ', res); return 'a'; });

d.then(function(res){ console.log('2 ', res); return 'b'; });

d.then(function(res){ console.log('3 ', res); return 'c'; });
d.resolve('hello');


function MyArray(vol) {
    this.array = [];
    this.vol = vol;
}
MyArray.prototype.get = function (index) {
    return this.array[index] ?? this.vol;
} 
MyArray.prototype.set = function (index, vol) {
    this.array[index] = vol;
}
MyArray.prototype.setValue = function (vol) {
    this.array = [];
    this.vol = vol;
}
const myArray = new MyArray(10);
console.log(myArray.get(100)) // displayed out 10
myArray.set(100, 0)         //sets 500 at index 100
console.log(myArray.get(100)) //displayed out 500
myArray.setValue(300);
console.log(myArray.get(100)) //displayed out 300
console.log(myArray.get(200)) //displayed out 300