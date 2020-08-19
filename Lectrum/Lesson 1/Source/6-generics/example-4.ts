{
    const returnValueByGeneric = function <T>(arg: T): T {
        return arg;
    };

    const text = returnValueByGeneric('str');
    const n: number = returnValueByGeneric(1);

    console.log(text);
    console.log(n);
}
