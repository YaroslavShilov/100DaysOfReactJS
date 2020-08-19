// Type assertions
let someString: any = 'Some string';

let l: number = (<string>someString).length;

console.log(l);