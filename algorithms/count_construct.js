
// m = target.length
// n = wordBank.length

// O(n * m^2) time
// O(m^2) space

const countConstruct = (target = "", wordBank = [], memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") return 1;

    let total = 0;

    for (const word of wordBank) {
        if (target.indexOf(word) === 0) {
            let numWays = countConstruct(target.slice(word.length), wordBank, memo);
            total += numWays;
        }
    }
    memo[target] = total;
    return total;
}

console.log(countConstruct("abcdef", ["ab", "cd", "ef", "cdef"])); // 2
console.log(countConstruct("abcdef", ["ab", "c", "d", "ee", "f"])); // 0
console.log(countConstruct("abcdefghijklmnopqrstuvwxyz", ["abb", "ccc"])); // 0