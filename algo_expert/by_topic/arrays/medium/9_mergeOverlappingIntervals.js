/**
 Write a function that takes in a non-empty array of arbitrary intervals,
 merges any overlapping intervals, and returns the new intervals in no
 particular order.

 Each interval interval is an array of two integers, with
 interval[0] as the start of the interval and
 interval[1] as the end of the interval.

 Note that back-to-back intervals aren't considered to be overlapping. For
 example, [1, 5] and [6, 7] aren't overlapping;
 however, [1, 6] and [6, 7] are indeed
 overlapping.

 Also note that the start of any particular interval will always be less than
 or equal to the end of that interval.

 Sample Input:
 intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]

 Sample Output:
 [[1, 2], [3, 8], [9, 10]]
 // Merge the intervals [3, 5], [4, 7], and [6, 8].
 // The intervals could be ordered differently.
 */

function mergeOverlappingIntervals(array) {
    // Write your code here.
    array.sort((a,b) => a[0] - b[0]);
    let result = [array[0]];
    let currIdx = 1;
    let prevIdx = 0;

    while (currIdx < array.length) {
        // if previous element last value >= current element start value 
        if (result[prevIdx][1] >= array[currIdx][0]) {
            result[prevIdx] = [result[prevIdx][0], Math.max(result[prevIdx][1], array[currIdx][1])];
        } else {
            prevIdx++;
            result.push(array[currIdx])
        }
        currIdx++;
    }
    return result;
}

// console.log(mergeOverlappingIntervals([
//     [89, 90],
//     [-10, 20],
//     [-50, 0],
//     [70, 90],
//     [90, 91],
//     [90, 95]
// ]))

console.log(mergeOverlappingIntervals([
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10]
]))

// console.log(mergeOverlappingIntervals([
//     [1, 10],
//     [11, 20],
//     [21, 30],
//     [31, 40],
//     [41, 50],
//     [51, 60],
//     [61, 70],
//     [71, 80],
//     [81, 90],
//     [91, 100]
// ]));

//
// console.log(mergeOverlappingIntervals([
//     [1, 10],
//     [10, 20],
//     [20, 30],
//     [30, 40],
//     [40, 50],
//     [50, 60],
//     [60, 70],
//     [70, 80],
//     [80, 90],
//     [90, 100]
// ]));

