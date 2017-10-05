//arguments object - no longer bound with arrow function  // ex console.log(arguments)

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}

console.log(add(5, 9));

// this keyword - no longer bound

const user = {
    name: 'Gagan Jaswal',
    cities: ['Mohali', 'Chandigarh', 'Mukerian'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return city;
        })
        return cityMessages;
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy )
    }
};

