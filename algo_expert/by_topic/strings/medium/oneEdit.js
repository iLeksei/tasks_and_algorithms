
/**
*     You're given two strings stringOne and stringTwo.
*     Write a function that determines if these two strings can be made equal
*     using only one edit.
*
*     There are 3 possible edits:
*         Replace: One character in one string is swapped for a different character.
*         Add: One character is added at any index in one string.
*         Remove: One character is removed at any index in one string.
*
*     Note that both strings will contain at least one character. If the strings
*     are the same, your function should return true.
*
* Sample Input
* stringOne = "hello"
* stringTwo = "hollo"
*
* Sample Output
* True * A single replace at index 1 of either string can make the strings equal
*/

/**
 * cases: hello hollo
 *         ello hello
 *       ihello hello
 *       helloi hello
 *      hell1o  hello
 *      hhello  hello
 */
function oneEdit(stringOne, stringTwo) {
    if (stringOne === stringTwo) return true;
    if (Math.abs(stringOne.length - stringTwo.length) > 1) return false;



}


console.log(oneEdit("hello", "hollo")) // true
console.log(oneEdit("ello", "hello")) // true
console.log(oneEdit("hello", "ihello")) // true
console.log(oneEdit("hell1o", "hello")) // true
console.log(oneEdit("hell1o", "hello123")) // false
console.log(oneEdit("hell1o", "he1llo")) // false
