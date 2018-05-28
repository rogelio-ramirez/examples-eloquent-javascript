// File to be executed with Node.js
// $ node boolean.js
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

    // '>' and '<' signs are the traditional symbols for "greater than"
    // and "less than" respectively, they are binary operators.
    // Those operators will produce a boolean value, these even work for strings
    console.log('\'Aardvark\' < \'Zoroaster\':', 'Aardvark' < 'Zoroaster');
    console.log('Itchy\' != \'Scratchy\':', 'Itchy' != 'Scratchy');
    console.log('\'Apple\' == \'Orange\':', 'Apple' == 'Orange');

    // There is only one value in Javascript that is not equal to itself,
    // tha 'Not a Number' ('NaN') value
    console.log('NaN == NaN:', NaN == NaN);

    // NaN is supposed to denote the result of a nonsensical computation, a
    // nonsensical computation won't be equal to another nonsensical computation
})();
