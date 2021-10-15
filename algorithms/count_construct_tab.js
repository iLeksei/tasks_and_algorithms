
// m = target
// n = wordBank.length
// O(m^2*n) time
// O(m) space

const count_construct_tab = (target = "", wordBank = []) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        for (const word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            }
        }
    }

    return table[target.length];
}

console.log(count_construct_tab("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(count_construct_tab("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1