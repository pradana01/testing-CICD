function calculator(n1, n2, operator) {
    switch (operator) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2;
        case "%":
            return n1 % n2;
    
        default:
            return "Please use +, -, *, /, %"
    }
}

// console.log(calculator(5,5,"%"))
module.exports = calculator;