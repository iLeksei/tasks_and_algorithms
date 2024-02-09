/**
 * You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.
 * A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.
 * Return the length longest chain which can be formed.
 * You do not need to use up all the given intervals. You can select pairs in any order.
 *
 * Example 1:
 * Input: pairs = [[1,2],[2,3],[3,4]]
 * Output: 2
 * Explanation: The longest chain is [1,2] -> [3,4].
 *
 * Example 2:
 * Input: pairs = [[1,2],[7,8],[4,5]]
 * Output: 3
 * Explanation: The longest chain is [1,2] -> [4,5] -> [7,8].
 *
 * Constraints:
 * n == pairs.length
 * 1 <= n <= 1000
 * -1000 <= lefti < righti <= 1000
 *
 * */

function findLongestChain(pairs) {
    if (pairs.length <= 1) return pairs.length;

    pairs.sort((a, b) => a[1] - b[1]);
    const result = [pairs[0]];

    for (let i = 1; i < pairs.length; i++) {
        if (result[result.length - 1][1] < pairs[i][0]) result.push(pairs[i]);
    }

    return result.length;
};

// console.log(findLongestChain([[1,2],[2,3],[3,4]])); //2
// console.log(findLongestChain([[1,2],[7,8],[4,5]])); //3
console.log(findLongestChain([[-10,-8],[8,9],[-5,0],[6,10],[-6,-4],[1,7],[9,10],[-4,7]])); //4

