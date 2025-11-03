
console.log("Building payment feature...");
function processPayment(amount) {
    if (amount > 0) {
        return "Payment processed: ₹" + amount;
    } else {
        return "Invalid payment amount.";
    }
}
console.log(processPayment(1000));
