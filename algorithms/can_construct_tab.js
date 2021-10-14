
// m = target.length
// n = options.length

// O(m^2*n)  time
// O(m)  space

const can_construct_tab = (target, wordBank) => {
        const tab = Array(target.length + 1).fill(false);
        tab[0] = true; // initial value

        for (let i = 0; i <= target.length; i++) {
            if (tab[i] === true) {
                for (const word of wordBank) {
                    if (target.slice(i, i + word.length) === word) {
                        tab[i + word.length] = true;
                    }
                }
            }
        }
        return tab[target.length];

}

console.log(can_construct_tab("abcdef", ["ab", "abc", "cd", "def", "abcd"])) // true
console.log(can_construct_tab("abcdef", ["a", "bc", "def"])) // true
console.log(can_construct_tab("abcedf", ["abc", "def", "g"])) // false
console.log(can_construct_tab("abcdef", ["abbcd", "ef"])) // false