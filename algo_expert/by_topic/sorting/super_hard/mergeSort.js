
    
//     Write a function that takes in an array of integers and returns a sorted
//     version of that array. Use the Merge Sort algorithm to sort the array.
//
//     If you're unfamiliar with Merge Sort, we recommend watching the Conceptual
//     Overview section of this question's video explanation before starting to code.
//
// Sample Input
// array = [8, 5, 2, 9, 5, 6, 3]
//
// Sample Output
// [2, 3, 5, 5, 6, 8, 9]


function mergeSort(array = []) {
    if (array.length < 2) return array;
    let mid = Math.floor(array.length / 2);
    return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)))
}

function merge(left, right) {
    let temp = [];
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            temp.push(left.shift())
        }
        if (left[0] > right[0]) {
            temp.push(right.shift())
        }
    }
    if (left[0]) temp.push(left.shift());
    if (right[0]) temp.push(right.shift());
    return temp;
}