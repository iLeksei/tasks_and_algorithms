
const arr = [321,35,64,57,2,1,14,32,5];
// 1 loop = [35,321,64,57,2,1,14,32,5];
// 2 loop = [35,321,64,57,2,1,14,32,5];

// algorithm complexity is O(n**2)
function insertion_sort(arr = []) {
    if (!arr || arr.length < 2) return arr;

    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let j = i - 1;
        while (j > -1 && curr < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = curr;
    }
}

insertion_sort(arr);
console.log(arr);