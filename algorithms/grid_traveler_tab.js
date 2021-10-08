


// O(M*N) time
// O(M*N) space

const gridTravelerTab = (m = 1, n = 1) => {
    const grid = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    grid[1][1] = 1; // bast case for 1:1 grid
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const curr =  grid[i][j];
            if (j + 1 <= n) { grid[i][j + 1] += curr };
            if (i + 1 <= m) { grid[i + 1][j] += curr };
        }
    }

    return grid[m][n];
}

console.log(gridTravelerTab(2,3)); // 3
console.log(gridTravelerTab(3,3)); // 6
console.log(gridTravelerTab(6,6)); //252
console.log(gridTravelerTab(10,15));// 817190