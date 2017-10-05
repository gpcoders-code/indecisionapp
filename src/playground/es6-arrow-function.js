const square = function (x) {
    return x * x;
};

console.log(square(3));

const squareArrow = (x) => {
    return x * x;
}

console.log(squareArrow(8));

const squarArrowOne = (x) => x * x;

console.log(squarArrowOne(5))

const nameArrow = (name) => name.split(' ')[0]

console.log(nameArrow('Pardip Bhatti'));
