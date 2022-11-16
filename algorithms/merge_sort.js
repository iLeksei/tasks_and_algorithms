
const arr = [132,34,56,54,3,2,342,75,689,2];

function sort_and_merge(leftArr, rightArr) {
    const temp = [];

    while(leftArr.length > 0 && rightArr.length > 0) {

        if (leftArr[0] > rightArr[0]) {
            temp.push(rightArr.shift());
        } else {
            temp.push(leftArr.shift());
        }
    }

    if (rightArr[0]) {
        temp.push(rightArr.shift());
    }

    if (leftArr[0]) {
        temp.push(leftArr.shift());
    }

    return temp;
}

function merge_sort(arr = []) {
    if (!arr || arr.length < 2) { return arr; }
    const middle = Math.floor(arr.length / 2);
    const leftArr = arr.splice(0, middle);
    return sort_and_merge(merge_sort(leftArr), merge_sort(arr));
}


const result = merge_sort(arr);
console.log(result);