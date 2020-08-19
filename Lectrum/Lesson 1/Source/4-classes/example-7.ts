class Base {
  protected name: string;
  protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Entity extends Base {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let item1 = new Entity("Howard", "Sales");
// let item2 = new Base("John"); // Error: The 'Person' constructor is protected
