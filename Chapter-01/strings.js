// File to be executed with Node.js
// $ node strings.js
// Self executing funtions just in order to make it easy
/*
(function <nameFunction>([formalParameters...]) {
    [codeToBeExecuted...]
})([actualParameters...]);
*/

(function strings() {
    // The string is the text representation
    console.log('-----STRINGS-----');
    // You can use diiferent delimiters to define a string
    // The delimiter must match
    // You can use backticks to define a string
    let strBackThicks = `Down on the sea`;
    // You can use double quotes to define a string
    let strDoubleQuotes = "Lie on the ocean";
    // You can use single quotes to define a string (most preferred way)
    let strSingleQuotes = 'Float on the ocean';
    console.log('String with backthicks:', strBackThicks);
    console.log('String with double quotes:', strDoubleQuotes);
    console.log('String with single quotes:', strSingleQuotes);

    // Escaping characters
    // Using backthicks to not escape new lines (be aware with auto indenting)
    let strBTNewLines = `This is the first line
this is the second line`;
    console.log('Multiline string:', strBTNewLines);
    // Javascript use the character "\" without quotes to indicate
    // a following special character
    let strEscapedNewLine = 'First line\nSecond line';
    console.log('String with an escapednew line character:', strEscapedNewLine);
    // Examples of escaped characters
    let strEscapedCharacters = 'A newline character is written like \"\\n\"';
    console.log('Multiple escaped characters:', strEscapedCharacters);

    // String operations (brief approach)
    // Strings cannot be divided, multiplied or subtracted (in normal way)
    // In order to operate with strings, you need methods
    // Strings can be added or concatenated
    let strConcat1 = 'hello';
    let strConcat2 = ' world!';
    let strConcatenated = strConcat1 + strConcat2;
    console.error(strConcat1, '+', strConcat2, '=', strConcatenated);

    // String with backthick can be used as template literals
    // e.g. if you want to create a string with computed values
    let strTemplateLiteral = `half of 100 is ${100 / 2}`;
    console.log('Result of template literal:', strTemplateLiteral);
})();
