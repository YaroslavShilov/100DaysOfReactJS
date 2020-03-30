let message = "Hello world!";
let x = message.toUpperCase();

console.log(x);

person = {
	firstName: "John",
	lastName:	"Doe",
	age:	50,
	eyeColor:	"blue",
	fullName:	function() {
		return this.firstName + " " + this.lastName;
	},
};

person.name = function () {
	return `${this.firstName} ${this.lastName}`;
};

console.log(person.name());