// Custom exception class extending Error
class InsufficientBalanceException extends Error {
    constructor(message) {
        super(message);
        this.name = "InsufficientBalanceException"; // helps identify error type
    }
}

function withdraw(balance, amount) {
    if (amount > balance) {
        throw new InsufficientBalanceException(`Insufficient balance: cannot withdraw ${amount} from ${balance}`);
    }
    console.log("Withdrawal successful");
}

try {
    withdraw(500, 700);
}
catch (e) {
    if (e instanceof InsufficientBalanceException) {
        console.log("Error:", e.message);
    }
}