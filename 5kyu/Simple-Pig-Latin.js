/*

Link: https://www.codewars.com/kata/520b9d2ad5c005041100000f


DESCRIPTION:

Move the first letter of each word to the end of it,
 then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !


REGULAR EXPRESSIONS  ALGORITHMS

*/

// My Solution

function pigIt(str) {
    return str
        .split(" ")
        .map((word) => {
            return word.toLowerCase() !== word.toUpperCase() ?
                `${word.slice(1)}${word.slice(0, 1)}ay` :
                word;
        })
        .join(" ");
}

//Sample Tests

pigIt('Pig latin is cool'); //igPay atinlay siay oolcay
pigIt('This is my string'); //hisTay siay ymay tringsay