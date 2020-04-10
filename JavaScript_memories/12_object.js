let options = {
	key: 'value',
	width: 1920,
	height: 1080,
	name: 'monitor'
};

console.log(options.name);

options.bool = true;
options.colors = {
	border: 'black',
	bg: 'yellow'
};

delete options.bool;


for (let key in options) {
	console.log(`${key}: ${options[key]}`);
}

console.log(Object.keys(options));