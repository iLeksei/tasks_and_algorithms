/**
 *  Write a function that takes in a non-empty string and that returns a boolean
    representing whether the string is a palindrome.
    A palindrome is defined as a string that's written the same forward and
    backward. Note that single-character strings are palindromes.
    Example:
    input: "abcdcba"
    output: true
 *
 */


function isPalindrome(string) {
    let leftCursor = 0;
    let rightCursor = string.length - 1;

    while (leftCursor <= rightCursor) {
        if (string[leftCursor] !== string[rightCursor]) return false;
        leftCursor++;
        rightCursor--;
    }

    return true;
}

console.log(isPalindrome("abcdcba")) //true
console.log(isPalindrome("abba")) //true
console.log(isPalindrome("abcd3cba")) //false