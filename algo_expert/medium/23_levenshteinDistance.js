



function levenshteinDistance(str1 = "", str2 = "") {
    // Write your code here.
    if (!str1) return str2.length;
    let result = 0;
    let i = 0, j = 0;

    while (j < str2.length) {
        if (str2[j] === str1[i]) {
            i++;
            j++;
            continue;
        }

        if (str2[j] !== str1[i]) {
            result++;
            j++;
            i++;
            continue;
        }

        if (str2[j] !== str1[i]) {
            result++;
            j++;
        }
    }
    return result;
}

// console.log(levenshteinDistance("abc", "yabd"))
// console.log(levenshteinDistance("cereal", "saturday"))
console.log(levenshteinDistance("gumbo", "gambol"))