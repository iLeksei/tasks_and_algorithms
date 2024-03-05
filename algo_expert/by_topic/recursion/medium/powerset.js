/**
 *     Write a function that takes in an array of unique integers and returns its
 *     powerset.
 *     The powerset P(X) of a set X is the set of all
 *     subsets of X. For example, the powerset of [1,2] is
 *     [[], [1], [2], [1,2]].
 *     Note that the sets in the powerset do not need to be in any particular order.
 *
 * Sample Input
 * array = [1, 2, 3]
 *
 * Sample Output
 * [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
 *
 * Good explanation:
 * @link: https://www.youtube.com/watch?v=REOH22Xwdkk
 *
 * time: O(N*2^N)
 * space: O(N*2^N)
 */
let set = new Set();

function powerset(nums, subset = [], idx = 0) {
    if (idx >= nums.length) {
        set.add([...subset]);
        return;
    }

    // case with number in subset
    subset.push(nums[idx]);
    powerset(nums, subset, idx + 1);

    // case without number in subset
    subset.pop();
    powerset(nums, subset, idx + 1);
}

powerset([1, 2, 3]);
console.log(set.values());
