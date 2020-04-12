let obj = {};

function A() {
	return obj;
}
function B() {
	return obj;
}

let a = new A;
let b = new B;

console.log(a == b);

console.log('=========== task 2 =========');


function Calc() {
	this.read = (a,b) => {this.a = a; this.b = b};
	this.sum = () => this.a + this.b;
	this.mul = () => this.a * this.b;
}

let sum = new Calc();
sum.read(3, 9);
console.log(sum.sum());

let mul = new Calc();
mul.read(3,5);
console.log(mul.mul());

console.log('=========== task 3 =========');

function Accumulator(startingValue) {
	this.value = startingValue;
	this.read = num => this.value += num;
}

let price = new Accumulator(1000);
price.read(20);
price.read(10);

console.log(price.value);

