// Write a function that takes in a non-empty array of integers that are sorted
// in ascending order and returns a new array of the same length with the squares
// of the original integers also sorted in ascending order.
// [-3, -1, 1, 2, 4] => [1, 1, 4, 9, 16]

function sortedSquaredArray(array) {
   let largestIdx = array.length - 1;
   let smallestIdx = 0;
   let counter = largestIdx;
   const result = [];

   for (let i = 0; i < array.length; i++) {
       if (Math.abs(array[smallestIdx]) > Math.abs(array[largestIdx])) {
           result[counter - i] = array[smallestIdx] ** 2;
           smallestIdx++;
       } else {
           result[counter - i] = array[largestIdx] ** 2;
           largestIdx--;
       }
   }
   return result;
}

console.log(sortedSquaredArray([-3, -1, 1, 2, 5]))

