{
    class GenericNumber<T> {
        n: T;
        sum: (a: T, b: T) => T;
    }

    let stringNumeric = new GenericNumber<string>();
    stringNumeric.n = "";
    stringNumeric.sum = function(n1, n2) { return n1 + n2; };

    console.log(stringNumeric.sum(stringNumeric.n, "test"));
}