/*

Link: https://www.codewars.com/kata/51fc12de24a9d8cb0e000001


DESCRIPTION:

ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. 
The last digit can be 0-9 or X, to indicate a value of 10.

An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

For example:

ISBN     : 1 1 1 2 2 2 3 3 3  9
position : 1 2 3 4 5 6 7 8 9 10


This is a valid ISBN, because:

(1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0


Examples
1112223339   -->  true
111222333    -->  false
1112223339X  -->  false
1234554321   -->  true
1234512345   -->  false
048665088X   -->  true
X123456788   -->  false



REGULAR EXPRESSIONS  ALGORITHMS


*/

// My Solution

function validISBN10(isbn) {
    if (isbn.length > 10) return false;
    let arr = isbn.split("").map((e) => parseInt(e)),
        sum = [],
        sum9 = [];
    for (let i = 1; i < 11; i++) sum[i - 1] = i * arr[i - 1];
    for (let i = 1; i < 10; i++) sum9[i - 1] = i * arr[i - 1];
    return sum.reduce((acc, curr) => acc + curr, 0) % 11 == 0 ?
        true :
        isbn[9] == "X" && sum9.reduce((acc, curr) => acc + curr, 0) % 1 == 0 ?
        true :
        false;
}


//Sample Tests


validISBN10("1112223339"); // true
validISBN10("048665088X"); // true
validISBN10("1293000000"); // true
validISBN10("1234554321"); // true
validISBN10("1234512345"); // false
validISBN10("1293"); // false
validISBN10("X123456788"); // false
validISBN10("ABCDEFGHIJ"); // false
validISBN10("XXXXXXXXXX"); // false
validISBN10("048665088XZ"); //false