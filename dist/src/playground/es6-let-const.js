"use strict";

var nameVar = "Gagan Jaswal";
var nameVar = "Pardip";
console.log(nameVar);

var nameLet = "Meri Gugu";
console.log(nameLet);
nameLet = "okay";

var nameConst = "Frank";
console.log(nameConst);

function getPetName() {
    var petName = 'Bakri';
    return petName;
}

getPetName();

console.log(getPetName());

var fullName = 'Gagan Jaswal';
var FirstName = void 0;
if (fullName) {
    FirstName = fullName.split(' ')[0];
    console.log(FirstName);
}

console.log(FirstName);
//# sourceMappingURL=es6-let-const.js.map