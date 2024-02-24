import java.util.*;

void main(String[] args) {
    String[] w1 = {"i", "love", "leetcode", "i", "love", "coding"};
    System.out.println(topKFrequent2(w1, 2)); // [i, love]
    System.out.println(topKFrequent2(w1, 1)); // [i]
    String[] w2 = {"the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"};
    System.out.println(topKFrequent2(w2, 4)); // ["the","is","sunny","day"]
    System.out.println("love".compareTo("i"));
}

/**
 * Given an array of strings words and an integer k, return the k most frequent strings.
 * Return the answer sorted by the frequency from highest to lowest.
 * Sort the words with the same frequency by their lexicographical order.
 * <p>
 * Example 1:
 * Input: words = ["i","love","leetcode","i","love","coding"], k = 2
 * Output: ["i","love"]
 * Explanation: "i" and "love" are the two most frequent words.
 * Note that "i" comes before "love" due to a lower alphabetical order.
 * <p>
 * Example 2:
 * Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
 * Output: ["the","is","sunny","day"]
 * Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
 * with the number of occurrence being 4, 3, 2 and 1 respectively.
 * <p>
 * Constraints:
 * 1 <= words.length <= 500
 * 1 <= words[i].length <= 10
 * words[i] consists of lowercase English letters.
 * k is in the range [1, The number of unique words[i]]
 * <p>
 * Follow-up: Could you solve it in O(n log(k)) time and O(n) extra space?
 */
public List<String> topKFrequent(String[] words, int k) {
    HashMap<String, Integer> map = new HashMap<>();
    for (String word : words) {
        map.merge(word, 1, Integer::sum);
    }
    return map.entrySet().stream()
            .sorted((curr, next) -> {
                if (!curr.getValue().equals(next.getValue())) {
                    return next.getValue().compareTo(curr.getValue());
                } else {
                    return curr.getKey().compareTo(next.getKey());
                }
            })
            .limit(k)
            .map(Map.Entry::getKey)
            .toList();
}

public List<String> topKFrequent2(String[] words, int k) {
    HashMap<String, Integer> map = new HashMap<>();
    for (String word : words) {
        map.merge(word, 1, Integer::sum);
    }
    PriorityQueue<Map.Entry<String, Integer>> q = new PriorityQueue<>((a ,b) -> {
        if (!a.getValue().equals(b.getValue())) {
            return b.getValue().compareTo(a.getValue());
        }
        return a.getKey().compareTo(b.getKey());
    });
    map.entrySet().forEach(q::offer);

    List<String> result = new ArrayList<>(k);
    while (k > 0) {
        result.add(q.poll().getKey());
        k--;
    }
    return result;
}