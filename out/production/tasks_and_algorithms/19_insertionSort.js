function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let currentNum = array[i];
        let prevIdx = i - 1;
        while (currentNum < array[prevIdx] && prevIdx !== -1) {
            array[prevIdx + 1] = array[prevIdx];
            prevIdx--;
        }
        array[prevIdx + 1] = currentNum
    }

    return array;
}

// 1) [2, 34, 5, 1, 3] <= move 2
// 2) [2, 5, 34, 1, 3] <= move 5
// 3) [1, 2, 5, 34, 3] <= move 1
// 3) [1, 2, 3, 5, 34] <= move 3
console.log(insertionSort([34, 2, 5, 1, 3])) // [1,2,3,5,34]