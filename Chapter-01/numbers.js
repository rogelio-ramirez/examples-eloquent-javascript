// File to be executed with Node.js
// $ node numbers.js
// Self executing funtions just in order to make it easy
/*
(function <nameFunction>([formalParameters...]){
    [codeToBeExecuted...]
})([actualParameters...]);
*/

(function numbers() {
    // Declaring variables
    console.log('-----NUMBERS-----');

    // Declaring a numeric value, being this integer
    let integer = 13;
    console.log('number = ', integer);

    // Declaring a numeric value, being this decimal
    let decimal = 9.81;
    console.log('decimal = ', decimal);

    // Declaring a numeric value, being this in scientific notation
    let scientific = 2.998e8;
    console.log('scientific = 2.998e8 = ', scientific);
})();

(function arithmetic() {
    // Doing arithmetic
    console.log('-----ARITHMETIC-----');

    // Doing an addition
    let sumA = 100;
    let sumB = 4;
    let sumAB = sumA + sumB;
    console.log('addition:', sumA, '+', sumB, '=', sumAB);

    // Doing a multiplication
    let prodA = 4;
    let prodB = 11;
    let prodAB = prodA * prodB;
    console.log('multiplication:', prodA, '*', prodB, '=', prodAB);

    // Doing a multiplication using parenthesis
    let prodPar = (100 + 4) * 11;
    console.log('multiplication with parenthesis: (100 + 4) * 11 =', prodPar);
})();
