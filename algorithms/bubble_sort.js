
const arr = [324,2,1,32,3];

// algorithm complexity is O(n**2)
function bubble_sort(arr = []) {
    if (!arr || arr.length < 2) return arr;

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if(arr[i] < arr[j]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}

bubble_sort(arr);
console.log(arr);