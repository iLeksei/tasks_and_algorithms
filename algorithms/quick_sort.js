

const arr = [312,32,35,2,132,3,4346,568,5,2,1];

// algorithm complexity is O(N*logN)
function quick_sort(arr = [], leftBorder, rightBorder) {
    if (!arr || arr.length < 2) return arr;

    let pivot = arr[Math.floor((leftBorder + rightBorder) / 2) ];
    let leftMarker = leftBorder;
    let rightMarker = rightBorder;

    while (leftMarker <= rightMarker) {

        while(arr[leftMarker] < pivot) {
            leftMarker++;
        }

        while (arr[rightMarker] > pivot) {
            rightMarker--;
        }

        if(rightMarker >= leftMarker) {
            let temp = arr[rightMarker];
            arr[rightMarker] = arr[leftMarker];
            arr[leftMarker] = temp;
            leftMarker++;
            rightMarker--;
        }

        if (leftBorder < rightMarker) { quick_sort(arr, leftBorder, rightMarker); }
        if (leftMarker < rightBorder) { quick_sort(arr, leftMarker, rightBorder); }
    }

}

quick_sort(arr, 0, arr.length - 1);
console.log(arr);