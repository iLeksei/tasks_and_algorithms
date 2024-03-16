void main(String[] args) {
    System.out.println(trailingZeroes(5));
}

/**
 * Given an integer n, return the number of trailing zeroes in n!.
 * Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.
 * <p>
 * Example 1:
 * Input: n = 3
 * Output: 0
 * Explanation: 3! = 6, no trailing zero.
 * <p>
 * Example 2:
 * Input: n = 5
 * Output: 1
 * Explanation: 5! = 120, one trailing zero.
 * <p>
 * Example 3:
 * Input: n = 0
 * Output: 0
 * <p>
 * Constraints:
 * 0 <= n <= 104
 * <p>
 * Follow up: Could you write a solution that works in logarithmic time complexity?
 */
private int trailingZeroes(int n) {
    int result = 0;
    while (n > 0) {
        result += n / 5;
        n /= 5;
    }
    return result;
}