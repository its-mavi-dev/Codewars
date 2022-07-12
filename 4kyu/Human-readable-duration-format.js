/*

Link: https://www.codewars.com/kata/52742f58faf5485cae000b9a


DESCRIPTION:

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.



STRINGS  DATE TIME  ALGORITHMS

*/

// My Solution

function formatDuration(sec) {
    if (sec === 0) return "now";
    var res = [0, 0, 0, 0, 0],
        std = [31536000, 86400, 3600, 60, 1];
    if (sec / std[0] >= 1) {
        res[0] = Math.floor(sec / std[0]);
        sec = sec % std[0];
    }
    if (sec / std[1] >= 1) {
        res[1] = Math.floor(sec / std[1]);
        sec = sec % std[1];
    }
    if (sec / std[2] >= 1) {
        res[2] = Math.floor(sec / std[2]);
        sec = sec % std[2];
    }
    if (sec / std[3] >= 1) {
        res[3] = Math.floor(sec / std[3]);
        sec = sec % std[3];
    }
    if (sec >= 1) res[4] = Math.floor(sec);
    return getStr(res);
}

function getStr(arr) {
    var res = [];
    res[0] = arr[0] !== 0 ? (arr[0] > 1 ? " years" : " year") : 0;
    res[1] = arr[1] !== 0 ? (arr[1] > 1 ? " days" : " day") : 0;
    res[2] = arr[2] !== 0 ? (arr[2] > 1 ? " hours" : " hour") : 0;
    res[3] = arr[3] !== 0 ? (arr[3] > 1 ? " minutes" : " minute") : 0;
    res[4] = arr[4] !== 0 ? (arr[4] > 1 ? " seconds" : " second") : 0;

    res = res
        .map((e, i) => arr[i] + e)
        .filter((e) => e !== 0)
        .join(", ");
    return res.indexOf(",") != -1 ?
        res.substring(0, res.lastIndexOf(",")) +
        " and" +
        res.substring(res.lastIndexOf(",") + 1) :
        res;
}


//Sample Tests

formatDuration(1); // "1 second"
formatDuration(62); // "1 minute and 2 seconds"
formatDuration(120); // "2 minutes"
formatDuration(3600); // "1 hour"
formatDuration(3662); // "1 hour, 1 minute and 2 seconds"