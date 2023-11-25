/**
 * Write a function that takes in a non-empty array of distinct integers and an
 integer representing a target sum. The function should find all triplets in
 the array that sum up to the target sum and return a two-dimensional array of
 all these triplets. The numbers in each triplet should be ordered in ascending
 order, and the triplets themselves should be ordered in ascending order with
 respect to the numbers they hold.


 If no three numbers sum up to the target sum, the function should return an
 empty array.

 Sample Input
 array = [12, 3, 1, 2, -6, 5, -8, 6]
 targetSum = 0

 Sample Output
 [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
 *
 */

function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let leftCursor = i + 1;
        let rightCursor = array.length - 1;

        while (leftCursor < rightCursor) {
            let currentSum = array[i] + array[leftCursor] + array[rightCursor];
            if (currentSum === targetSum)  {
                result.push([array[i], array[leftCursor], array[rightCursor]])
                leftCursor++;
                rightCursor--;
            }

            if (currentSum > targetSum) {
                rightCursor--;
            }


            if (currentSum < targetSum) {
                leftCursor++;
            }
        }
    }

    return result;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))

