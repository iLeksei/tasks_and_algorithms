import java.util.*;

public class FindTargetSumWays {
    public static void main(String[] args) {
        int result = findTargetSumWays(new int[] {1, 0}, 1);
        System.out.println(result);
        int result2 = findTargetSumWays(new int[] {6,44,30,25,8,26,34,22,10,18,34,8,0,32,13,48,29,41,16,30}, 12);
        System.out.println(result2);
    }

    /**
     * You are given an integer array nums and an integer target.
     * You want to build an expression out of nums by adding one of the symbols
     * '+' and '-' before each integer in nums and then concatenate all the integers.
     *
     * For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
     * Return the number of different expressions that you can build, which evaluates to target.
     *
     * Example 1:
     * Input: nums = [1,1,1,1,1], target = 3
     * Output: 5
     * Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
     * -1 + 1 + 1 + 1 + 1 = 3
     * +1 - 1 + 1 + 1 + 1 = 3
     * +1 + 1 - 1 + 1 + 1 = 3
     * +1 + 1 + 1 - 1 + 1 = 3
     * +1 + 1 + 1 + 1 - 1 = 3
     *
     * Example 2:
     * Input: nums = [1], target = 1
     * Output: 1
     *
     * Constraints:
     * 1 <= nums.length <= 20
     * 0 <= nums[i] <= 1000
     * 0 <= sum(nums[i]) <= 1000
     * -1000 <= target <= 1000
     */
    public static int findTargetSumWays(int[] nums, int target) {
        if (nums.length == 1) {
            if (nums[0] == Math.abs(target)) return 1;
            else return 0;
        };
        int allSum = Arrays.stream(nums).sum();
        return (allSum + target) % 2 == 1 ? 0 : getExpressions(nums, target, 0, 0, allSum);
    }

    private static int getExpressions(int[] nums, int target, int val, int idx, int allSum) {
        if (idx == nums.length) {
            if (target == val) {
                return 1;
            }
            return 0;
        }

        int temp1 = getExpressions(nums, target, val + nums[idx], idx + 1, allSum);
        int temp2 = getExpressions(nums, target, val - nums[idx], idx + 1, allSum);
        return temp1 + temp2;
    }
}
