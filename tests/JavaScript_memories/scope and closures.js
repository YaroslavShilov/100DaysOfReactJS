sayHello(); //2
function sayHello () {
	console.log('1')
}

// This is the same as the code above
function sayHello () {
	console.log('2')
}
sayHello(); //2

function outerFunction() {
	const outer = "I see";
	
	return () => {
		console.log(outer);
	}
}

outerFunction()();

console.log('===========make a cake========');

function prepareCake(flavor) {
	return () => setTimeout( ()=> console.log(`Made a ${flavor} cake!`), 1000);
}
const makeCakeLater = prepareCake('strawberry');

makeCakeLater();
setTimeout(makeCakeLater, 1500);
