import java.util.*;

void main(String[] args) {
    System.out.println(threeSum(new int[]{-1, 0, 1, 2, -1, -4}));
    System.out.println(threeSum(new int[]{-2, 0, 0, 2, 2}));
    System.out.println(threeSum(new int[]{1, 1, -2}));
    System.out.println(threeSum(new int[]{-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0}));
}

/**
 * Given an integer array nums, return all the triplets
 * [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * <p>
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not matter.
 * <p>
 * Example 2:
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum up to 0.
 * <p>
 * Example 3:
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet sums up to 0.
 * <p>
 * Constraints:
 * 3 <= nums.length <= 3000
 * -105 <= nums[i] <= 105
 */

public List<List<Integer>> threeSum(int[] nums) {
    if (nums == null || nums.length < 3) {
        return Collections.emptyList();
    }
    if (nums.length == 3 && nums[0] + nums[1] + nums[2] == 0) {
        return List.of(List.of(nums[0], nums[1], nums[2]));
    }
    Arrays.sort(nums);
    if (nums[0] == 0 && nums[nums.length - 1] == 0) return List.of(List.of(0, 0, 0));
    Set<List<Integer>> result = new HashSet<>();
    int j;
    int k;
    int currSum;

    for (int i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i + 2 < nums.length && nums[i] == 0 && nums[i + 2] == 0) {
            result.add(List.of(0, 0, 0));
            break;
        }
        j = i + 1;
        k = nums.length - 1;

        while (j < k) {
            currSum = nums[i] + nums[j] + nums[k];
            if (currSum == 0) {
                result.add(List.of(nums[i], nums[j], nums[k]));
                //move j;
                while (j < k && nums[j] == nums[j + 1]) {
                    j++;
                }
                //move k
                while (k > j && nums[k] == nums[k - 1]) {
                    k--;
                }
                j++;
                k--;
            } else if (currSum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }

    return result.stream().toList();
}