let a = 10, b = 0;

try {
    if (b === 0) {
        throw new Error("Division by zero not allowed"); // raise equivalent
    }
    let result = a / b;
    console.log("Result:", result);
}
catch (e) { // except equivalent
    console.log("Error:", e.message);
}
finally { // true finally block - always executes
    console.log("Program continues (finally block)");
}