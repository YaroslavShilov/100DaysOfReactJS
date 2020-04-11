let arr = [1, 2, 3, 4, 5];

arr.pop();
arr.push(9);
arr.shift();
arr.unshift(8);
//arr[14] = 99; // It's very bad

for(let i=0; i<arr.length; i++) {
	//console.log(arr[i]);	
}
console.log(arr);

arr.forEach(function(item, index, thisArr) {
	console.log(`${index}: ${item} from ${thisArr}`);
});

let mass = [1,4,8,2];

for(let key in mass) {
	console.log(key); //get key
	/* because
	0: 1,
	1: 4,
	3: 8,
	4: 2,
	 */
}

console.log('==================='); 


for(let key of mass) {
	console.log(key); //get value
	/* because
	 0: 1,
	 1: 4,
	 3: 8,
	 4: 2,
	 */
}

console.log('==================='); 

let ans = "hello, my, friend",
		arr2 = [];

arr2 = ans.split(',');
console.log(arr2);


let arr3 = ['4444', '111', '333', '2', '12'],
		i = arr3.sort(compareNum).join('/');

		function compareNum(a,b) {
			return a-b;
		}
console.log(i);