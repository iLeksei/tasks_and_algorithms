/**
    You're given an array of integers and an integer. Write a function that moves
    all instances of that integer in the array to the end of the array and returns
    the array.


    The function should perform this in place (i.e., it should mutate the input array)
    and doesn't need to maintain the order of the other integers.

    [1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered differently
*/


function moveElementToEnd(array, toMove) {
    // Write your code here.
    let lastIdx = array.length - 1;
    let i = 0;
    let temp = null;

    while (i < lastIdx) {
        if (array[i] === toMove && array[lastIdx] !== toMove) {
            temp = array[i];
            array[i] = array[lastIdx];
            array[lastIdx] = temp;
            lastIdx--;
        }

        if (array[lastIdx] === toMove) {
            lastIdx--;
            continue;
        }

        i++;
    }

    return array;
}

console.log(moveElementToEnd([2, 4, 2, 5, 6, 2, 2], 2)) // []