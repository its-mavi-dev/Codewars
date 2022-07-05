/*

Link: https://www.codewars.com/kata/5839edaa6754d6fec10000a2


DESCRIPTION:

#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing.
 The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"

(Use the English alphabet with 26 letters!)



MATHEMATICS ALGORITHMS

*/

// My Solution

function findMissingLetter(array) {
    var abc = "abcdefghijklmnopqrstuvwxyz";
    var arr = array.map((word) => word.toLowerCase());
    for (var i = 0; i < abc.length; i++)
        if (abc[i] === arr[0])
            for (var j = 1; j < arr.length; j++)
                if (abc[i + j] !== arr[j])
                    return arr[0] !== array[0] ? abc[i + j].toUpperCase() : abc[i + j];
}


//Sample Tests

findMissingLetter(['a', 'b', 'c', 'd', 'f']) // 'e'
findMissingLetter(['O', 'Q', 'R', 'S']) // 'P'