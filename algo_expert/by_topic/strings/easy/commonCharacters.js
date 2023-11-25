/**
* Write a function that takes in a non-empty list of non-empty strings and
* returns a list of characters that are common to all strings in the list,
* ignoring multiplicity.
*
* you return can be in any order.
*
* Sample Input
* strings = ["abc", "bcd", "cbaccd"]
*
* Sample Output
* ["b", "c"] * The characters could be ordered differently.
*/


function commonCharacters(strings) {
   let currentCharSet = new Set(strings[0]);

    for (let i = 1; i < strings.length; i++) {
        for (const char of currentCharSet) {
            if (!strings[i].includes(char)) {
                currentCharSet.delete(char);
            }
        }
    }

    return Array.from(currentCharSet);
}

console.log(commonCharacters(["abc", "bcd", "cbaccd"])) // ["b", "c"]
console.log(commonCharacters(["wasdf", "qwefs", "wdghtf"])) // ["w", "f"]
