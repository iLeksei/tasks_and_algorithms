/**
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.

 Example 1:

 Input: s = "A man, a plan, a canal: Panama"
 Output: true
 Explanation: "amanaplanacanalpanama" is a palindrome.
 Example 2:

 Input: s = "race a car"
 Output: false
 Explanation: "raceacar" is not a palindrome.
 Example 3:

 Input: s = " "
 Output: true
 Explanation: s is an empty string "" after removing non-alphanumeric characters.
 Since an empty string reads the same forward and backward, it is a palindrome.

 Constraints:

 1 <= s.length <= 2 * 105
 s consists only of printable ASCII characters.
*/

var isPalindrome = function(s) {
    if (s.length < 2) return true;
    let leftCursor = 0;
    let rightCursor = s.length - 1;

    while (leftCursor < rightCursor) {
        if (!isLetterOrDigit(s[leftCursor])) {
            leftCursor++;
            continue
        }

        if (!isLetterOrDigit(s[rightCursor])) {
            rightCursor--;
            continue;
        }

        if (s[leftCursor].toLowerCase() !== s[rightCursor].toLowerCase()) {
            return false;
        }
        leftCursor++;
        rightCursor--;
    }

    return true;
};

function isLetterOrDigit(char = "") {
    let aCharCode = "a".charCodeAt();
    let zCharCode = "z".charCodeAt();
    let ACharCode = "A".charCodeAt();
    let ZCharCode = "Z".charCodeAt();
    let charCode_0 = "0".charCodeAt();
    let charCode_9 = "9".charCodeAt();
    let charCode = char.charCodeAt();

    if (Number.isNaN(charCode)) return false;

    if (
        (charCode >= aCharCode &&  charCode <= zCharCode) ||
        (charCode >= ACharCode &&  charCode <= ZCharCode) ||
        (charCode >= charCode_0 &&  charCode <= charCode_9)
    ) return true;
    return false;
}
