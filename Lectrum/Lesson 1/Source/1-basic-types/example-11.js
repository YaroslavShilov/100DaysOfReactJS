// Enum
var ColorsData;
(function (ColorsData) {
    ColorsData[ColorsData["Red"] = 1] = "Red";
    ColorsData[ColorsData["Green"] = 2] = "Green";
    ColorsData[ColorsData["Blue"] = 3] = "Blue";
})(ColorsData || (ColorsData = {}));
var colorName = ColorsData[2];
console.log(colorName); // Displays 'Green' as its value is 2 above
