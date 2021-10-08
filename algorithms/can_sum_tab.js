

// O(M*N) time
// O(M) space

const canSumTab = (target = 0, numbers = []) => {
    const table = Array(target + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[num + i] = true;
            }
        }

    }

    return table[target];
}

console.log(canSumTab(7, [2,3]));
console.log(canSumTab(7, [5,3,4,7]));
console.log(canSumTab(7, [2,4]));
console.log(canSumTab(8, [2,5,3]));
console.log(canSumTab(300, [7,14]));
