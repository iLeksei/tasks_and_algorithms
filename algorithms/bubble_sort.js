
const arr = [324,2,1,32,3];

// algorithm complexity is O(n**2)
function bubble_sort(array = []) {
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

function bubble_sort2(arr = []) {
    let isSorted = false;
    let temp = null;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < arr.length - 1;i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isSorted = false;
            }
        }
    }
}

bubble_sort(arr);
console.log(arr);