// arguments - bound with arrow funcs
const add = function (a,b) {
    return a + b;
}
// this keyword

const user = {
    name: 'Lumine',
    cities: ['Mondstadt', 'Liyue', 'Qingce Village'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return city +"!";
        });
        /*this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city) // arow doesnt bind to list value
        });*/
        return cityMessages;
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3,4,5,6,7,8],
    multiplyBy: 2,
    multiply() {
        const result = this.numbers.map((num) => num * this.multiplyBy);
        return result;
    }
}

console.log(multiplier.multiply());
