import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Permutation {

    private static final Set<List<Integer>> result = new HashSet<>();
    public static void main(String[] args) {
        getPermutation(new int[]{1,2,3}, new ArrayList<>());
        System.out.println(result.stream().toList()); //[[1, 2, 3], [3, 2, 1], [2, 1, 3], [3, 1, 2], [1, 3, 2], [2, 3, 1]]
    }

    private static void getPermutation(int[] nums, List<Integer> sublist) {
        if (sublist.size() == nums.length) {
            result.add(new ArrayList<>(sublist));
            return;
        }
        for (int num : nums) {
            if (sublist.contains(num)) continue;
            sublist.add(num);
            getPermutation(nums, sublist);
            sublist.removeLast();
        }
    }
}
