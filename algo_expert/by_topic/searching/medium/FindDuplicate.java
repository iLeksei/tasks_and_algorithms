void main(String[] args) {
    System.out.println(findDuplicate(new int[]{1, 1, 2}));
    System.out.println(findDuplicate(new int[]{1, 3, 4, 2, 2}));
    System.out.println(findDuplicate(new int[]{3, 1, 3, 4, 2}));
}

/**
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
 * There is only one repeated number in nums, return this repeated number.
 * You must solve the problem without modifying the array nums and uses only constant extra space.
 * <p>
 * Example 1:
 * Input: nums = [1,3,4,2,2]
 * Output: 2
 * <p>
 * Example 2:
 * Input: nums = [3,1,3,4,2]
 * Output: 3
 * <p>
 * Example 3:
 * Input: nums = [3,3,3,3,3]
 * Output: 3
 * <p>
 * Constraints:
 * 1 <= n <= 105
 * nums.length == n + 1
 * 1 <= nums[i] <= n
 * All the integers in nums appear only once except for precisely one integer which appears two or more times.
 * <p>
 * Follow up:
 * How can we prove that at least one duplicate number must exist in nums?
 * Can you solve the problem in linear runtime complexity?
 */
private int findDuplicate(int[] nums) {
    if (nums == null || nums.length < 2) return 0;
    int slowIdx = 0;
    int step = nums.length % 2 == 0 ? 1 : 2;
    int fastIdx = step;

    while (true) {
        if (fastIdx >= nums.length) {
            fastIdx = fastIdx - nums.length + step;
            if (fastIdx == nums.length) fastIdx=0;
        }
        if (slowIdx == nums.length) {
            slowIdx = 0;
        }
        if (fastIdx != slowIdx && nums[fastIdx] == nums[slowIdx]) {
            return nums[fastIdx];
        }
        fastIdx += 2;
        slowIdx++;
    }
}

/**
 *  with huge input it works faster
 *  space: O(1);
 *  time: O(N);
 */
public int findDuplicate2(int[] nums) {
    int slowIdx = 0;
    int fastIdx = 0;

    do {
        slowIdx = nums[slowIdx];
        fastIdx = nums[nums[fastIdx]];
    } while (slowIdx != fastIdx);

    slowIdx = 0;
    while (slowIdx != fastIdx) {
        slowIdx = nums[slowIdx];
        fastIdx = nums[fastIdx];
    }
    return slowIdx;
}

public int findDuplicate3(int[] nums) {
    if (nums == null || nums.length == 0)
        return 0;

    int l = 1, r = nums.length - 1;
    while (l < r) {
        int mid = (l + r) / 2;
        int lessOrEqualNum = getLessOrEqualNum(nums, mid);
        if (lessOrEqualNum > mid) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l;
}
private int getLessOrEqualNum(int[] nums, int x) {
    int result = 0;
    for (int num : nums)
        if (num <= x)
            result++;

    return result;
}