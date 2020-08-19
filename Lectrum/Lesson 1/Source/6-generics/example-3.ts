{
    const returnValueByGeneric = function <T>(arg: T): T {
        return arg;
    };

    const text: string = returnValueByGeneric<string>('str');
    const n: number = returnValueByGeneric<number>(1);

    console.log(text);
    console.log(n);
}