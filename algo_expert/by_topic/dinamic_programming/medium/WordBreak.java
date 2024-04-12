import java.util.Arrays;
import java.util.List;

public class WordBreak {

    public static void main(String[] args) {
        System.out.println(wordBreak("cars", List.of("car", "ca", "rs"))); //true
        System.out.println(wordBreak("aaaaaaa", List.of("aaaa", "aaa"))); //true
        System.out.println(wordBreak("leetcode", List.of("leet", "code"))); //true
    }

    public static boolean wordBreak(String s, List<String> wordDict) {
        int len = s.length();
        boolean[] table = new boolean[len + 1];
        Arrays.fill(table, false);
        table[0] = true;
        String substr = "";

        for (int i = 0; i <= len; i++) {
            if (table[i]) {
                for (String word : wordDict) {
                    if (word.length() <= len - i) {
                        substr = s.substring(i, i + word.length());
                        if (substr.equals(word)) {
                            table[i + word.length()] = true;
                        }
                    }
                }
            }
        }
        return table[len];
    }
}
