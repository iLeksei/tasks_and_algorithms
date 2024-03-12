import java.util.*;

public class CombinationSum {

    public static void main(String[] args) {
        System.out.println(combinationSum(new int[]{2, 3, 6, 7}, 7)); // [[2,2,3],[7]]
        System.out.println(combinationSum(new int[]{2, 3, 5}, 8)); // [[2,2,2,2],[2,3,3],[3,5]]
    }

    /**
     *  Given an array of distinct integers candidates and a target integer target,
     *  return a list of all unique combinations of candidates where the chosen numbers sum to target.
     *  You may return the combinations in any order.
     * The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
     * frequency of at least one of the chosen numbers is different.
     * The test cases are generated such that the number of unique combinations
     * that sum up to target is less than 150 combinations for the given input.
     *
     * Example 1:
     * Input: candidates = [2,3,6,7], target = 7
     * Output: [[2,2,3],[7]]
     * Explanation:
     * 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
     * 7 is a candidate, and 7 = 7.
     * These are the only two combinations.
     *
     * Example 2:
     * Input: candidates = [2,3,5], target = 8
     * Output: [[2,2,2,2],[2,3,3],[3,5]]
     *
     * Example 3:
     * Input: candidates = [2], target = 1
     * Output: []
     *
     * Constraints:
     * 1 <= candidates.length <= 30
     * 2 <= candidates[i] <= 40
     * All elements of candidates are distinct.
     * 1 <= target <= 40
     */
    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        findCandidates2(candidates, new ArrayList<>(), target, result, 0);
        return result;
    }

    private static void findCandidates(int[] nums, List<Integer> list, int remains, List<List<Integer>> set, int idx) {
        if (remains < 0) {
            return;
        }

        if (remains == 0) {
            set.add(new ArrayList<>(list));
        }

        for (int i = idx; i < nums.length; i++) {
            list.add(nums[i]);
            findCandidates(nums, list, remains - nums[i], set, i);
            list.removeLast();
        }
    }

    private static void findCandidates2(int[] nums, List<Integer> list, int remains, List<List<Integer>> result, int idx) {
        if (remains < 0 || idx >= nums.length) {
            return;
        }

        if (remains == 0) {
            result.add(new ArrayList<>(list));
            return;
        }

        list.add(nums[idx]);
        findCandidates2(nums, list, remains - nums[idx], result, idx);

        list.removeLast();
        findCandidates2(nums, list, remains, result, idx + 1);
    }

}
