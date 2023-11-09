
/**
    Write a function that takes in a list of unique strings and returns a list of
    semordnilap pairs.

    A semordnilap pair is defined as a set of different strings where the reverse
    of one word is the same as the forward version of the other. For example the
    words "diaper" and "repaid" are a semordnilap pair, as are the words
    "palindromes" and "semordnilap".

    The order of the returned pairs and the order of the strings within each pair
    does not matter.

    Sample Input
    words = ["diaper", "abc", "test", "cba", "repaid"]

    Sample Output
    [["diaper", "repaid"], ["abc", "cba"]]
 */


function semordnilap(words) {
    // Write your code here.
    let result = [];
    let wordBox = new Map();
    for (const element of words) {
        let word = element.split("").sort().join("");
        if (wordBox.has(word)) {
            result.push([wordBox.get(word), element])
        }
        wordBox.set(word, element);
    }
    return result;
}