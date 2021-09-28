
// O(n*m^2) time --  where n is numbers.length and m is targetSum
// O(m^2) space
const howSum = (targetSum = 0, numbers = [], memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (const num of numbers) {
        const intermediateResult = targetSum - num;
        const nextResult = howSum(intermediateResult, numbers);
        if (nextResult !== null) {
            memo[targetSum] = [...nextResult, num];
            return memo[targetSum]
        }
    }

    memo[targetSum] = null;
    return null;
}

console.log(howSum(7, [3,4]));
console.log(howSum(7, [1,3]));
console.log(howSum(8, [2,4]));
console.log(howSum(300, [10,14]));