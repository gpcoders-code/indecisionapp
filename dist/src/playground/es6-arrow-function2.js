'use strict';

//arguments object - no longer bound with arrow function  // ex console.log(arguments)

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};

console.log(add(5, 9));

// this keyword - no longer bound

var user = {
    name: 'Gagan Jaswal',
    cities: ['Mohali', 'Chandigarh', 'Mukerian'],
    printPlacesLived: function printPlacesLived() {
        var cityMessages = this.cities.map(function (city) {
            return city;
        });
        return cityMessages;
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (number) {
            return number * _this.multiplyBy;
        });
    }
};
//# sourceMappingURL=es6-arrow-function2.js.map