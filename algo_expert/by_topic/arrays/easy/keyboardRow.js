/**
 * Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
 In the American keyboard:

 the first row consists of the characters "qwertyuiop",
 the second row consists of the characters "asdfghjkl", and
 the third row consists of the characters "zxcvbnm".

 Example 1:
 Input: words = ["Hello","Alaska","Dad","Peace"]
 Output: ["Alaska","Dad"]

 Example 2:
 Input: words = ["omk"]
 Output: []

 Example 3:
 Input: words = ["adsdf","sfd"]
 Output: ["adsdf","sfd"]

 Constraints:
 1 <= words.length <= 20
 1 <= words[i].length <= 100
 words[i] consists of English letters (both lowercase and uppercase).
 */

function findWords(words) {
    let row_1_chars = "qwertyuiop";
    let row_2_chars = "asdfghjkl";
    let row_3_chars = "zxcvbnm";
    let prev_row_num = -1;
    let next_row_num = -1;
    let result = [];

    for (let word of words) {
        prev_row_num = -1;
        next_row_num = -1;
        let isRowLettersWord = true;
        for (let letter of word.split("")) {
            if (!isRowLettersWord) break;
            if (row_1_chars.includes(letter.toLowerCase())) {
                next_row_num = 1;
            } else if (row_2_chars.includes(letter.toLowerCase())) {
                next_row_num = 2;
            } else if (row_3_chars.includes(letter.toLowerCase())) {
                next_row_num = 3;
            }

            if (next_row_num !== -1 && prev_row_num !== -1) {
                if (next_row_num !== prev_row_num) {
                    isRowLettersWord = false;
                }
            }
            prev_row_num = next_row_num;
        }
        if (isRowLettersWord) result.push(word);

    }
    return result;
};

console.log(findWords(
    ["Hello", "Alaska", "Dad", "Peace"]
))