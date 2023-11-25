
/**
*     Write a function that takes in a string of words separated by one or more
*     whitespaces and returns a string that has these words in reverse order. For
*     example, given the string "tim is great", your function should
*     return "great is tim".
*
*     For this problem, a word can contain special characters, punctuation, and
*     numbers. The words in the string will be separated by one or more whitespaces,
*     and the reversed string must contain the same whitespaces as the original
*     string. For example, given the string
*     "whitespaces    4" you would be expected to return "4    whitespaces".
*
*     Note that you're not allowed to to use any built-in
*     split or reverse methods/functions. However, you
*     are allowed to use a built-in join method/function.
*
* Also note that the input string isn't guaranteed to always contain words.
* Sample Input
* string = "AlgoExpert is the best!"
*
* Sample Output
* "best! the is AlgoExpert"
*/


/**
 * time: N * M (N - words, M - length of entry)
 * space: N
 */
function reverseWordsInString(string) {
    let result = [];
    let i = 0;
    let j = 1;

    while (i < string.length) {
        let currentWord = string[i];
        let spaces = " ";
        // take word
        while (string[j] !== " " && string[j]) {
            currentWord += string[j];
            j++;
        }
        result.unshift(currentWord)
        j = j + 1;

        // take spaces
        while (string[j] === " ") {
            spaces += " ";
            j++;
        }

        // add spaces
        if (string[j] !== undefined) {
            result.unshift(spaces)
        }
        i = j;
        j = j + 1;
    }



    return result.join("");
}

console.log(reverseWordsInString("AlgoExpert is the best!")) // "best! the is AlgoExpert"
console.log(reverseWordsInString("whitespaces    4")) // "4    whitespaces"