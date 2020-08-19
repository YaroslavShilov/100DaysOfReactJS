{
    const mix = function <T, U>(number1: T, number2: T, text: U): void {
        const str = `${text}: ${number1}, ${number2}`;

        console.log(str);
    };

    const anotherFunction: <T, U>(number1: T, number2: T, text: U) => void = mix;

    anotherFunction<number, string>(1,2,'List');
}
