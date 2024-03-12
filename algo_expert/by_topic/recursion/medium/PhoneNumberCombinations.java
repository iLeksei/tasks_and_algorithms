import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

public class PhoneNumberCombinations {

    public static void main(String[] args) {
        //System.out.println(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
        System.out.println(letterCombinations("234"));
        // ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi",
        // "bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi",
        // "cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]
    }

    /**
     * Given a string containing digits from 2-9 inclusive,
     * return all possible letter combinations that the number could represent. Return the answer in any order.
     * A mapping of digits to letters (just like on the telephone buttons) is given below.
     * Note that 1 does not map to any letters.
     *
     * Example 1:
     * Input: digits = "23"
     * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
     *
     * Example 2:
     * Input: digits = ""
     * Output: []
     *
     * Example 3:
     * Input: digits = "2"
     * Output: ["a","b","c"]
     *
     * Constraints:
     * 0 <= digits.length <= 4
     * digits[i] is a digit in the range ['2', '9'].
     */
    private static final Map<String, List<String>> digitToLettersMap = Map.ofEntries(
            Map.entry("2", List.of("a", "b", "c")),
            Map.entry("3", List.of("d", "e", "f")),
            Map.entry("4", List.of("g", "h", "i")),
            Map.entry("5", List.of("j", "k", "l")),
            Map.entry("6", List.of("m", "n", "o")),
            Map.entry("7", List.of("p", "q", "r", "s")),
            Map.entry("8", List.of("t", "u", "v")),
            Map.entry("9", List.of("w", "x", "y", "z"))
    );

    public static List<String> letterCombinations(String digits) {
        if (digits == null || digits.isEmpty()) {
            return Collections.emptyList();
        }

        if (digits.length() == 1) {
            return digitToLettersMap.get(digits);
        }

        List<List<String>> letters = new ArrayList<>();
        for(String digit: digits.split("")) {
            letters.add(digitToLettersMap.get(digit));
        }

        return findCombinations(letters, digits, 0);
    }

    private static List<String> findCombinations(List<List<String>> lettersList, String digits, int idx) {

        if (idx == digits.length() - 1) {
            return lettersList.getLast();
        }

        List<String> sublist = new ArrayList<>();
        for (String letter: lettersList.get(idx)) {
            List<String> temp1 = findCombinations(lettersList, digits, idx + 1);
            sublist.addAll(temp1.stream().map(entry -> letter + entry).toList());
        }
        return sublist;
    }



}
