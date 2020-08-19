type Schema = { a: string, b?: number };

function init({ a, b = 0 }:Schema = { a: "" }): void {
  console.log(a);
  console.log(b);
}

init({ a: 'str'});