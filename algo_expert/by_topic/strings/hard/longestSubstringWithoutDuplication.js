
/**
*     Write a function that takes in a string and returns its longest substring
*     without duplicate characters.
*
* You can assume that there will only be one longest substring without duplication.
* Sample Input
* string = "clementisacap"
*
* Sample Output
* "mentisac"
*/

/**
 * time: N logN (N - length of string)
 * space: N (N - length of string)
 */
function longestSubstringWithoutDuplication(string) {
    let i = 0;
    let j = 1;
    let longestSubstring = "";
    let lettersIdxMap = new Map();
    lettersIdxMap.set(string[i], i);

    while (j < string.length) {
        let currentSubstr = string[i];

        while (string[j] && !currentSubstr.includes(string[j])) {
            currentSubstr+=string[j];
            lettersIdxMap.set(string[j], j);
            j++;
        }
        if (currentSubstr.length > longestSubstring.length) {
            longestSubstring = currentSubstr;
        }

        if (!string[j]) break;

        i = lettersIdxMap.get(string[j]) + 1;
        j = i + 1;
    }

    return longestSubstring;
}

console.log(longestSubstringWithoutDuplication("clementisacap")) //"mentisac"
console.log(longestSubstringWithoutDuplication("clementisaca123456789rypc")) //"mentisac"