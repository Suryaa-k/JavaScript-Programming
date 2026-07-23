let globalVar = 100;

function add(a, b) {
    let localVar = 10;
    return a + b + localVar - localVar;
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log("Add:", add(5, 3));
console.log("Factorial:", factorial(5));
console.log("Global:", globalVar);

// Arrow function - JavaScript's lambda equivalent
const square = (x) => x * x;
console.log("Square via lambda:", square(4));