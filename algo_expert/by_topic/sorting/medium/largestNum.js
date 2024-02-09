/**
 * Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
 * Since the result may be very large, so you need to return a string instead of an integer.
 *
 * Example 1:
 * Input: nums = [10,2]
 * Output: "210"
 *
 * Example 2:
 * Input: nums = [3,30,34,5,9]
 * Output: "9534330"
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 109
 * */

function buildLargestNum(nums) {
    nums.sort((a, b) => {
        if (a < 10 && b < 10) return b - a;
        return `${b}${a}`.localeCompare(`${a}${b}`)
    });
    let result = "";
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    if (result[0] === "0") return "0";
    return result;
};

console.log(buildLargestNum([3,30,34,5,9])); // "9534330"
console.log(buildLargestNum([0, 0])); // "0"
