{
    const getArgument = function <T>(arg: T): T {
        return arg;
    };

    const readArgument: {<T>(arg: T): T} = getArgument;

    readArgument(1)
}