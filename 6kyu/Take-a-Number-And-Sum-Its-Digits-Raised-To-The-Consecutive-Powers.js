/*

Link: https://www.codewars.com/kata/5626b561280a42ecc50000d1


DESCRIPTION:

The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata.
 What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers,
 that may receive two integers a, b that defines the range [a, b] (inclusive) and
  outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []

Enjoy it!!

FUNDAMENTALS MATHEMATICS SORTING LOGIC



*/

// My Solution

function sumDigPow(a, b) {
    var sumArr = [];
    for (var i = a; i <= b; i++)
        if (typeof digPow(i) === "number") sumArr.push(i);
    return sumArr;
}

function digPow(n) {
    var sum = 0,
        p = 1,
        arr = n
        .toString()
        .split("")
        .map((num) => parseInt(num));

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i] ** p;
        p++;
    }
    if (sum === n) return n;
}


//Sample Tests

sumDigPow(1, 10); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
sumDigPow(1, 100); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
sumDigPow(10, 100); //  [89]
sumDigPow(90, 100); // []
sumDigPow(90, 150); // [135]
sumDigPow(50, 150); // [89, 135]
sumDigPow(10, 150); // [89, 135]