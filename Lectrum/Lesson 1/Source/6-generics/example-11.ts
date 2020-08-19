{
    interface GenericInterface {
        <T>(arg: T): T;
    }

    const getArgument = function <T>(arg: T): T {
        return arg;
    };

    const readArgument: GenericInterface = getArgument;

    const argument = readArgument(1);

    console.log(argument);
}