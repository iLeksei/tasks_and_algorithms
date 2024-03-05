import java.util.*;

void main(String[] args) {
    System.out.println(minWindow2("ADOBECODEBANC", "ABC")); // "BANC"
    System.out.println(minWindow2("ab", "a")); // "a"
    System.out.println(minWindow2("abc", "ab")); // "ab"
    System.out.println(minWindow2("bdab", "ab")); // "ab"
}

/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring
 * of s such that every character in t (including duplicates) is included in the window.
 * If there is no such substring, return the empty string "".
 * The testcases will be generated such that the answer is unique.
 * <p>
 * Example 1:
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 * <p>
 * Example 2:
 * Input: s = "a", t = "a"
 * Output: "a"
 * Explanation: The entire string s is the minimum window.
 * <p>
 * Example 3:
 * Input: s = "a", t = "aa"
 * Output: ""
 * Explanation: Both 'a's from t must be included in the window.
 * Since the largest window of s only has one 'a', return empty string.
 * <p>
 * Constraints:
 * m == s.length
 * n == t.length
 * 1 <= m, n <= 105
 * s and t consist of uppercase and lowercase English letters.
 * Follow up: Could you find an algorithm that runs in O(m + n) time?
 */
public String minWindow2(String s, String t) {
    if (s == null || t == null || s.isEmpty() || t.isEmpty() ||
            s.length() < t.length()) {
        return "";
    }
    int[] map = new int[71];
    byte charOffset = 65; // 'A' char code is 65
    int tLen = t.length();
    int leftCursor = 0, rightCursor = 0, minLen = Integer.MAX_VALUE, startIndex = 0;
    /// char Idx set 1
    for (char ch : t.toCharArray()) {
        map[ch - charOffset]++;
    }
    char[] sChars = s.toCharArray();

    while (rightCursor < sChars.length) {
        if (map[sChars[rightCursor++] - charOffset]-- > 0) {
            tLen--;
        }
        while (tLen == 0) {
            if (rightCursor - leftCursor < minLen) {
                startIndex = leftCursor;
                minLen = rightCursor - leftCursor;
            }
            if (map[sChars[leftCursor++] - charOffset]++ == 0) {
                tLen++;
            }
        }
    }

    return minLen == Integer.MAX_VALUE ? "" :
            new String(sChars, startIndex, minLen);
}