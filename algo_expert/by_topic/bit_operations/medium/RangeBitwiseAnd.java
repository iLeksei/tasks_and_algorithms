public class RangeBitwiseAnd {

    public static void main(String[] args) {
        System.out.println(rangeBitwiseAnd(5, 12)); // 0
    }

    /**
     * Given two integers left and right that represent the range [left, right],
     * return the bitwise AND of all numbers in this range, inclusive.
     *
     * Example 1:
     * Input: left = 5, right = 7
     * Output: 4
     *
     * Example 2:
     * Input: left = 0, right = 0
     * Output: 0
     *
     * Example 3:
     * Input: left = 1, right = 2147483647
     * Output: 0
     *
     * Constraints:
     * 0 <= left <= right <= 231 - 1
     *
     * @link: https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/593317/simple-3-line-java-solution-faster-than-100/
     */
    public static int rangeBitwiseAnd(int left, int right) {
        while (right > left) {
            right = right & right - 1;
        }
        return right;
    }
}
