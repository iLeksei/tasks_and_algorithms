
void main(String[] args) {
    System.out.println(isPowerOfThree(3)); //true
    System.out.println(isPowerOfThree(9)); //true
    System.out.println(isPowerOfThree(5)); //false
}

/**
 * Given an integer n, return true if it is a power of three. Otherwise, return false.
 * An integer n is a power of three, if there exists an integer x such that n == 3x.
 *
 * Example 1:
 * Input: n = 27
 * Output: true
 * Explanation: 27 = 33
 *
 * Example 2:
 * Input: n = 0
 * Output: false
 * Explanation: There is no x where 3x = 0.
 *
 * Example 3:
 * Input: n = -1
 * Output: false
 * Explanation: There is no x where 3x = (-1).
 *
 * Constraints:
 * -231 <= n <= 231 - 1
 *
 * Follow up: Could you solve it without loops/recursion?
 *
 * Solution - VI (Without loops or recursion - Divisiblity Check w/ Largest power of 3)
 * 3 is a prime number. So, any power of 3 will only be divisible by lower or equal powers of 3.
 * The largest power of 3 less than 2^31 is 1162261467 (can be found by 3^( log3(2^31 - 1) ) = 3^19 = 1162261467 ).
 * So, this number will only be divisible by a power of 3.
 * Thus, we can only check if the above number is divisible by n.
 * If n is a power of 3, then only it will be completely divisible by n.
 *
 * Time Complexity : O(1)
 * Space Complexity : O(1)
 */
private static boolean isPowerOfThree(int num) {
    return num > 0 && Math.pow(3, 19) % num == 0;
    // pow(3, floor(log(INT_MAX)/log(3))) = 1162261467
}