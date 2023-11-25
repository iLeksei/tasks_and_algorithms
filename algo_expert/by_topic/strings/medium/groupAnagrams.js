
/**
*     Write a function that takes in an array of strings and groups anagrams together.
*
*     Anagrams are strings made up of exactly the same letters, where order doesn't
*     matter. For example, "cinema" and "iceman" are
*     anagrams; similarly, "foo" and "ofo" are anagrams.
*
*     Your function should return a list of anagram groups in no particular order.
*
* Sample Input
* words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
*
* Sample Output
* [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]
*/

/**
 * time: N * M * logM (sorting) (N - words, M - length of word)
 * space: N
 */
function groupAnagrams(words) {
    let wordMap = new Map();

    for (const word of words) {
        let sortedWord = word.split("").sort().join("");
        if (wordMap.has(sortedWord)) {
            let anagrams = wordMap.get(sortedWord);
            anagrams.push(word);
        } else {
            wordMap.set(sortedWord, [word]);
        }
    }

    return Array.from(wordMap.values());
}

//[["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]
console.log(groupAnagrams(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]))
