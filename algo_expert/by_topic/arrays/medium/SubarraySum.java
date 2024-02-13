import java.util.LinkedHashMap;
import java.util.Map;

void main(String[] args) {
    System.out.println(subarraySum(new int[]{3, 4, 7, -2, 2, 1, 4, 2}, 7));
    System.out.println(subarraySum(new int[]{1, 1, 1}, 2));
    System.out.println(subarraySum(new int[]{1, 2, 3}, 3));
}

/**
 *Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 * Example 1:
 * Input: nums = [1,1,1], k = 2
 * Output: 2
 *
 * Example 2:
 * Input: nums = [1,2,3], k = 3
 * Output: 2
 *
 * Constraints:
 * 1 <= nums.length <= 2 * 104
 * -1000 <= nums[i] <= 1000
 * -107 <= k <= 107
 */
private static int subarraySum(int[] nums, int k) {
    int sum = 0, result = 0;
    Map<Integer, Integer> prefixSum = new LinkedHashMap<>();
    prefixSum.put(0, 1);

    for (int num : nums) {
        sum += num;
        if (prefixSum.containsKey(sum - k)) {
            result += prefixSum.get(sum - k);
        }
        prefixSum.put(sum, prefixSum.getOrDefault(sum, 0) + 1);
    }

    return result;
}