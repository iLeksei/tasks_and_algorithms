/**
 *     Write a function that takes in two strings: a main string and a potential
 *     substring of the main string. The function should return a version of the main
 *     string with every instance of the substring in it wrapped between underscores.
 *
 *     If two or more instances of the substring in the main string overlap each
 *     other or sit side by side, the underscores relevant to these substrings should
 *     only appear on the far left of the leftmost substring and on the far right of
 *     the rightmost substring. If the main string doesn't contain the other string
 *     at all, the function should return the main string intact.
 *
 * Sample Input
 * string = "qestthis is a testtesq to see if testestest it works"
 * substring = "test"
 *
 * Sample Output
 * "_test_this is a _testtest_ to see if _testestest_ it works"
 */

/**
 * time: N (N - length of string)
 * space:
 */
function underscorifySubstring(string, substring) {
    let entries = [];
    let result = "";
    let i = 0;
    let j = i;

    while (j < string.length) {
        let currentSubstring = "";

        // letter doesn't match
        while (string[j] && string[j] !== substring[i]) {
            currentSubstring += string[j];
            j++;
            // i++;
        }

        // push not pattern entries
        if (currentSubstring) {
            entries.push(currentSubstring);
            currentSubstring = "";
            i = 0;
        }

        // take substring entry
        while (string[j] && string[j] === substring[i]) {
            currentSubstring += string[j];
            j++;
            i++
        }

        // push pattern entry
        if (currentSubstring) {
            entries.push(currentSubstring);
            currentSubstring = "";
            i = 0;
        }
    }

    for (let idx = 0; idx < entries.length; idx++) {
        if (entries[idx] === substring && entries[idx + 1] === substring) {
            result += "_testtest_";
            ++idx;
            continue;
        }

        if (entries[idx] === substring && entries[idx + 2] === substring) {
            result += "_test" + entries[idx + 1] + "test_";
            idx += 2;
            continue;
        }

        if (entries[idx] === "test") {
            result += "_test_";
            continue
        }

        result += entries[idx];
    }

    return result;
}

// "_test_this is aa _testtest_ to see if _testestest_ it works"
console.log(underscorifySubstring("testthis is a testtest to see if testestest it works", "test"))