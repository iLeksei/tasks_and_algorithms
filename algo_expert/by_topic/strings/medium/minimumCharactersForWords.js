/**
*     Write a function that takes in an array of words and returns the smallest
*     array of characters needed to form all of the words. The characters don't need
*     to be in any particular order.
*
*     For example, the characters ["y", "r", "o", "u"] are needed to
*     form the words ["your", "you", "or", "yo"].
*
*     Note: the input words won't contain any spaces; however, they might contain
*     punctuation and/or special characters.
*
* Sample Input
* words = ["this", "that", "did", "deed", "them!", "a"]
*
* Sample Output
* ["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]
* The characters could be ordered differently.
*/


/**
 * time: N * M (N - words, M - letters)
 * space: N * M
 */
function minimumCharactersForWords(words) {
    let lettersMap = {};
    let result = [];

    for (const word of words) {
        let wordLetters = {};
        for (const letter of word) {
            // first time letter
            if (!(letter in wordLetters)) {
                wordLetters[letter] = 1;
                continue;
            }

            if (!lettersMap[letter]) {
                lettersMap[letter] = 1;
            }

            if (wordLetters[letter] + 1 > lettersMap[letter]) {
                lettersMap[letter]++;
                wordLetters[letter]++;
            }

        }

        for (const letter in wordLetters) {
            if (!lettersMap[letter] || wordLetters[letter] > lettersMap[letter]) {
                lettersMap[letter] = wordLetters[letter];
            }
        }
    }

    for (const letter in lettersMap) {
        for (let i = 0; i < lettersMap[letter]; i++) {
            result.push(letter);
        }
    }
    return result;
}

// ["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]
console.log(minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"]))