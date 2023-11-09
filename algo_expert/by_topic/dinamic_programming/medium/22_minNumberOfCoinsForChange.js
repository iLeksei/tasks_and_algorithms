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
    // Write your code here.
    if (!n) return 0;
    let coins = Array(n + 1).fill(Infinity);
    coins[0] = 0;

    for (let denom of denoms) {
        for (let i = 1; i < coins.length; i++) {
            if (denom <= i) {
                coins[i] = Math.min(coins[i], 1+ coins[i - denom])
            }
        }
    }
    return coins[n] !== Infinity ? coins[n] : -1;
}

// console.log(minNumberOfCoinsForChange(6, [1,2,4]))
console.log(minNumberOfCoinsForChange(7, [2,4]))