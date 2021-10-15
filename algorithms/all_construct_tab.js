

// m = target
// n = wordBank.length
// ~O(n^m) time
// O(n^m) space

const all_construct_tab = (target, wordBank) => {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);
    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        for (const word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const newCombination = table[i].map( (subArray) => [...subArray, word]);
                table[i + word.length].push(...newCombination);
            }
        }
    }

    return table[target.length];
}


console.log(all_construct_tab("birds", ["cat", "dog"])); // []
console.log(all_construct_tab("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // [ [ 'abc', 'def' ] ]
