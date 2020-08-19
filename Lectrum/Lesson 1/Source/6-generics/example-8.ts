{
    const getArgument = function <T>(arg: T): T {
        return arg;
    };

    const core = function <T>(arg: T): void {
        console.log(1);
    };

    const anotherFunction: <T>(arg: T) => T = getArgument;
    // const anotherFunction2: <T>(arg: T) => T = core;

    const n: number = <number>anotherFunction(1);
    const text: string = <string>anotherFunction('str');

    console.log(n);
    console.log(text);
}