const numbers = [1,2,3,4,5]

function createAddNumber(number) {
	return function(arr) {
		return arr.map(i => i += number)
	}
}

const addOne = createAddNumber(1)
const addTwo = createAddNumber(2)

console.log(addOne(numbers))
console.log(addTwo(numbers))