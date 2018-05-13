// File to be executed with Node.js
// $ node numbers.js
// Self executing funtions just in order to make it easy
/*
(function <nameFunction>([formalParameters...]) {
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
    console.log('\n-----ARITHMETIC-----');

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

    // Doing a subtraction
    let subA = 1;
    let subB = 2;
    let subAB = subA - subB;
    console.log('subtraction:', subA, '-', subB, '=', subAB);

    // Doing a division
    let divA = 32;
    let divB = 10;
    let divAB = divA / divB;
    console.log('division:', divA, '/', divB, '=', divAB);

    // Doing a remainder
    let divA2 = 32;
    let divB2 = 10;
    let divA2B2 = divA2 % divB2;
    console.log('remainder:', divA2, '%', divB2, '=', divA2B2);

    // Showing the precedence of the operators
    console.log('\n---Precedence of the operators---');
    console.log('Remainder: %, Multiplication: * and Division: /');
    console.log('Addition: + and Subtraction: -');
    console.log('When 2 or more operators of the same precedence appear');
    console.log('next to each other, they are applied left to right');
    console.log('(as the code is read)');
    console.log('When there is doubt, just add parentheses');

    // Special numbers
    console.log('\n-----SPECIAL NUMBERS-----');
    let positiveInf = Infinity;
    let negativeInf = -Infinity;
    let notANumber = NaN;
    console.log('There is a special number Infinity: ', positiveInf);
    console.log('There is a special number Infinity (negative): ', negativeInf);
    // Both of them does not behave like normal numbers
    // When there is an operation that has no meaningful result,
    // you will obtain a NaN (Not a Number)
    console.log('NaN:', notANumber);
})();
