// File to be executed with Node.js
// $ node short-circuiting-logical-operators.js
// Self executing funtions just in order to make it easy
/*
(function <nameFunction>([formalParameters...]) {
    [codeToBeExecuted...]
})([actualParameters...]);
*/

(function shortCiscuitingLogicalOperators() {
    // Logical operators && 'and' and || 'or' hyandle values in different ways.
    // They will convert the value of their left side to Boolean type in order
    // to decide what to do, but depending on the operator and the result
    // of that conversion, they will return either the original left-hand value
    // or the right-hand value
    console.log('-----SHORT-CIRCUITING OF LOGICAL OPERATORS-----');

    // The || 'or' operator, for example, will return thw value to its left
    // when that can be converted tu true and will return the value on its
    // otherwise. This has the expected effect when the values are Boolean,
    // and does something analogous for values of other types.

    // Since null is converted to false, "user" is returned
    console.log('null || "user":', null || 'user');

    // Since "Agnes" is converted to true, "user" is not evaluated
    // and "Agnes" is returned
    console.log('"Agnes" || "user":', 'Agnes' || 'user');

    // Since undefines is converted to false, 5 is not evaluated
    console.log('undefined && 5:', undefined && 5);

    // Since null is converted to false, 5 is evaluated, but null is returned
    console.log('10 && null:', null && 5);

    // Since "Some" and 15 are converted to true, the && 'and' operator returns
    // the right part.
    console.log('"Some" && 15:', 'Some' && 15);

    // The right part of the operator is evaluated only if necessary
    // In || 'or' operator, if the left part is true, the right part is not
    // evaluated. In && 'and' operator, if the left operator is false,
    // the right part is not evaluated.
})();
