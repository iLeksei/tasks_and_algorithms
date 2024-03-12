//     Write a function that takes in an array of unique integers and returns an
//     array of all permutations of those integers in no particular order.
//
// If the input array is empty, the function should return an empty array.
// Sample Input
// array = [1, 2, 3]
//
// Sample Output
// [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


let result = new Set();

function getPermutations(nums = [], sublist = []) {
    if (nums.length === sublist.length) {
        result.add([...sublist]);
        return;
    }

    for (const num of nums) {
        if (sublist.includes(num)) continue;
        sublist.push(num);
        getPermutations(nums, sublist);
        sublist.pop();
    }
}

getPermutations([1, 2, 3]);
console.log(result); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]