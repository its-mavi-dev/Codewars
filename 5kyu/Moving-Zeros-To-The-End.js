/*

Link: https://www.codewars.com/kata/52597aa56021e91c93000cb0


DESCRIPTION:

Write an algorithm that takes an array and moves all of the zeros to the end,
 preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


ARRAYS  SORTING ALGORITHMS

*/

// My Solution

function moveZeros(arr) {
    return arr.filter((e) => e !== 0).concat(arr.filter((e) => e === 0));
}



//Sample Tests

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // [false,1,1,2,1,3,"a",0,0]