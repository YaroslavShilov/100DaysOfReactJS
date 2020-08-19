type f = (baseValue: number, increment: number) => number;

let increase
  = <f>function increase(x: number, y: number): number {
  return x + y;
};

const updatedValue: number = increase(3,1);

console.log(updatedValue);
