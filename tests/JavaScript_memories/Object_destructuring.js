const person = {
	name: {
		first: 'Peter',
		last: 'Smith',
	},
	age: 27,
};

const {
	perm: {role: myRole = 'user'} = {}
} = person;

console.log(myRole);

function connect({
	host = 'localhost',
	port = 123,
	user = 'guest'
                 } = {}) {
	console.log('user: ', user, 'port: ', port, 'host: ', host);
}

connect({
	port: 1829,
});

const dict = {
	duck: 'quack',
	dog: 'wuff',
	mouse: 'squeak'
};

const {duck, ...otherAnimals} = dict;
console.log(duck);
console.log(otherAnimals.dog);
