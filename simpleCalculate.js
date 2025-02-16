const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

function simpleCalculate(a, b, operation) {
    return operation(a, b);
}


const selectedOperation = "add";
const selectedOperation2 = "subtract";
const selectedOperation3 = "multiply";
const selectedOperation4 = "divide";

console.log(simpleCalculate(2, 3, operations[selectedOperation]));
console.log(simpleCalculate(5, 3, operations[selectedOperation2]));
console.log(simpleCalculate(7, 3, operations[selectedOperation3]));
console.log(simpleCalculate(9, 3, operations[selectedOperation4]));