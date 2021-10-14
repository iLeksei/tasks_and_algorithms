
const best_sum_tab = (target, numbers) => {
    const tab = Array(target + 1).fill(null);
    tab[0] = []; // initial value

    for (let i = 0; i <= target; i++) {
        let curr = tab[i];
        if (curr !== null) {
            for (const n of numbers) {
                const combination = [...curr, n];
                if (!tab[i + n] || tab[i + n].length > combination.length) {
                    tab[i + n] = combination;
                }
            }
        }
    }
    return tab[target];
}

console.log(best_sum_tab(8, [3,5,2])) // [3,5]
console.log(best_sum_tab(8, [1,4,5])) // [4,4]
console.log(best_sum_tab(300, [7,14])) // null