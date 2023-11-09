
function binarySearch(array, target) {
    // Write your code here.
    let left = 0;
    let right = array.length;

    while (left <= right) {
        let pivot = Math.floor((left + right) / 2);
        if (array[pivot] === target) return pivot;
        else if (array[pivot] < target) left = pivot + 1;
        else right = pivot - 1;
    }

    return -1;
}

console.log(binarySearch([0, 1, 21, 33, 45, 46, 61, 71, 72, 73], 33))