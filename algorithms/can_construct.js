

// m - target.length
// n - bank.length
// O (n * m^2) time
// O (m^2) space

const canConstruct = (target = "", bank = [], memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") return true;


    for (const item of bank) {
        if (target.indexOf(item) === 0) {
            let suffix = target.slice(item.length);
            if (canConstruct(suffix, bank, memo) === true) {
                memo[target] = true
                return true;
            };
        }
    }

    memo[target] = false
    return false;
}


console.log(canConstruct("abcdef", ["ab", "cd", "bcd", "ef"]));
console.log(canConstruct("abcdef", ["ab", "bcde", "bcd", "ef"]));
console.log(canConstruct("ab", ["aa", "bcde", "bcd", "ef"]));