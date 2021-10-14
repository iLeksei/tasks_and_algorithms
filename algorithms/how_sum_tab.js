

// m = target
// n = numbers.length
// O(m^2 x n) time
// O(m) space
const how_sum_tab = (target, numbers) => {
    const tab = Array(target + 1).fill(null);
    tab[0] = [];

    for (let i = 0; i <= target; i++) {
        let curr = tab[i];
        if (curr !== null) {
            for (let n of numbers) {
                tab[n + i] = [...curr, n];
            }
        }
    }

    return tab[target];
}

console.log(how_sum_tab(7, [5,3,4])); // [3,4]
console.log(how_sum_tab(9, [5,3,4])); // [5,4]
console.log(how_sum_tab(300, [7,14])); // null
