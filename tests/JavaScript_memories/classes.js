class Animal {

constructor(name, voice) {
	this.name = name;
	this.voice = voice;
}
say() {
	console.log(this.name, this.voice);
}

}

class Bird extends Animal { //наследуем у другого класса
	constructor(birdName, birdVoice, canFly) {
		super(birdName,birdVoice);//передаёт значетия в оригинальный класс. 
		// нужно вызвать в первую очередь т.к. мы наследуем у другого класса
		this.canFly = canFly;
		super.say(); //просто вызвали наследуемый метод say
		this.say(); //вызвали переопределенный метод say

	}

	say() { //переопределяем наследуемый метод 
		console.log(`Bird ${this.name} ${this.canFly} ${this.voice}` );
	}
}

const duck = new Bird('Duck', ' quack', true);
duck.say();//Duck quack true



//class properties (пропоулз)- можно не создавать конструктор, а инициализировать, прямо в теле класса
class Counter { 
	count = 0;
	
	inc = () => {
		this.count += Counter.incrementStep;
		console.log(this.count)
	};
	static incrementStep = 2;
	static incrementAll = function(arr) {
		arr.forEach((c) => c.inc());
	}
	
}

const cnt = new Counter();
console.log(cnt.count);//0
cnt.inc(); //1