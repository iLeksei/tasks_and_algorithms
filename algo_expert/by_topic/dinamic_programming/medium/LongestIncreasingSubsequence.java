import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LongestIncreasingSubsequence {

    public static void main(String[] args) {
//        System.out.println(lengthOfLIS(new int[]{7, 7, 7, 7, 7, 7, 7})); // 1
//        System.out.println(lengthOfLIS(new int[]{10, 9, 2, 5, 3, 7, 101, 18})); // 4
        System.out.println(lengthOfLIS2(new int[]{0, 1, 0, 3, 2, 3})); // 4
    }

    /**
     * Given an integer array nums, return the length of the longest strictly increasing subsequence
     * <p>
     * Example 1:
     * Input: nums = [10,9,2,5,3,7,101,18]
     * Output: 4
     * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
     * <p>
     * Example 2:
     * Input: nums = [0,1,0,3,2,3]
     * Output: 4
     * <p>
     * Example 3:
     * Input: nums = [7,7,7,7,7,7,7]
     * Output: 1
     * <p>
     * Constraints:
     * 1 <= nums.length <= 2500
     * -104 <= nums[i] <= 104
     * <p>
     * Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?
     */

    /**
     *  time: N log(N) approach
     *  space: N
     */
    public static int lengthOfLIS(int[] nums) {
       List<Integer> seq = new ArrayList<>();
        seq.add(nums[0]);

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > seq.getLast()) {
                seq.add(nums[i]);
            } else {
                int prevNumIdx = Collections.binarySearch(seq, nums[i]);
                if (prevNumIdx < 0) {
                    // here we look for the biggest number that lower then current
                    prevNumIdx = -(prevNumIdx + 1);
                }
                seq.set(prevNumIdx, nums[i]);
            }
        }
        return seq.size();
    }

    /**
     * time: N*N
     * space: N
     * @link: https://www.geeksforgeeks.org/longest-monotonically-increasing-subsequence-size-n-log-n/
     */
    public static int lengthOfLIS2(int[] nums) {
        if (nums == null || nums.length == 0)
            return 0;

        int[] lis = new int[nums.length];

        for (int i = 0; i < nums.length; i++) {
            lis[i] = 1;
            for (int j = 0; j < i; j++)
                if (nums[j] < nums[i])
                    lis[i] = Math.max(lis[i], 1 + lis[j]);
        }

        int answer = 0;
        for (int i = 0; i < nums.length; i++)
            answer = Math.max(answer, lis[i]);

        return answer;
    }
}
