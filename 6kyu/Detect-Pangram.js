/*

Link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048


DESCRIPTION:

A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.


STRINGS DATA STRUCTURES FUNDAMENTALS

*/

// My Solution

const isPangram = (s) =>
    "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((e) => s.toLowerCase().search(e) !== -1).length === 26;



//Sample Tests

isPangram("The quick brown fox jumps over he lazy dog.");

isPangram("This is not a pangram.");