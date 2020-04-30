const myModule = {
	x: 42,
	getX: function() {
		return this.x;
	}
};

const result_1 = myModule.getX;

console.log(result_1());

const result_2 = myModule.getX.bind(myModule);

console.log(result_2());


// ==================

const myModule_1 = {
	i: 10,
	getI: function() {
		return this.i;
	}
};

const myModule_2 = {
	i: 20,
	getI: function() {
		return this.i;
	}
};

console.log(myModule_1.getI.bind(myModule_1)());
console.log(myModule_1.getI.bind(myModule_2)());


const myModule_3 = {
	i: 30,
};

function myThis() {
	return this.i;
}

console.log(myThis.bind(myModule_3)());




