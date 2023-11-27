
/**
*     You're given two non-empty strings: a big string and a small string. Write a
*     function that returns the smallest substring in the big string that contains
*     all of the small string's characters.
*
*     Note that:
*
*         The substring can contain other characters not found in the small string.
*         The characters in the substring don't have to be in the same order as they
*         appear in the small string.
*         If the small string has duplicate characters, the substring has to contain
*         those duplicate characters (it can also contain more, but not fewer).
*
*     You can assume that there will only be one relevant smallest substring.
*
* Sample Input
* bigString = "abcd$ef$axb$c$"
* smallString = "$$abf"
*
* Sample Output
* "f$axb$"
 *
 * @link https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/
*/

function smallestSubstringContaining(bigString, smallString) {
    let leftCursor = 0;
    let rightCursor = bigString.length - 1;
    let lettersSet = new Set();
    let startIdx = -1;
    let endIdx = -1;
    let result  = "";

    while (leftCursor < rightCursor) {

        if (smallString.indexOf(bigString[leftCursor]) !== -1) {
            lettersSet.add(bigString[leftCursor]);
            if (startIdx === -1) {
                startIdx = bigString[leftCursor]
            }
            leftCursor++;
            continue
        }

        if (smallString.indexOf(bigString[rightCursor]) !== -1) {
            lettersSet.add(bigString[rightCursor]);
            rightCursor--;
            if (endIdx === -1) {
                endIdx = bigString[leftCursor]
            }
            continue
        }

    }

}