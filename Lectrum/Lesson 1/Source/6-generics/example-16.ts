{
    interface Core {
        length: number;
    }

    const getArgument = function <T extends Core>(arg: T): T {
        console.log(arg.length);  // Now we know it has a .length property, so no more error
        return arg;
    };

    // getArgument(3);  // Error, number doesn't have a .length property

    getArgument({length: 10, value: 3});
}