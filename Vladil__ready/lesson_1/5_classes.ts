class Typescript {
	version: string
	
	constructor(version: string) {
		this.version = version
	}
	
	info(name: string) {
		return `[${name}]: TypeScript version is ${this.version}`
	}
}

// class Car {
// 	readonly model: string
// 	readonly numberOfWheels: number = 4
//	
// 	constructor(theModel: string) {
// 		this.model = theModel
// 	}
// }

class Car {
	readonly numberOfWheels: number = 4
	
	constructor(readonly model: string) {}
}

class Animal {
	protected voice: string = '' //I can use it using "extends"
	public color: string = 'black' //I can use it using "extends" and (new Cat()).color
	
	private go():void { //I can use it only here
		console.log('Go')
	}
}

class Cat extends Animal {
	public setVoice(voice: string): void {
		this.voice = voice
	}
}

const cat = new Cat();


abstract class Component {
	abstract render(): void
	abstract info(): string
}

class AppComponent extends Component {
	render(): void {
		console.log('Component did mount')
	}
	
	info(): string {
		return 'this is info';
	}
	
}