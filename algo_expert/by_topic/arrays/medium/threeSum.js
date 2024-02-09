/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 *
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not matter.
 *
 * Example 2:
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum up to 0.
 *
 * Example 3:
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet sums up to 0.
 *
 * Constraints:
 * 3 <= nums.length <= 3000
 * -105 <= nums[i] <= 105
 */

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result= [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let leftIdx = i + 1;
        let rightIdx = nums.length - 1;

        while (leftIdx < rightIdx) {
            const sum = nums[i] + nums[leftIdx] + nums[rightIdx];
            if (sum === 0) {
                result.push([nums[i], nums[leftIdx], nums[rightIdx]]);
                while (leftIdx < rightIdx && nums[leftIdx] === nums[leftIdx + 1]) leftIdx++;
                while (leftIdx < rightIdx && nums[rightIdx] === nums[rightIdx - 1]) rightIdx--;
                leftIdx++;
                rightIdx--;
            } else if (sum < 0) {
                leftIdx++;
            } else {
                rightIdx--;
            }
        }
    }
    return result;
};

console.log(threeSum([0,0,0])) // [[0,0,0]
console.log(threeSum([0,1,1])) // []]
console.log(threeSum([-1,0,1,2,-1,-4])) // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([-2,0,1,1,2])) // [[-2,0,2],[-2,1,1]]
