
// Write a function that takes in a non-empty array of distinct integers and an
// integer representing a target sum. If any two numbers in the input array sum
// up to the target sum, the function should return them in an array, in any
// order. If no two numbers sum up to the target sum, the function should return
// an empty array.
//
// Note that the target sum has to be obtained by summing two different integers
// in the array; you can't add a single integer to itself in order to obtain the
// target sum.
//
//
// You can assume that there will be at most one pair of numbers summing up to the target sum.
// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10;
//
// output = [11, -1]

function twoNumberSum(array, targetSum) {
  const acc = new Set();
    for (let num of array) {
      let complement = targetSum - num;
        if (acc.has(complement)) {
          return [num, complement]
        }
      acc.add(num)
    }
  return [];
}

// if we have sorted array, we neeed to use left and right cursore 
// [-1, 0, 3, 5, 7, 11]
//	 ^				^	
//  time O(N logN)
//	space O(1)

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));