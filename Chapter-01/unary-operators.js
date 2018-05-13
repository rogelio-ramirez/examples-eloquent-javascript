// File to be executed with Node.js
// $ node unary-operators.js
// Self executing funtions just in order to make it easy
/*
(function <nameFunction>([formalParameters...]) {
    [codeToBeExecuted...]
})([actualParameters...]);
*/

(function unaryOperators() {
    // Some operators are symbols like *, /, +, -, %, etc.
    // Some other operators are words like 'typeof'
    // The unary operators receives only one value
    console.log('-----UNARY OPERATORS-----');

    // The typeof operator produces a string with the name of the type
    // In this case, the type of a number variable
    console.log('typeof 4.5:', typeof 4.5);

    // In this case, the type of a string variable
    console.log('typeof \'x\':', typeof 'x');

    // Operators that use two values are called binary operators
    // An example of an operator that can be used in both ways is minus '-'
    // In this case, the minus operator is used as binary
    console.log('minus in binary mode, 10 - 2:', 10 - 2);

    // In this case, the minus operator is used as binary
    console.log('minus in unary mode, - (8):', - (8));
})();
