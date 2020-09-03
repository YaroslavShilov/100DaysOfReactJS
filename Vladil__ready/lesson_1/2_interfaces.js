var rect1 = {
    id: '123',
    size: {
        width: 123,
        height: 123
    },
    color: '#ccc'
};
//rect1.id = '12333' //you can't do it because of "readonly"
var rect2 = {
    id: '12',
    size: {
        width: 10,
        height: 5
    }
};
rect2.color = 'black';
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: '11',
    size: {
        width: 14,
        height: 20
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
