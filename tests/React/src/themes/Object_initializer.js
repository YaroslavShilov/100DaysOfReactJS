const name = "Robin";

const user = {
	name,
};

console.log(user.name);

const userService = {
	getUserName(user) {
		return `${user.firstname} ${user.lastname}`;
	}
};

const resultName = userService.getUserName(
	{
		firstname: 'John',
		lastname: 'Locke'
	}
);
console.log(resultName);


const key = 'name';
const user2 = {
	[key]: 'Robin',
};

console.log(user2.name);

{
	let a = 'foo',
		b = 42,
		c = {};
	let o = {a,b,c};
	
	console.log(o);
	
	let prop = 'foo';
	let z = {
		[prop]: 'hey',
		['b' + 'ar']: true,
	};
	
	console.log(z);
	console.log(z.foo);
	console.log(z.bar);
}