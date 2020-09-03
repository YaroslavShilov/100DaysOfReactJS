"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
const max = new Person('Maxim');
const btn = document.querySelector('#btn');
console.log(btn);
btn.addEventListener('click', () => { console.log('hello'); });
