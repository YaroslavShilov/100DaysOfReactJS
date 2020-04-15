/*
const fib = [1, 1, 2, 3, 5, 8, 13];

/!*const [a, b, c] = fib;

console.log(a,b,c);*!/

const [, a, , b] = fib;

console.log(a,b);

const line = [[1, 1], [2]];

const [ [x1 = 1, y1 = 1], [x2 = 2, y2=2], [x3=3,y3=3]=[] ] = line;

console.log(x1, y1, x2, y2, x3, y3);*/


const dict = {
	duck: 'quack',
	dog: 'wuff',
	mouse: 'squeak',
	hamster: 'squeak',
};

const res = Object.entries(dict)
	.filter(([, value]) => value === 'squeak')
	.map(([key]) => key);
console.log(res);

const shape = {
	type: 'segment',
	coordinates: {
		start: [10, 15],
		end: [17, 15]
	}
};

const {coordinates: {
	start: [startX, startY], 
	end: [endX, endY]
}} = shape;

console.log(startX, startY, endX, endY);