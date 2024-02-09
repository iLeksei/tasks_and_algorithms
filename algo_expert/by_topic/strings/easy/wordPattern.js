/**
 * Given a pattern and a string s, find if s follows the same pattern.
 * Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
 *
 * Example 1:
 * Input: pattern = "abba", s = "dog cat cat dog"
 * Output: true
 *
 * Example 2:
 * Input: pattern = "abba", s = "dog cat cat fish"
 * Output: false
 *
 * Example 3:
 * Input: pattern = "aaaa", s = "dog cat cat dog"
 * Output: false
 *
 * Constraints:
 *
 * 1 <= pattern.length <= 300
 * pattern contains only lower-case English letters.
 * 1 <= s.length <= 3000
 * s contains only lowercase English letters and spaces ' '.
 * s does not contain any leading or trailing spaces.
 * All the words in s are separated by a single space.
 * */

function wordPattern(pattern, str) {
    let words = str.split(" ");
    if (words.length !== pattern.length) return false;
    let wordsMap= new Map([
        [words[0], pattern[0]]
    ])
    let lettersMap = new Map([
        [pattern[0], words[0]]
    ]);

    for (let i = 1; i < pattern.length; i++) {
        if (!wordsMap.has(words[i]) && !lettersMap.has(pattern[i])) {
            wordsMap.set(words[i], pattern[i]);
            lettersMap.set(pattern[i], words[i]);
            continue;
        }
        if (lettersMap.get(pattern[i]) !== words[i]) {
            return false;
        }
    }
    return true;
};

// console.log(wordPattern("abba", "dog cat cat dog")) // true
// console.log(wordPattern("abba", "dog dog dog dog")) // false
// console.log(wordPattern("abba", "dog cat cat fish")) // false
console.log(wordPattern("abba", "dog constructor constructor dog")) // false
