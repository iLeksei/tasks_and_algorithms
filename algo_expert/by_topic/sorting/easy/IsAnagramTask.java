import java.util.Arrays;


void main(String[] args) {
    System.out.println(isAnagram("anagram", "naagmar"));
}

private static boolean isAnagram(String s1, String s2) {
    if (s1 == null || s2 == null) return false;
    if (s1.length() != s2.length()) return false;

    char[] s1Chars = s1.toCharArray();
    char[] s2Chars = s2.toCharArray();
    Arrays.sort(s1Chars);
    Arrays.sort(s2Chars);

    for (int i = 0; i < s1Chars.length; i++) {
        if (s1Chars[i] != s2Chars[i]) return false;
    }

    return true;
}

