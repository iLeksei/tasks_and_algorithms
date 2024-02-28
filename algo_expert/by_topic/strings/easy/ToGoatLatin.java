import java.util.Set;

void main(String[] args) {
    System.out.println(toGoatLatin("I speak Goat Latin")); //"Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
    System.out.println(toGoatLatin("The quick brown fox jumped over the lazy dog"));
    // "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
}

/**
 * You are given a string sentence that consist of words separated by spaces.
 * Each word consists of lowercase and uppercase letters only.
 * We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)
 * The rules of Goat Latin are as follows:
 * If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
 * For example, the word "apple" becomes "applema".
 * If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
 * For example, the word "goat" becomes "oatgma".
 * Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
 * For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
 * Return the final sentence representing the conversion from sentence to Goat Latin.
 * <p>
 * Example 1:
 * Input: sentence = "I speak Goat Latin"
 * Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
 * <p>
 * Example 2:
 * Input: sentence = "The quick brown fox jumped over the lazy dog"
 * Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
 * <p>
 * Constraints:
 * 1 <= sentence.length <= 150
 * sentence consists of English letters and spaces.
 * sentence has no leading or trailing spaces.
 * All the words in sentence are separated by a single space.
 */
public String toGoatLatin(String sentence) {
    if (sentence == null || sentence.isEmpty()) return "";
    Set<Character> vowels = Set.of('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U');
    StringBuilder sb = new StringBuilder();
    StringBuilder aPostfix = new StringBuilder();
    StringBuilder temp = new StringBuilder();
    aPostfix.append('a');
    int i = 0;

    for (String word : sentence.split(" ")) {
        if (vowels.contains(word.charAt(0))) {
            temp.append(word);
            temp.append("ma");
        } else {
            temp.append(word.substring(1));
            temp.append(word.charAt(0));
            temp.append("ma");
        }
        temp.append(aPostfix);
        aPostfix.append('a');
        sb.append(temp);
        sb.append(" ");
        temp.setLength(0);
    }

    return sb.toString().trim();
}