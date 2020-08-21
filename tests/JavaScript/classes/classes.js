// // const Animal = {
// // 	name: 'Animal',
// // 	age: 5,
// // 	hasTail: true
// // };
//
// class Animal {
//	
// 	static type = 'ANIMAL'
//	
// 	constructor(options) {
// 		this.name = options.name
// 		this.age = options.age
// 		this.hasTail = options.hasTail
// 	}
//	
// 	voice() {
// 		console.log("I'm animal")
// 	}
// }
//
// // const animal = new Animal({
// // 	name: 'Cat',
// // 	age: 5,
// // 	hasTail: true
// // })
//
//
// class Cat extends Animal {
// 	constructor(option) {
// 		super(option);
// 		this.type = option.type
// 	}
// }
//
// const cat = new Cat({
// 	name: 'Cat',
// 	age: 7,
// 	hasTail: true,
// 	type: 'Russian'
// })
//
// console.log(cat);

class Component {
	constructor(select) {
		this.$el = document.querySelector(select);
	}
	
	hide() {
		this.$el.style.display = 'none'
	}
	
	show() {
		this.$el.style.display = 'block'
	}
}

class Box extends Component {
	constructor({selector, size, color}) {
		super(selector);
		this.$el.style.width = this.$el.style.height = size + 'px';
		this.$el.style.background = color
	}
}

const box1 = new Box({
	selector: '#box1',
	size: 100,
	color: 'red',
})

class Circle extends Box {
	constructor(options) {
		super(options)
		this.$el.style.borderRadius = '50%'
	}
}

const circle1 = new Circle({
	selector: '#circle1',
	size: 100,
	color: 'blue',
})