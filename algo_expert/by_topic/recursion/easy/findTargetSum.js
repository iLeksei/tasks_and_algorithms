/**
 * Given an array of integer number [9, 3, 7] and target sum (int number)
 *
 * you heed to place + or - between numbers to receive target sum
 * your function should return boolean is it possible or not.
 *
 * */

function findTargetSum(numbers = [], targetSum = 0) {
    if (numbers.length < 2) return false;

    return traverseNumbers(numbers, numbers[0], targetSum);

}

function traverseNumbers(numbers, currentSum, targetSum, idx = 1) {
    if (currentSum === targetSum) return true;
    if (idx > numbers.length) return false;

    return traverseNumbers(numbers, currentSum + numbers[idx], targetSum, idx + 1) ||
        traverseNumbers(numbers, currentSum - numbers[idx], targetSum, idx + 1);
}

console.log(findTargetSum([9, 3, 7], 13)) //true 9 - 3 + 7