
/**
*     Write a function that, given a string, returns its longest palindromic
*     substring.
*
*     A palindrome is defined as a string that's written the same forward and
*     backward. Note that single-character strings are palindromes.
*
* You can assume that there will only be one longest palindromic substring.
* Sample Input
* string = "abaxyzzyxf"
*
* Sample Output
* "xyzzyx"
*/

/**
 * time: N * logN
 * space: M - length of string
 */
function longestPalindromicSubstring(string) {
    let longestPalindrome = "";

    for (let i = 0; i < string.length; i++) {
        let lastIdx = string.lastIndexOf(string[i]);
        if (lastIdx === i) continue;
        let j = i + 1;
        let leftPart = "" + string[i];
        let rightPart = string[lastIdx] + "";

        while (j < lastIdx) {
            if (string[j] === string[lastIdx - 1]) {
                leftPart+=string[j];
                rightPart = string[lastIdx - 1] + rightPart;
                j++;
                lastIdx--;
            } else {
                leftPart = "";
                rightPart = ""
                break;
            }
        }

        longestPalindrome = (leftPart + rightPart).length > longestPalindrome.length ?
            leftPart + rightPart : longestPalindrome
    }

    return longestPalindrome;
}

console.log(longestPalindromicSubstring("abaxyzzyxf")) // "xyzzyx"
console.log(longestPalindromicSubstring("qwrdffdrwiytty")) // "wrdffdrw"
console.log(longestPalindromicSubstring("qwrd1ffdrwiytty")) // "ytty"