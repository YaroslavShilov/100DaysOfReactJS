{
	class Developer {
		constructor(firstname, lastname) {
			this.firstname = firstname;
			this.lastname = lastname;
		}

		getName() {
			return `${this.firstname} ${this.lastname}`;
		}

	}

	const robin = new Developer('Robin', 'Wieruch');
	console.log(robin.getName());
}

{
	class Rectangle {
		constructor(height, width) {
			this.hei = height;
			this.wei = width;
		}

		heightWeight() {
			return `${this.hei} ${this.wei}`;
		}
	}

	const result = new Rectangle(10, 20);

	console.log(result.heightWeight());	
}

{
	let result = class Rectangle {
		constructor(height, width) {
			this.hei = height;
			this.wei = width;
		}

		heightWeight() {
			return `${this.hei} ${this.wei}`;
		}
	};

	const result2 = new result(11,22);

	console.log(result2.heightWeight());
}

{
	class Rectangle {
		constructor(height, width) {
			this.height = height;
			this.width = width;
		}
		
		calcArea() {
			return this.height * this.width;
		}
		get area() {
			return this.calcArea();
		}
		fArea() {
			return this.calcArea();
		}
	}
	const square = new Rectangle(10, 10);
	console.log(square.area); //needn't brackets because we use "get"
	console.log(square.fArea()); //need brackets because it's a function
}

{
	class Point {
		constructor(x, y) {
			this.x = x;
			this.y = y;
		}

		static distance(a, b) {
			const dx = a.x - b.x;
			const dy = a.y - b.y;
			return Math.hypot(dx, dy);
		}
	}
	const p1 = new Point(5, 5);
	const p2 = new Point(10, 10);

	//console.log(Point.distance(p1, p2));
}	
	
{
	class Characters {
		constructor(firstname, secondname) {
			this.firstname = firstname;
			this.secondname = secondname;
		}
		
		static names(onePerson, twoPerson) {
			const first = `${onePerson.firstname} ${onePerson.secondname}`;
			const second = `${twoPerson.firstname} ${twoPerson.secondname}`;
			return `${first} ||| ${second}`
		}
	}
	
	const first = new Characters('John', 'Locke');
	const second = new Characters('Sawyer', 'James Ford');
	
	//console.log(Characters.names(first, second));
}

{
	class Animal {
		constructor(name) {
			this.name = name;
		}
		
		speak() {
			console.log(this.name + ' sound');
		}
	}
	
	class Dog extends Animal {
			speak() {
				console.log(this.name + " don't sound");
			}
	}
	
	let a = new Dog('One');
	a.speak();
	
	let b = new Animal('Two');
	b.speak();
	
}