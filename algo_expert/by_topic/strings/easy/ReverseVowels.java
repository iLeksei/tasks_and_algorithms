import java.util.Set;

void main(String[] args) {
    System.out.println(reverseVowels("leetcode")); // "leotcede"
}

/**
 *  Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 *
 * Example 1:
 * Input: s = "hello"
 * Output: "holle"
 *
 * Example 2:
 * Input: s = "leetcode"
 * Output: "leotcede"
 *
 * Constraints:
 * 1 <= s.length <= 3 * 105
 * s consist of printable ASCII characters.
 */
public String reverseVowels(String s) {
    if (s == null || s.isEmpty()) return "";
    int i = 0;
    int j = s.length() - 1;
    Set<Character> vowels = Set.of('a', 'e', 'i', 'o', 'u');
    char temp;
    StringBuilder sb = new StringBuilder();
    sb.append(s);

    while (i <= j) {
        if (!vowels.contains(Character.toLowerCase(s.charAt(i)))) {
            i++;
            continue;
        }
        if (!vowels.contains(Character.toLowerCase(s.charAt(j)))) {
            j--;
            continue;
        }
        temp = s.charAt(i);
        sb.setCharAt(i, s.charAt(j));
        sb.setCharAt(j, temp);
        i++;
        j--;
    }
    return sb.toString();
}