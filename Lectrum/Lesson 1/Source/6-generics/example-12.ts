{
    interface GenericInterface<T> {
        (arg: T): T;
    }

    const getArgument = function <T>(arg: T): T {
        return arg;
    };

    const readArgument: GenericInterface<number> = getArgument;

    const argument = readArgument(1);

    console.log(argument);
}