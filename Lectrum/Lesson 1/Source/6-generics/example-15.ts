{
    const getArgument = function <T>(arg: T): T {
        // console.log(arg.length);  // Error: T doesn't have .length
        return arg;
    }
}