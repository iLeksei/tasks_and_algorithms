import java.util.Arrays;

public class CountBits {

    public static void main(String[] args) {
        System.out.println(Arrays.toString(countBits2(5)));
    }

    /**
     * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
     * ans[i] is the number of 1's in the binary representation of i.
     * Example 1:
     * Input: n = 2
     * Output: [0,1,1]
     * Explanation:
     * 0 --> 0
     * 1 --> 1
     * 2 --> 10
     * <p>
     * Example 2:
     * Input: n = 5
     * Output: [0,1,1,2,1,2]
     * Explanation:
     * 0 --> 0
     * 1 --> 1
     * 2 --> 10
     * 3 --> 11
     * 4 --> 100
     * 5 --> 101
     * <p>
     * Constraints:
     * 0 <= n <= 105
     * <p>
     * Follow up:
     * <p>
     * It is very easy to come up with a solution with a runtime of O(n log n).
     * Can you do it in linear time O(n) and possibly in a single pass?
     * Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?
     */
    public static int[] countBits(int n) {
        int[] result = new int[n + 1];
        int counter = 0;
        int idx = 0;

        for (int i = 0; i < result.length; i++) {
            idx = i;
            while (i > 0) {
                if (i % 2 != 0) counter++;
                i /= 2;
            }
            i = idx;
            result[i] = counter;
            counter = 0;
        }
        return result;
    }

    public static int[] countBits2(int num) {
        int[] f = new int[num + 1];
        for (int i = 1; i <= num; i++) {
            f[i] = f[i >> 1] + (i & 1);
        }
        return f;
    }
}
