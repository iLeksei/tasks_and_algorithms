public class HouseRobber {

    public static void main(String[] args) {
        System.out.println(rob(new int[]{1, 2, 3, 1}));
    }

    /**
     * You are a professional robber planning to rob houses along a street.
     * Each house has a certain amount of money stashed,
     * the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected
     * and it will automatically contact the police if two adjacent houses were broken into on the same night.
     * <p>
     * Given an integer array nums representing the amount of money of each house,
     * return the maximum amount of money you can rob tonight without alerting the police.
     * <p>
     * Example 1:
     * Input: nums = [1,2,3,1]
     * Output: 4
     * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
     * Total amount you can rob = 1 + 3 = 4.
     * <p>
     * Example 2:
     * Input: nums = [2,7,9,3,1]
     * Output: 12
     * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
     * Total amount you can rob = 2 + 9 + 1 = 12.
     * <p>
     * Constraints:
     * 1 <= nums.length <= 100
     * 0 <= nums[i] <= 400
     */
    public static int rob(int[] nums) {
        if (nums.length == 1) return nums[0];
        if (nums.length == 2) return Math.max(nums[0], nums[1]);

        int[] table = new int[nums.length];
        table[0] = nums[0];
        table[1] = Math.max(nums[0], nums[1]);

        for (int i = 2; i < nums.length; i++) {
            table[i] = Math.max(nums[i] + table[i - 2], table[i - 1]);
        }
        return table[nums.length - 1];
    }

    public static int rob2(int[] nums) {
        int len = nums.length;
        if (len == 1) return nums[0];
        int dp2 = nums[0];
        int dp1 = Math.max(nums[0], nums[1]);
        int current = dp1;

        for (int i = 2; i < len; i++) {
            current = Math.max(dp1, dp2 + nums[i]);
            dp2 = dp1;
            dp1 = current;
        }
        return current;

    }
}
