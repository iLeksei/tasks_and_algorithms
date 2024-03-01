import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

void main(String[] args) {
    System.out.println(summaryRanges(new int[]{})); // []
    System.out.println(summaryRanges(new int[]{0, 1, 2, 4, 5, 7})); // ["0->2","4->5","7"]
    System.out.println(summaryRanges(new int[]{0, 2, 3, 4, 6, 8, 9})); // ["0","2->4","6","8->9"]
}

/**
 * You are given a sorted unique integer array nums.
 * A range [a,b] is the set of all integers from a to b (inclusive).
 * Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
 * That is, each element of nums is covered by exactly one of the ranges,
 * and there is no integer x such that x is in one of the ranges but not in nums.
 * Each range [a,b] in the list should be output as:
 * "a->b" if a != b
 * "a" if a == b
 * <p>
 * Example 1:
 * Input: nums = [0,1,2,4,5,7]
 * Output: ["0->2","4->5","7"]
 * Explanation: The ranges are:
 * [0,2] --> "0->2"
 * [4,5] --> "4->5"
 * [7,7] --> "7"
 * <p>
 * Example 2:
 * Input: nums = [0,2,3,4,6,8,9]
 * Output: ["0","2->4","6","8->9"]
 * Explanation: The ranges are:
 * [0,0] --> "0"
 * [2,4] --> "2->4"
 * [6,6] --> "6"
 * [8,9] --> "8->9"
 * <p>
 * Constraints:
 * 0 <= nums.length <= 20
 * -231 <= nums[i] <= 231 - 1
 * All the values of nums are unique.
 * nums is sorted in ascending order.
 */
public List<String> summaryRanges(int[] nums) {
    if (nums == null || nums.length == 0) return Collections.emptyList();
    if (nums.length == 1) return List.of("" + nums[0]);

    List<String> result = new ArrayList<>();
    Integer startRangeNum = nums[0];
    Integer endRangeNum = null;

    // [0, 2, 3, 4, 6, 8, 9]
    // [0,1,2,4,5,7] -> ["0->2", "4->5", "7"]
    // 1 s=0,e=1
    // 2 s=0,e=2
    // 4 result=[0->2], s=4,e=null
    // 5 e=5
    // 7 result=[0->2,4->5]
    for (int i = 1; i < nums.length; i++) {
        if (nums[i] - 1 == nums[i - 1]) {
            endRangeNum = nums[i];
            continue;
        }

        if (endRangeNum == null) {
            result.add(startRangeNum + "");
            startRangeNum = nums[i];
            continue;
        }

        if (nums[i] > endRangeNum + 1) {
            result.add(startRangeNum + "->" + endRangeNum);
            startRangeNum = nums[i];
            endRangeNum = null;
        }
    }

    if (endRangeNum != null) {
        result.add(startRangeNum + "->" + endRangeNum);
    } else {
        result.add(startRangeNum + "");
    }

    return result;
}