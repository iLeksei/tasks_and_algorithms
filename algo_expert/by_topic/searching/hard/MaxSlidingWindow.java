import java.util.*;

void main(String[] args) {
    System.out.println(Arrays.toString(maxSlidingWindow2(new int[]{1, 3, -1, -3, 5, 3, 6, 7}, 3)));
    System.out.println(Arrays.toString(maxSlidingWindow(new int[]{1, -1}, 1)));
    System.out.println(Arrays.toString(maxSlidingWindow2(new int[]{7, 2, 4}, 2)));
}

/**
 * You are given an array of integers nums,
 * there is a sliding window of size k which is moving from the very left of the array to the very right.
 * You can only see the k numbers in the window. Each time the sliding window moves right by one position.
 * Return the max sliding window.
 * Example 1:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 * Explanation:
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * 1 [3  -1  -3] 5  3  6  7       3
 * 1  3 [-1  -3  5] 3  6  7       5
 * 1  3  -1 [-3  5  3] 6  7       5
 * 1  3  -1  -3 [5  3  6] 7       6
 * 1  3  -1  -3  5 [3  6  7]      7
 * <p>
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 * <p>
 * Constraints:
 * 1 <= nums.length <= 105
 * -104 <= nums[i] <= 104
 * 1 <= k <= nums.length
 */
public int[] maxSlidingWindow(int[] nums, int k) {
    if (nums.length == 0 || k == 0) return new int[0];
    if (k == 1) return nums;
    int[] result = new int[nums.length - k + 1];
    PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> nums[b] - nums[a]);

    for (int i = 0; i < nums.length; i++) {
        int start = i - k;
        if (start >= 0) {
            maxHeap.remove(start);
        }
        maxHeap.offer(i);
        if (maxHeap.size() == k) {
            result[i - k + 1] = nums[maxHeap.peek()];
        }
    }

    return result;
}

public int[] maxSlidingWindow2(int[] nums, int k) {
    if (nums.length == 0 || k == 0) return new int[0];
    if (k == 1) return nums;
    int[] result = new int[nums.length - k + 1];
    Deque<Integer> q = new ArrayDeque<>();
    // stores indices  q = [0, 1, 2] <- offerLast(i)
    // 1. if q.size >= k removeFirst(pollFirst)
    // 2. remove all nums from q if nums[i] more than that nums q.pollLast();

    for (int i = 0; i < nums.length; ++i) {
        // remove indices that are out of bound
      while (!q.isEmpty() && q.peekFirst() <= i - k) {
                q.pollFirst();
        }
        // remove indices whose corresponding values are less than nums[i]
        while (!q.isEmpty() && nums[q.peekLast()] < nums[i]) {
                q.pollLast();
        }
        // add nums[i]
        q.offerLast(i);
        // add to result
        if (i >= k - 1) {
            result[i - k + 1] = nums[q.peekFirst()];
        }
    }
    return result;
}