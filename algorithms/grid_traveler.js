
// O(M*N) time
// O(M + N) space
const grid_traveler = (m, n, memo = {}) => {

    const key = m + "," + n;

    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    const sum = grid_traveler(m - 1, n, memo) + grid_traveler(m, n - 1, memo);
    memo[key] = sum;
    return memo[key] = sum;
}

console.log(grid_traveler(1,1)); // 1
console.log(grid_traveler(2,3)); // 3
console.log(grid_traveler(4,6)); // 56
console.log(grid_traveler(22,22)); // 538257874440