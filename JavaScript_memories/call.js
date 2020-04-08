let person1 = {
	firstName: "John",
	lastName: "Doe"
};
let person2 = {
	firstName: "Mary",
	lastName: "Doe"
};

let person = {
	fullName: function(city) {
		return this.firstName + " " + this.lastName + ", " + city;
	}
};

console.log(person.fullName.bind(person1)());
console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2, 'New Yourk'));

let bigger = "bigger";
let bigger = "small";
console.log(bigger);