/*

Link: https://www.codewars.com/kata/517abf86da9663f1d2000003


DESCRIPTION:

Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).

Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"


REGULAR EXPRESSIONS  ALGORITHMS  STRINGS

*/

// My Solution

function toCamelCase(str) {
    return str
        .split(/[_-]/)
        .map((e, i) => {
            return i == 0 ?
                e :
                e
                .split("")
                .map((w, j) => {
                    return j == 0 ? w.toUpperCase() : w;
                })
                .join("");
        })
        .join("");
}



//Sample Tests

toCamelCase(""); // ''
toCamelCase("the_stealth_warrior"); // "theStealthWarrior"
toCamelCase("The-Stealth-Warrior"); // "TheStealthWarrior"
toCamelCase("A-B-C"); // "ABC"