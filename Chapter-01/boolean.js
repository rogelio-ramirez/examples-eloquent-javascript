// File to be executed with Node.js
// $ node unary-operators.js
// Self executing funtions just in order to make it easy
/*
(function <nameFunction>([formalParameters...]) {
    [codeToBeExecuted...]
})([actualParameters...]);
*/

(function boolean() {
    // The boolean is the 'two values only' representation of a variable
    // The values can be seen as a couple of 'yes or no',
    // 'true or false', 'on or off', etc.
    console.log('-----BOOLEANS-----');

    // The values in Javascript are 'true' and 'false'
    // In this case, the output will be true
    console.log('3 > 2:', 3 > 2);

    // In this case, the output will be false
    console.log('3 < 2:', 3 < 2);
})();
