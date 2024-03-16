import java.util.ArrayList;
import java.util.List;

public class FindPalindromeEntries {

    public static void main(String[] args) {
        System.out.println(partition("aabc"));
    }

    /**
     *  Given a string s, partition s such that every substring of the partition is a palindrome.
     *  Return all possible palindrome partitioning of s.
     *
     * Example 1:
     * Input: s = "aab"
     * Output: [["a","a","b"],["aa","b"]]

     * Example 2:
     * Input: s = "a"
     * Output: [["a"]]
     *
     * Constraints:
     * 1 <= s.length <= 16
     * s contains only lowercase English letters.
     */
    public static List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();
        findPalindromes(s, new ArrayList<>(), result);
        return result;
    }

    public static void findPalindromes(String str, List<String> sublist, List<List<String>> result) {
        if (str == null || str.isEmpty()) {
            result.add(new ArrayList<>(sublist));
            return;
        }

        for (int i = 1; i <= str.length(); i++) {
            String substr = str.substring(0, i);
            if (!isPalindrome(substr)) continue;
            sublist.add(substr);
            findPalindromes(str.substring(i), sublist, result);
            sublist.removeLast();
        }

    }

    private static boolean isPalindrome(String str) {
        if (str.length() == 1) return true;
        int startIdx = 0;
        int endIdx = str.length() - 1;
        while (startIdx <= endIdx) {
            if (str.charAt(startIdx) != str.charAt(endIdx)) {
                return false;
            }
            startIdx++;
            endIdx--;
        }
        return true;
    }
}
