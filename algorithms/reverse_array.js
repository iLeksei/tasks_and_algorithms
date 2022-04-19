/**
 * reverse array without additional array
 */
function reverseArray(arr = []) {
    let length = arr.length;
    for (let i = length - 1; i >= 0; i--) {
        arr.push(arr[i])
    }
    return arr.slice(length, arr.length)
}

let result = reverseArray([1, 2, 3, 4]);
console.log(result)