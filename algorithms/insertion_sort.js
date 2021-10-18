
const arr = [321,35,64,57,2,1,14,32,5];
// 1 loop = [35,321,64,57,2,1,14,32,5];
// 2 loop = [35,321,64,57,2,1,14,32,5];

// algorithm complexity is O(n**2)
function insertion_sort(arr = []) {
    if (!arr || arr.length < 2) return arr;

    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let prevIdx = i - 1;
        while (prevIdx > -1 && curr < arr[prevIdx]) {
            arr[prevIdx + 1] = arr[prevIdx];
            prevIdx--;
        }
        arr[prevIdx + 1] = curr;
    }
}

insertion_sort(arr);
console.log(arr);