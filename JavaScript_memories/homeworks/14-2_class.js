class MyClass {
	constructor(name) {
		this.name = name
	}
	
	sayName() {
		console.log(this.name);
	}
	method2() {}
	method3() {}
}

let name = new MyClass('hello');
name.sayName();


class User {

	constructor(name) {
		this.name = name;
	}

	sayHi() {
		alert(this.name);
	}

}

// Использование:
let user = new User("Иван");
user.sayHi();