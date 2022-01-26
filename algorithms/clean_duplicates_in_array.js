
const arr = [
    [1, 0, 0 ,0 ,0],
    [0, 0, 1 ,1 ,1],
    [1, 0, 0 ,0 ,0],
    [1, 0, 1 ,1 ,0],
    [1, 0, 1 ,0 ,1],
];

/**
 *
 *  if we got repeatable digit 1 by row-i-index or by col-j-index => we should replace it with 0
 *  should return
 *  [
        [1, 0, 0 ,0 ,0],
        [0, 0, 0 ,0 ,0],
        [0, 0, 0 ,0 ,0],
        [0, 0, 0 ,0 ,0],
        [0, 0, 0 ,0 ,1],
    ]
 *
 *
 *
 *
 */

function cleanArray(arr = []) {
    const removable = new Map();

    for (let i = 0; i < arr.length; i++) {
        const curr_arr = arr[i];
        for (let j = 0; j < curr_arr.length; j++) {
            let isCurrentValueOne = curr_arr[j] === 1;
            let prevByColumnValue = arr[i - 1] ? arr[i - 1][j] : null;
            let nextByColumnValue = arr[i + 1] ? arr[i + 1][j] : null;
            // if curr value and next (in row) are equal one
            // or curr value and prev value (in row) are equal one
            // put to map col and row indexes of these values
            // with mark that is repeatable entries by the row!!!
            if ((isCurrentValueOne && curr_arr[j + 1] === 1) || ((isCurrentValueOne && curr_arr[j - 1] === 1))) {
                removable.set("row_" + i + "_" + j, 1);
            }

            // if curr value and next (in column) are equal one
            // or curr value and prev value (in column) are equal one
            // put to map col and row indexes of these values
            // with mark that is repeatable entries by the column!!!
            if ((isCurrentValueOne && prevByColumnValue === 1) || (isCurrentValueOne && nextByColumnValue === 1)) {
                removable.set("col_" + i + "_" + j, 1);
            }
        }
    }

    for (let entry of removable) {
        let val = entry[0];
        val = val.split("_");
        let rowIdx = val[1];
        let colIdx = val[2];
        arr[rowIdx][colIdx] = 0;
    }
    return arr;
}

let result = cleanArray(arr);
console.table(result)

const arr2 = [
    [1, 1, 1 ,0 ,1],
    [0, 0, 1 ,1 ,1],
    [1, 0, 0 ,0 ,0],
    [0, 0, 1 ,0 ,0],
    [1, 0, 1 ,0 ,1],
];
let result2 = cleanArray(arr2);
console.table(result2)
/**
 * should return
 * [
 *         [0, 0, 0 ,0 ,0],
 *         [0, 0, 0 ,0 ,0],
 *         [1, 0, 0 ,0 ,0],
 *         [0, 0, 0 ,0 ,0],
 *         [1, 0, 0 ,0 ,1],
 *     ]
 */