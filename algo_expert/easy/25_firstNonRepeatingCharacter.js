/**
 * 
    Write a function that takes in a string of lowercase English-alphabet letters
    and returns the index of the string's first non-repeating character.

    The first non-repeating character is the first character in a string that
    occurs only once.

    If the input string doesn't have any non-repeating characters, your function
    should return <span>-1</span>.

    Example:
    @string: "abcade"
    @return: 1 (b - is first non-repeating character)

*/

function firstNonRepeatingCharacter(string) {
    // Write your code here.
    let chars = {};
    for (let ch of string) {
        if (ch in chars) {
            chars[ch]++;
        } else {
            chars[ch] = 1;
        }
    }

    for (let i = 0; i < string.length; i++) {
        if (chars[string[i]] === 1) {
            return i;
        }
    }
    return -1;
}

console.log(firstNonRepeatingCharacter('abcdcaf')); // 1