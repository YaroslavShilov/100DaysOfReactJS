{
    var mix = function (number1, number2, text) {
        var str = text + ": " + number1 + ", " + number2;
        console.log(str);
    };
    var anotherFunction = mix;
    anotherFunction(1, 2, 'List');
}
