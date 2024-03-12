import java.util.ArrayList;

void main(String[] args) {
    System.out.println(findArraySum(new int[]{1,2,3}));
    f(3, "");
}

int findArraySum(int[] arr) {
    return findArraySum(arr, 0);
}

int findArraySum(int[] arr, int idx) {
    if (idx == arr.length) return 0;
    return arr[idx] + findArraySum(arr, ++idx);
}

void f(final int N, String currentString) {
    if (currentString.length() == N) {
        System.out.println(currentString);
        return;
    }

    f(N, currentString + "0");
    f(N, currentString + "1");
}

