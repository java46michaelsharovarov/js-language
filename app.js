function Deferred() {
    this.array = [];
}
Deferred.prototype.then = function (element) {
    this.array.push(element); 
}
Deferred.prototype.resolve = function (str) {
    this.res = str;
    this.array.forEach((n) => this.res = n(this.res));
}
const d = new Deferred()
d.then(function(res){ console.log('1 ', res); return 'a'; });

d.then(function(res){ console.log('2 ', res); return 'b'; });

d.then(function(res){ console.log('3 ', res); return 'c'; });
d.resolve('hello');