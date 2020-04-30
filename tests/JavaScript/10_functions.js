let num = 10; //глобальная переменная
function showFirstMessage(text) {
	console.log(text);
	let num = 20; // локальная переменная - она недоступна вне функции
	console.log(num); //20 - возьмет локальную переменную
}

showFirstMessage('hello');
console.log(num); //10 - возьмет глобальную переменную

//Замыкание - это функция вместе со всеми внешними переменными которые ей доступны
function showNum() {
	console.log(num) //10 - возьмет глобальную переменную
}

//параметры а и б
function calc(a, b) {
	return (a + b);
}
             //аргументы 3 и 5
console.log(calc(3,5));
console.log(calc(6,4));

function retVar() {
	let num = 50;
	return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = 'test';
console.log(str.length); //свойство

console.log(str.toUpperCase()); //метод