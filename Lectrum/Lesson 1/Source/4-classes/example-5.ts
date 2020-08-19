class AnotherAnimal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

class Rhino extends AnotherAnimal {
  constructor() { super("Rhino"); }
}

class Employee {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

let animal = new AnotherAnimal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
// animal = employee; // Error: 'Animal' and 'Employee' are not compatible