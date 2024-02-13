import java.security.Key;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

void main(String[] args) {
    System.out.println(Arrays.toString(topKFrequent(new int[]{1, 1, 1, 2, 3, 2, 4}, 2)));
}

public int[] topKFrequent(int[] nums, int k) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int num : nums) {
        map.merge(num, 1, Integer::sum);
    }
    return map.entrySet().stream()
            .sorted((curr, next) -> next.getValue().compareTo(curr.getValue()))
            .limit(k)
            .mapToInt(Map.Entry::getKey)
            .toArray();
}