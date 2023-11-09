function bubbleSort(array) {
    // Write your code here.
    if (!array || array.length < 2) return array;
    let temp = null;

    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (array[i] < array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}