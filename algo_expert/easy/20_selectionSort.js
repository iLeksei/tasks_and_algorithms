function selectionSort(array) {
    // Write your code here.
    let minNumIdx = 0;
    let temp = null;
    for (let i = 0; i < array.length; i++) {
        minNumIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minNumIdx]) {
                minNumIdx = j;
            }
        }
        temp = array[i];
        array[i] = array[minNumIdx];
        array[minNumIdx] = temp;
    }
    return array;
}