// File to be executed with Node.js
// $ node logical-operators.js
// Self executing funtions just in order to make it easy
/*
(function <nameFunction>([formalParameters...]) {
    [codeToBeExecuted...]
})([actualParameters...]);
*/

(function logcialOperators() {
    // There are some operations that canbe applied to Boolean value themselves
    // Javascript suports three logical operators:
    // 'and', 'or', and 'not'
    console.log('-----LOGICAL OPERATORS-----');

    // The '&&' operator represents logical 'and', it's a binary operator
    // and its result is true only if both the values given to it are true
    console.log('&& and');
    console.log('false && false:', false && false);
    console.log('true && false:', true && false);
    console.log('false && true:', false && true);
    console.log('true && true:', true && true);

    // The '||' operator represents logical 'or', it's a binary operator
    // and its result is true if either of the values given to is is true
    console.log('|| or');
    console.log('false || false:', false || false);
    console.log('true || false:', true || false);
    console.log('false ||true:', false || true);
    console.log('true || true:', true || true);

    // The '!' operator represents logical 'not', it's unary operator
    // and its result is the opposite of the given value
    console.log('! not');
    console.log('!true:', !true);
    console.log('!false:', !false);

    // The last logical operator is not unary, not binary, but ternary
    // because it operates with three values, it's written with a question mark
    // and a colon: expression ? value_if_true : value_if_false
    console.log('ternary operator:',
    '(expression) ? value_if_true : value_if_false');
    console.log('(grade=8 > 6) ? \'success\' : \'fail\' ->',
    (8 > 6) ? 'success' : 'fail');
    console.log('true ? 1 : 2 ->', true ? 1 : 2);
    console.log('false ? 1 : 2 ->', false ? 1 : 2);
})();
