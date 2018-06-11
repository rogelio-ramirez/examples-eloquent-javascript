// File to be executed with Node.js
// $ node empty-values.js
// Self executing funtions just in order to make it easy
/*
(function <nameFunction>([formalParameters...]) {
    [codeToBeExecuted...]
})([actualParameters...]);
*/

(function emptyValues() {
    // There are two special values to denote absence of a meaningful value
    // They are null and undefined. They are values and carry no information.
    console.log('-----EMPTY VALUES-----');

    // The null value and the undefined value are equal, but not the same type:
    console.log('null == undefined -> ', null == undefined);
    console.log('null === undefined -> ', null === undefined);
    // The null value will be ever the same with itself
    console.log('null === null -> ', null === null);
    // The undefined value will be ever the same with itself
    console.log('undefined === undefined ->', undefined === undefined);
})();
