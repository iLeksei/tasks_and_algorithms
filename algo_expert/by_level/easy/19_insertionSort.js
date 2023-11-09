

function insertionSort(array) {
    // Write your code here.
    for (let i = 1; i < array.length; i++) {
        let currNum = array[i];
        let prevIdx = i - 1;
        while(prevIdx > -1 && currNum < array[prevIdx]) {
            array[prevIdx + 1] = array[prevIdx];
            prevIdx--
        }
        array[prevIdx + 1] = currNum;
    }
    return array;
}

console.log(insertionSort([34,1,3,7,3])) // [1,3,3,7,34]