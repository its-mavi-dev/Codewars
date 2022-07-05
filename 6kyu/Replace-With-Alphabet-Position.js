/*

Link: https://www.codewars.com/kata/546f922b54af40e1e90001da


DESCRIPTION:

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

STRINGS FUNDAMENTALS



*/

// My Solution

function alphabetPosition(text) {
    var abc = "abcdefghijklmnopqrstuvwxyz";
    var ABC = abc.toUpperCase();
    var result = "";

    for (var i = 0; i < text.length; i++)
        for (var j = 0; j < abc.length; j++)
            if (text[i] == abc[j] || text[i] == ABC[j]) result += `${j + 1} `;
    result = result.slice(0, result.length - 1);
    return result;
}


//Sample Tests

alphabetPosition("The sunset sets at twelve o' clock."); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
alphabetPosition("The narwhal bacons at midnight."); // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"