import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class GenerateParenthesis {

    private static final Set<String> result = new HashSet<>();

    public static void main(String[] args) {
        backtrack(3, "", 0);
        System.out.println(result.stream().toList());

        List<Integer> arr = new ArrayList<>(List.of(1,2,3));
        arr.add(4);
        arr.addFirst(-1);
        System.out.println(arr);
    }

    /**
     *  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
     * Example 1:
     * Input: n = 3
     * Output: ["((()))","(()())","(())()","()(())","()()()"]
     *
     * Example 2:
     * Input: n = 1
     * Output: ["()"]
     *
     * Constraints:
     * 1 <= n <= 8
     */
    private static void backtrack(int n, String substr, int idx) {
        if (idx == n) {
            result.add(substr);
            return;
        }

        backtrack(n, "()" + substr, idx + 1);
        backtrack(n, "(" + substr + ")", idx + 1);
        backtrack(n, substr + "()", idx + 1);
    }

    private void backTrack(StringBuilder substr, int openBracket, int closeBracket, int max) {
        if (substr.length() == max * 2) {
            result.add(substr.toString());
            return;
        }

        if (openBracket < max) {
            backTrack(substr.append("("), openBracket + 1, closeBracket, max);
            substr.setLength(substr.length() - 1);
        }
        if (openBracket - closeBracket > 0) {
            backTrack(substr.append(")"), openBracket, closeBracket + 1, max);
            substr.setLength(substr.length() - 1);
        }
    }
}
