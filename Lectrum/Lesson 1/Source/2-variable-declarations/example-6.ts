type C = { a: string, b?: number };

function showProperties({ a, b }: C): void {
  console.log(a);
  console.log(b);
}

showProperties({a: 'a', b: 9});