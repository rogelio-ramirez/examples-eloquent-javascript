// File to be executed with Node.js
// $ node automatic-type-conversion.js
// Self executing funtions just in order to make it easy
/*
(function <nameFunction>([formalParameters...]) {
    [codeToBeExecuted...]
})([actualParameters...]);
*/

(function automaticTypeConversion() {
    // Javascript goes out if its way to accetp almost any program you give it
    console.log('-----AUTOMATIC TYPE CONVERSION-----');

    // Even programs that do add things, for exmaple:
    // null is converted to zero in order to do multiplication
    console.log('8 * null:', 8 * null);
    // '5' is converted to number in order to do the substraction
    console.log('"5" - 1:', '5' - 1);
    // since two strings can be concatenated, 1 is converted to string
    console.log('"5" + 1:', '5' + 1);
    // the multiplication between string and number result is not a number NaN
    console.log('"five" * 2:', 'five' * 2);
    // zero is converted to false in order to do the comparation
    console.log('false == 0:', false == 0);

    // The type conversion occurs in a natural way (is it exists)
    // other way, it results in a NaN conversion.
    // Another special case is the null and undefined values
    // they are equals onlu between them, but not for other "similar" cases
    console.log('null == undefined:', null == undefined);
    console.log('null == 0:', null == 0);
})();
