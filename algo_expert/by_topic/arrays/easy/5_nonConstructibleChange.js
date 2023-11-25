
// Given an array of positive integers representing the values of coins in your
// possession, write a function that returns the minimum amount of change (the
// minimum sum of money) that you cannot create.
//
// For example, if you're given coins = [1, 2, 5],
// the minimum amount of change that you can't create is 4.
// If you're given no coins, the minimum amount of change that you can't create is 1
//
// coins = [5, 7, 1, 1, 2, 3, 22]
// output 20


// [1, 2, 5, 7] result === 4
//  1
//  2
//  1 + 2
//  ??? <- result
//  5   coin > sum + 1
//  5 + 1
function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);
    let sum = 0;
    for (let coin of coins) {
        if (coin > sum + 1) return sum + 1;
        sum += coin;
    }
    return sum + 1;
}

//console.log(nonConstructibleChange([1,2,5])); // 3
console.log(nonConstructibleChange([6, 4, 5, 1, 1, 8, 9])); // 3