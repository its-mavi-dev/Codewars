/*

Link: https://www.codewars.com/kata/57f75cc397d62fc93d000059


DESCRIPTION:

Given a string, turn each character into its ASCII character code 
and join them together to create a number - 
let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

Then replace any incidence of the number 7 with the number 1, and call this number 'total2':


total1 = 656667
              ^
total2 = 656661
              ^

Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6



FUNDAMENTALS ARRAYS STRINGS MATHEMATICS



*/

// My Solution

function calc(x) {
    return (
        x
        .split("")
        .reduce((acc, curr) => acc + curr.charCodeAt(0), "")
        .split("")
        .reduce((acc, curr) => acc + parseInt(curr), 0) -
        x
        .split("")
        .reduce((acc, curr) => acc + curr.charCodeAt(0), "")
        .replace(/7/g, "1")
        .split("")
        .reduce((acc, curr) => acc + parseInt(curr), 0)
    );
}


//Sample Tests

calc("abcdef"); // 6
calc("ifkhchlhfd"); // 6
calc("aaaaaddddr"); // 30
calc("jfmgklf8hglbe"); // 6
calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); // 96