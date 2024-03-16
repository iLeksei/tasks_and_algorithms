import java.util.Arrays;

void main(String[] args) {
//    System.out.println(Arrays.toString(searchRange(new int[]{5, 7, 7, 8, 8, 10}, 8)));
    System.out.println(Arrays.toString(searchRange(new int[]{2,2}, 2)));
}

/**
 *  Given an array of integers nums sorted in non-decreasing order,
 *  find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 *
 * Example 2:
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 *
 * Example 3:
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 *
 * Constraints:
 * 0 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 * nums is a non-decreasing array.
 * -109 <= target <= 109
 */
public static int[] searchRange(int[] nums, int target) {
    if (nums.length == 0) return new int[] {-1, -1};
    if (nums.length == 1 && nums[0] == target) return new int[] {0, 0};
    int left = 0;
    int right = nums.length - 1;
    int mid = 0;

    while (left <= right) {
        mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            break;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        }
        if (nums[mid] > target) {
            right = mid - 1;
        }
    }

    if (nums[mid] != target) {
        return new int[]{-1, -1};
    }
    left = mid;
    right = mid;
    while (left >= 0 && nums[left] == target) {
        left--;
    }
    left++;
    while (right < nums.length && nums[right] == target) {
        right++;
    }
    right--;
    return new int[]{left, right};
}