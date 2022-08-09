/*

Link: https://www.codewars.com/kata/52685f7382004e774f0001f7


DESCRIPTION:

Write a function, which takes a non-negative integer (seconds) as input
and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.



DATE TIME  MATHEMATICS  ALGORITHMS

*/

// My Solution

function humanReadable(sec) {
    let HH = Math.floor(sec / (60 * 60)),
        MM = Math.floor((sec - HH * 60 * 60) / 60),
        SS = Math.floor(sec - HH * 60 * 60 - MM * 60);

    return `${addZero(HH)}:${addZero(MM)}:${addZero(SS)}`;
}

function addZero(TT) {
    return (TT = TT.toString().length === 1 ? "0" + TT : "" + TT);
}


//Sample Tests

humanReadable(0); // '00:00:00'
humanReadable(59); // '00:00:59'
humanReadable(60); // '00:01:00'
humanReadable(90); // '00:01:30'
humanReadable(3599); // '00:59:59'
humanReadable(3600); // '01:00:00'
humanReadable(45296); // '12:34:56'
humanReadable(86399); // '23:59:59'
humanReadable(86400); // '24:00:00'
humanReadable(359999); // '99:59:59'