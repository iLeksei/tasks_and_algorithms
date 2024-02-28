import java.util.Arrays;

void main(String[] args) {
    System.out.println(Arrays.toString(moveZeroes(new int[]{0, 1, 0, 3, 12}))); //[1,3,12,0,0]
}

/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 * <p>
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * <p>
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 * <p>
 * Constraints:
 * 1 <= nums.length <= 104
 * -231 <= nums[i] <= 231 - 1
 * <p>
 * Follow up: Could you minimize the total number of operations done?
 */

public int[] moveZeroes(int[] nums) {
    if (nums == null || nums.length == 0) return nums;

    int cursor = 0;
    for (int i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[cursor] = nums[i];
            cursor++;
        }
    }

    while (cursor < nums.length) {
        nums[cursor] = 0;
        cursor++;
    }
    return nums;
}