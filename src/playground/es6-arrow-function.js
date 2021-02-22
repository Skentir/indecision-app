function square (x) {
    return x * x;
};

console.log(square(8));

// const squareArrow = (x) => {
//     return x * x;
// } 

const squareArrow = (x) => x*x;
console.log(squareArrow(4));

const getFirstName = (fullname) => fullname.split(' ')[0];
console.log(getFirstName('John Cena'));