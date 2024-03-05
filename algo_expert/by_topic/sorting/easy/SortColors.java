import java.util.Arrays;

void main(String[] args) {
    int[] nums = new int[]{2, 0, 2, 1, 1, 0};
    sortColors(nums);
    System.out.println(Arrays.toString(nums));
    int[] nums2 = new int[]{2, 0, 2, 1, 1, 0};
    sortColors2(nums2);
    System.out.println(Arrays.toString(nums2));
}

/**
 * Given an array nums with n objects colored red, white, or blue,
 * sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 * You must solve this problem without using the library's sort function.
 * <p>
 * Example 1:
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 * <p>
 * Example 2:
 * Input: nums = [2,0,1]
 * Output: [0,1,2]
 * <p>
 * Constraints:
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] is either 0, 1, or 2.
 * <p>
 * Follow up: Could you come up with a one-pass algorithm using only constant extra space?
 */
public void sortColors(int[] nums) {
    int redCounter = 0;
    int whiteCounter = 0;
    int blueCounter = 0;

    for (int num : nums) {
        if (num == 0) redCounter++;
        if (num == 1) whiteCounter++;
        if (num == 2) blueCounter++;
    }

    for (int i = 0; i < nums.length; i++) {
        if (redCounter > 0) {
            nums[i] = 0;
            redCounter--;
        } else if (whiteCounter > 0) {
            nums[i] = 1;
            whiteCounter--;
        } else if (blueCounter > 0) {
            nums[i] = 2;
            blueCounter--;
        }
    }
}

public void sortColors2(int[] nums) {
    int low = 0;
    int mid = 0;
    int high = nums.length - 1;
    int temp;
    while (mid <= high) {
        if (nums[mid] == 0) {
            temp = nums[mid];
            nums[mid] = nums[low];
            nums[low] = temp;
            mid++;
            low++;
        } else if (nums[mid] == 1) {
            mid++;
        } else {
            temp = nums[mid];
            nums[mid] = nums[high];
            nums[high] = temp;
            high--;
        }
    }
}