/*

Link: https://www.codewars.com/kata/514a024011ea4fb54200004b


DESCRIPTION:

Write a function that when given a URL as a string,
parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"


PARSING REGULAR EXPRESSIONS


*/

// My Solution

function domainName(url) {
    return url
        .replace("https://", "")
        .replace("http://", "")
        .replace("www.", "")
        .split(".")[0];
}


//Sample Tests

domainName("http://google.com"); // "google"
domainName("http://google.co.jp"); // "google"
domainName("www.xakep.ru"); // "xakep"
domainName("https://youtube.com"); // "youtube"