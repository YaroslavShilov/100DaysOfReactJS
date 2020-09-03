interface Rect {
	readonly id: string
	color?: string
	size: {
		width: number
		height: number
	}
}

const rect1: Rect = {
	id: '123',
	size: {
		width: 123,
		height: 123,
	},
	color: '#ccc'
}

//rect1.id = '12333' //you can't do it because of "readonly"

const rect2: Rect = {
	id: '12',
	size: {
		width: 10,
		height: 5
	}
}

rect2.color = 'black';

const rect3 = {} as Rect;
const rect4 = <Rect>{}


interface RectWithArea extends Rect {
	getArea: () => number
}

const rect5: RectWithArea = {
	id: '11',
	size: {
		width: 14,
		height: 20,
	},
	getArea(): number {
		return this.size.width * this.size.height;
	},
}


interface IClock {
	time: Date,
	setTime(date: Date): void
}

class Clock implements IClock {
	time: Date = new Date();
	setTime(date: Date): void {
		this.time = date
	}
}

interface Styles {
	[key:string]: string
}

const css: Styles = {
	border: '1px solid black',
	marginTop: '2px',
	borderRadius: '5px'
}
