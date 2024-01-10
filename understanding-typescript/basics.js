"use strict";
function add(n1, n2, showResult) {
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5;
const number2 = 3;
const printResult = false;
const result = add(number1, number2, printResult);
console.log(result);
