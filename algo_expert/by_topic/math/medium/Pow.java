void main(String[] args) {
//    System.out.println(pow(2, 3));
    System.out.println(pow(2, -3));
}

/**
 * Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
 * <p>
 * Example 1:
 * Input: x = 2.00000, n = 10
 * Output: 1024.00000
 * <p>
 * Example 2:
 * Input: x = 2.10000, n = 3
 * Output: 9.26100
 * <p>
 * Example 3:
 * Input: x = 2.00000, n = -2
 * Output: 0.25000
 * Explanation: 2-2 = 1/22 = 1/4 = 0.25
 * <p>
 * Constraints:
 * -100.0 < x < 100.0
 * -231 <= n <= 231-1
 * n is an integer.
 * Either x is not zero or n > 0.
 * -104 <= xn <= 104
 */
private static double pow(double num, int p) {
    if (p == 0) return 1;
    double result = 1;
    if (p < 0) {
        num = 1 / num;
        p = -p;
    }
    while (p != 0) {
        if (p % 2 != 0) {
            result = result * num;
        }
        num = num * num;
        p >>>= 1;
    }
    return result;
}