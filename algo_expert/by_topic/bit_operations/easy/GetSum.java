public class GetSum {

    public static void main(String[] args) {
        System.out.println(getSum(2, 3)); // 5
        System.out.println(getSum(-3, 5));// 2
    }

    /**
     *  Given two integers a and b, return the sum of the two integers without using the operators + and -.
     *
     * Example 1:
     * Input: a = 1, b = 2
     * Output: 3
     *
     * Example 2:
     * Input: a = 2, b = 3
     * Output: 5
     *
     * Constraints:
     * -1000 <= a, b <= 1000
     *
     * @link: https://leetcode.com/problems/sum-of-two-integers/solutions/2562077/beginner-level-explanation-with-code/
     */
    private static int getSum(int a, int b) {
        int curry = 0;
        while (b != 0) {
            curry = (a & b) << 1;
            a = a ^ b;
            b = curry;
        }
        return a;
    }
}
