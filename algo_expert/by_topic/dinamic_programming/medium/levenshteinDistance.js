
//
// Write a function that takes in two strings and returns the minimum number of
// edit operations that need to be performed on the first string to obtain the
// second string.
//
// There are three edit operations: insertion of a character, deletion of a
// character, and substitution of a character for another.
//
// Sample Input
// str1 = "abc"
// str2 = "yabd"
//
// Sample Output
// 2 // insert "y"; substitute "c" for "d"


function levenshteinDistance(str1 = "", str2 = "") {
    let prevRow = new Array(str2.length + 1).fill(0);
    let currRow = new Array(str2.length + 1).fill(0);

    for (let j = 0; j < str2.length; j++) {
        prevRow[j] = j
    }
    
    for (let i = 1; i <= str1.length; i++) {
        currRow[0] = i;

        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[i - 1]) {
                currRow[j] = prevRow[j - 1];
            } else {
                currRow[j] = 1 + Math.min(
                    currRow[j - 1],
                    Math.min(
                        prevRow[j],
                        prevRow[j - 1]
                    )
                )
            }
        }
        prevRow = currRow
    }

    console.table(currRow);
    return currRow[str2.length - 1];
}

console.log(levenshteinDistance("kitten", "sitting")) // 3