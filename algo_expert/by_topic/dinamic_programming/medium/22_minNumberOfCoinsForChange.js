/**
 Given an array of positive integers representing coin denominations and a
 single non-negative integer n representing a target amount of
 money, write a function that returns the smallest number of coins needed to
 make change for (to sum up to) that target amount using the given coin
 denominations.

 Note that you have access to an unlimited amount of coins. In other words, if
 the denominations are [1, 5, 10], you have access to an unlimited
 amount of 1s, 5s, and 10s.

 If it's impossible to make change for the target amount, return
 -1.

 Sample Input: @n = 7, @denoms = [1, 5, 10]

 Sample Output: 3// 2x1 + 1x5
 */
function minNumberOfCoinsForChange(n, denoms) {
    let table = new Array(n + 1).fill(Infinity);
    table[0] = 0;

    for (const coin of denoms) {
        for (let i = 1; i < table.length; i++) {
            if (coin <= i) {
                table[i] = Math.min(table[i], 1 + table[i - coin]);
            }
        }
    }

    return table[n] === Infinity ? -1 : table[n];
}

// console.log(minNumberOfCoinsForChange(6, [1,2,4]))
console.log(minNumberOfCoinsForChange(3, [1, 2, 4])) // 2: 1 + 2