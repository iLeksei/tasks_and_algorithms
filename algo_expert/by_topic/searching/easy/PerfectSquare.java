void main(String[] args) {
    System.out.println(isPerfectSquare(16)); //true 4 * 4
}

/**
 *  Given a positive integer num, return true if num is a perfect square or false otherwise.
 * A perfect square is an integer that is the square of an integer.
 * In other words, it is the product of some integer with itself.
 * You must not use any built-in library function, such as sqrt.
 *
 * Example 1:
 * Input: num = 16
 * Output: true
 * Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
 *
 * Example 2:
 * Input: num = 14
 * Output: false
 * Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
 *
 * Constraints:
 * 1 <= num <= 231 - 1
 */
private boolean isPerfectSquare(int num) {
    int start = 1;
    int end = num;
    int mid = 0;

    while (start <= end) {
        mid = start + (end - start) / 2;
        int res = num / mid;
        int reminder = num & mid;
        if (reminder == 0 && res == mid) return true;
        if (res > mid) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return false;
}