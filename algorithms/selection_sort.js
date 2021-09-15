
const arr = [132,64,23,11,4,7,83,1];

// algorithm complexity is O(n**2)
function selection_sort(arr = []) {
    if (!arr || arr.length < 2) return arr;
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        let tmp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = tmp;
    }
}

selection_sort(arr);
console.log(arr);