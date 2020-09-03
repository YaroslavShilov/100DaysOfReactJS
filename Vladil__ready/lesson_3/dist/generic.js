"use strict";
const cars = ['Ford', 'Audi'];
const cars2 = ['Ford', 'Audi'];
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise Resolved');
    }, 2000);
});
promise.then(data => {
    console.log(data.trim());
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Vladilen' }, { age: 26 });
const merged2 = mergeObjects({ model: 'Ford' }, { year: 2010 });
//const merged3 = mergeObjects('asdfsdf', 'sfsdf');
console.log(merged);
function withCount(value) {
    return {
        value,
        count: `this object has ${value.length} symbols`
    };
}
console.log(withCount('hello'));
console.log(withCount(['I ', 'am', ' an Array']));
//console.log(withCount(20))//don't have .length
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Alesha',
    age: 27
};
console.log(getObjectValue(person, 'name'));
console.log(getObjectValue(person, 'age'));
//console.log(getObjectValue(person, 'job'))//object doesn't have the key "job"
