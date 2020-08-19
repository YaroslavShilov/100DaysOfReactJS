// Generic Class
{
    class GenericNumber<T> {
        n: T;
        sum: (a: T, b: T) => T;
    }

    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.n = 0;
    myGenericNumber.sum = function(n1, n2) {
        return n1 + n2;
    };
}