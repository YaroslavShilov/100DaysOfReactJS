const cars: string[] = ['Ford', 'Audi'];
const cars2: Array<string>= ['Ford', 'Audi'];

const promise = new Promise<string>(resolve => {
	setTimeout(() => {
		resolve('Promise Resolved')
	}, 2000)
})

promise.then(data => {
	console.log(data.trim())
})

function mergeObjects<T extends object, R extends object>(a: T, b: R) {
	return Object.assign({}, a,b)
}

const merged = mergeObjects({name: 'Vladilen'}, {age: 26})
const merged2 = mergeObjects({model: 'Ford'}, {year: 2010})
//const merged3 = mergeObjects('asdfsdf', 'sfsdf');
console.log(merged)

interface ILength {
	length: number
}

function withCount<T extends ILength>(value: T): {value: T, count:string} {
	return {
		value,
		count: `this object has ${value.length} symbols`
	}
}

console.log(withCount('hello'))
console.log(withCount(['I ', 'am', ' an Array']))
//console.log(withCount(20))//don't have .length

function getObjectValue<T extends object, R extends keyof T> (obj: T, key: R) {
	return obj[key]
}
const person = {
	name: 'Alesha',
	age: 27
}
console.log(getObjectValue(person, 'name'))
console.log(getObjectValue(person, 'age'))
//console.log(getObjectValue(person, 'job'))//object doesn't have the key "job"