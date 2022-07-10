/*

Link: https://www.codewars.com/kata/52449b062fb80683ec000024


DESCRIPTION:

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.


Examples


" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false


STRINGS ALGORITHMS


*/

// My Solution

function generateHashtag(s) {
    s = s
        .split(" ")
        .filter((w) => w != "")
        .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
        .join("");
    return s.length >= 140 || s == "" ? false : `#${s}`;
}


//Sample Tests

generateHashtag(""); // false, "Expected an empty string to return false")
generateHashtag(" ".repeat(200)); // false, "Still an empty string")
generateHashtag("Do We have A Hashtag"); // "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
generateHashtag("Codewars"); // "#Codewars", "Should handle a single word.")
generateHashtag("Codewars Is Nice"); // "#CodewarsIsNice", "Should remove spaces.")
generateHashtag("Codewars is nice"); // "#CodewarsIsNice", "Should capitalize first letters of words.")
generateHashtag("code" + " ".repeat(140) + "wars"); // "#CodeWars")
generateHashtag("a".repeat(139)); // "#A" + "a".repeat(138), "Should work")
generateHashtag("a".repeat(140)); // false, "Too long")