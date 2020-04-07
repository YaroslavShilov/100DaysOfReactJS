'use strict';
function f1() {
	let number = 5;
	let string = 'Hello';
	let sym = Symbol();
	let bolean = true;
	// null;
	// undefine;
	let obj = {};

	console.log(4/0);
	console.log('string'*9);

	let persone = {
		name: 'John',
		age: '39',
		street: 'Michaevost'
	};

	console.log(persone["name"]);

	let arr = ['plum.png', 'orange.jpg', 'apple.gif'];

	console.log(arr[0]);
}
// f1()

function f2() {
	const obj = {
		name: 'Alex',
	};
	
	const arr = [1,3,4,5];
	
}
//f2();

function f3() {
	console.log(typeof(String(4)));
	
	console.log("err" + 9);
	
	console.log(typeof(null));
}
f3();

