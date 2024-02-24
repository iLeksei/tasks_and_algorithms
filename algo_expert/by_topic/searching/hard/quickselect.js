
/**
* Write a function that takes in an array of distinct integers as well as an
* integer k and that returns the kth smallest integer in that array.
*
* The function should do this in linear time, on average.
* Sample Input
* array = [8, 5, 2, 9, 7, 6, 3]
* k = 3
*
* Sample Output
* 5
*/

function findKthLargest(nums, k) {
    let result = quickSelect(nums, 0, nums.length - 1, k);
    return result;
};

function quickSelect(arr, leftBorder, rightBorder, k) {
    let pivotIdx = leftBorder + Math.floor(Math.random() * (rightBorder - leftBorder + 1 ));
    let pivotNum = arr[pivotIdx];
    let leftCursor = leftBorder;
    let rightCursor = rightBorder;

    while(leftCursor <= rightCursor) {
        while(arr[leftCursor] < pivotNum) leftCursor++;
        while(arr[rightCursor] > pivotNum) rightCursor--;

        if (arr[rightCursor] >= arr[leftCursor]) {
            let temp = arr[rightCursor];
            arr[rightCursor] = arr[leftCursor];
            arr[leftCursor] = temp;
            leftCursor++;
            rightCursor--;
        }

        if (rightBorder <= arr.length - k) {
            return arr[arr.length -k];
        }

        if (leftBorder < rightCursor) quickSelect(arr, leftBorder, rightCursor, k);
        if (leftCursor < rightBorder) quickSelect(arr, leftCursor, rightBorder, k);
    }


}