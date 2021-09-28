


// O(m^2 * n) time
// O(m^2) space
const findBestSum = (targetSum = 0, numbers = [], memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum < 0) return null;
    if (targetSum === 0) return [];

    let bestCollection = null

    for (const num of numbers) {
        let intermediateResult = targetSum - num;
        let nextResult = findBestSum(intermediateResult, numbers, memo);
        if (nextResult !== null) {
            let combination = [...nextResult, num];
            if (bestCollection === null || combination.length < bestCollection.length) {
                bestCollection = combination;
            }

        }
    }

    memo[targetSum] = bestCollection;
    return memo[targetSum] ;
}

console.log(findBestSum(7, [3,4]));
console.log(findBestSum(7, [1,3]));
console.log(findBestSum(8, [2,4]));
console.log(findBestSum(300, [10,14]));