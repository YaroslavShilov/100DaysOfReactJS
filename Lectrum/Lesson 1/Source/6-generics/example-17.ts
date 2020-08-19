{
    function getSomeData<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }

    const properties = { a: 1, b: 2, c: 3, d: 4 };

    getSomeData(properties, "a"); // okay
    // getSomeData(properties, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
}