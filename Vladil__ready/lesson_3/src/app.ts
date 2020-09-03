class Person {
	constructor(private name: string) {

	}
}

const max = new Person('Maxim')

const btn: Element = document.querySelector('#btn')!;

console.log(btn)
btn.addEventListener('click', () => {console.log('hello')})
