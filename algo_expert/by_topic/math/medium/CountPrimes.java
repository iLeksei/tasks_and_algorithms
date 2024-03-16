import java.util.Arrays;

void main(String[] args) {
    System.out.println(countPrimes(10)); // 4
    System.out.println(countPrimes(3)); // 1
}

public int countPrimes2(int n) {
    if (n <= 2) return 0;

    boolean[] nums = new boolean[n];
    int result = 1;

    for (int i = 3; i < n; i+=2) {
        if (!nums[i]) {
            result++;
            for (int j = 1; j*i < n; j++) {
                nums[j * i] = true;
            }
        }
    }
    return result;
}

public int countPrimes(int n) {
    if (n <= 0) return 0;
    int result = 0;
    for (int i = 2; i < n; i++)
        if (isPrime(i))
            result++;

    return result;
}
/** 10
 3 -> 5 -> 7
 */
private static boolean isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}