/**
 *  You're given an unordered list of unique integers nums in the
    range [1, n], where n represents the length of
    nums + 2. This means that two numbers in this range are missing
    from the list.

    Write a function that takes in this list and returns a new list with the two
    missing numbers, sorted numerically.

    Sample Input
    nums = [1, 4, 3]
    Sample Output
    [2, 5]  // n is 5, meaning the completed list should be [1, 2, 3, 4, 5]
 */

/**
 *  [5,1,4] => [1,4,5] => [1, (2), (3), 4, 5] => @result {[2,3]}
 *  [1,4,3] => [1,3,4]
 *
 */
function missingNumbers(nums) {
    nums.sort((a,b) => a - b);
    let totalNumsAmount = nums.length + 2;
    let result = [];
    let i = 1;
    let currentNum = nums[0];

    while (i < totalNumsAmount) {
        if (result.length === 2) return result;
        if (currentNum + 1 !== nums[i]) {
            result.push(currentNum + 1);
            currentNum = currentNum + 1;
        } else {
            currentNum = nums[i]
            ++i;
        }
    }

    return result;
}

console.log(missingNumbers([1, 4, 3]));
console.log(missingNumbers([5,1,4]));
console.log(missingNumbers([3,1,4, 7, 6, 8]));