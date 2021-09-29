

const allConstruct = (target = "", wordBank = [], memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") return [[]];

    let result = [];

    for (const word of wordBank) {
        if (target.indexOf(word) === 0) {
            let nextWays = allConstruct(target.slice(word.length), wordBank, memo);
            let resultWays = nextWays.map( way => [word, ...way]);
            result.push(...resultWays);
        }
    }

    memo[target] = result;
    return result;
}

console.log(allConstruct("abcdef", ["ab", "cd", "ef", "cdef"])); // [["ab", "cd", "ef"], ["ab", "cdef"]]
console.log(allConstruct("abcdef", ["ab", "c", "d", "ee", "f"])); //  []
console.log(allConstruct("abcdefghijklmnopqrstuvwxyz", ["abb", "ccc"])); // []