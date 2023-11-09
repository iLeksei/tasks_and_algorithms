/**
    Given an array of distinct positive integers representing coin denominations and a
    single non-negative integer n representing a target amount of
    money, write a function that returns the number of ways to make change for
    that target amount using the given coin denominations.

    Note that an unlimited amount of coins is at your disposal.
    Sample Input
    n = 6
    denoms = [1, 5]

    Sample Output: 2 // 1x1 + 1x5 and 6x1
*/


function numberOfWaysToMakeChange(n, denoms) {
    // Write your code here.
    let table = Array(n + 1).fill(0);
    table[0] = 1;

    for (let coin of denoms) {
        for (let i = 1; i < table.length; i++) {
            if (coin <= i) {
                table[i] = table[i] + table[i - coin]
            }
        }
    }

    return table[n];
}

console.log(numberOfWaysToMakeChange(6, [1,5]))