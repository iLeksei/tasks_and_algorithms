import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Subset {

    public static void main(String[] args) {
        System.out.println(subsets(new int[]{1, 2, 3}));
    }

    private static int getBit(int n, int x) {
        return (n & (1 << x)) > 0 ? 1 : 0;
    }

    /**
     * Given an integer array nums of unique elements, return all possible
     * subsets (the power set).
     * The solution set must not contain duplicate subsets. Return the solution in any order.
     * <p>
     * Example 1:
     * Input: nums = [1,2,3]
     * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
     * <p>
     * Example 2:
     * Input: nums = [0]
     * Output: [[],[0]]
     * <p>
     * Constraints:
     * 1 <= nums.length <= 10
     * -10 <= nums[i] <= 10
     * All the numbers of nums are unique.
     */
    public static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> allSubsets = new ArrayList<>();
        if (nums == null || nums.length == 0) {
            allSubsets.add(new LinkedList<Integer>());
            return allSubsets;
        }

        final int N = nums.length;
        // 1 << N means all possible ways
        for (int bitMask = 0; bitMask < (1 << N); bitMask++) {
            List<Integer> currentSubset = new ArrayList<>();
            for (int i = 0; i < N; i++)
                if (getBit(bitMask, i) == 1)
                    currentSubset.add(nums[i]);
            allSubsets.add(currentSubset);
        }

        return allSubsets;
    }
}
