class Agent {
  private _fullName: string;
  private _secret: string;
  private _passcode: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (this._passcode == this._secret) {
      this._fullName = newName;
    }
    else {
      console.log("Error: Unauthorized update of employee!");
    }
  }

  constructor(_passcode: string) {
    this._passcode = _passcode;
    this._secret = 'secret passcode';
  }

}

let agent = new Agent('secret passcode');
agent.fullName = "Bob Smith";

if (agent.fullName) {
  console.log(agent.fullName);
}