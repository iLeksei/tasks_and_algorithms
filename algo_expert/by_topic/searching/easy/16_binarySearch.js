
function binarySearch(array, target) {
    let leftCursor = 0;
    let rightCursor = array.length;

    while (leftCursor < rightCursor) {
        let pivot = Math.floor((leftCursor + rightCursor) / 2);
        if (array[pivot] === target) return array[pivot]
        else if (target > array[pivot]) leftCursor = pivot + 1;
        else if (target < array[pivot]) rightCursor = pivot - 1;
    }

    return target;
}

console.log(binarySearch([0, 1, 21, 33, 45, 46, 61, 71, 72, 73], 33))