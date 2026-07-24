// Arrow functions are JavaScript's lambda equivalent
const square = (x) => x * x;
const add = (a, b) => a + b;

console.log("Square:", square(5));
console.log("Add:", add(3, 4));

// Arrow function capturing outer variable (closure) - true lexical 'this'
let factor = 10;
const multiplyByFactor = (x) => x * factor;
console.log("Multiply:", multiplyByFactor(5));