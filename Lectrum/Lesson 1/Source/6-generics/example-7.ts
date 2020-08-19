{
    const readLength = function <T>(arg: Array<T>): Array<T> {
        console.log(arg.length);
        return arg;
    };

    readLength([1,2,3]);
}