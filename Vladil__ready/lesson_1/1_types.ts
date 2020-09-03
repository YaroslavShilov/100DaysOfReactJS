const str: string = 'hello';
const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 32;

const numberArray: number[] = [1,2,3,4,5];
const numberArray2: Array<number> = [1,23,45,]

const words: string[] = ['hello', 'ts'];

const contact: [string, number] = ['Name', 12345]

let variable: any = 42;
variable = 'string';
variable = false;

const sayMyName = (name: string): void => {
	console.log(name)
}
sayMyName('myName')

const throwError = (message: string): never => {
		throw new Error(message)
}

// const infinite = (): never => {
// 	while(true) {}
// }

type Login = string;

const login: Login = 'admin';
//const login2: Login = 2;

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
//const id3: ID = true

type SomeType = strint | null | undefined

