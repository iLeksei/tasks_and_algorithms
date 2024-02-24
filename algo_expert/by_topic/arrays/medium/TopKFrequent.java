import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

void main(String[] args) {
    System.out.println(Arrays.toString(topKFrequent(new int[]{1, 1, 1, 2, 3, 2, 4}, 2)));
}

/**
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 *
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 * Constraints:
 * 1 <= nums.length <= 105
 * -104 <= nums[i] <= 104
 * k is in the range [1, the number of unique elements in the array].
 * It is guaranteed that the answer is unique.
 *
 * Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */
public int[] topKFrequent(int[] nums, int k) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int num : nums) {
        map.merge(num, 1, Integer::sum);
    }
    return map.entrySet().stream()
            .sorted((curr, next) -> next.getValue().compareTo(curr.getValue()))
            .limit(k)
            .mapToInt(Map.Entry::getKey)
            .toArray();
}