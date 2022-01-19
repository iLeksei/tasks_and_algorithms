
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
        for (let j = 0; j < curr_arr; j++) {
            if ((curr_arr[j] === 1 && curr_arr[j + 1] === 1)|| ((curr_arr[j] === 1 && curr_arr[j - 1] === 1))) {
                removable.set(i + "_" + j);
            }

            if ((curr_arr[j] === 1 && arr[i - 1][j] === 1) || (curr_arr[j] === 1 || arr[i + 1][j] === 1)) {
                removable.set(i + "_" + j);
            }
        }
    }
}