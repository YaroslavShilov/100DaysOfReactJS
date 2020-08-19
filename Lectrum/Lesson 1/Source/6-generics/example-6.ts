{
    const readLength = function <T>(arg: T[]): T[] {
        const n = arg[1];

        if(n instanceof Number) {
            console.log(n.toFixed());
        }
        return arg;
    };

    readLength<number>([1,2,3]);
}
