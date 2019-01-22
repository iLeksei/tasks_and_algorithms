'use strict';

// увеличить число из массива

function upArray(arr) {
  if (arr.some((item) => {
    return typeof item != 'number' || item > 9 || item < 0;
  })) {
    return null;
  };

  let str = arr.join('');
  if (str.length >=1) {
    let lastNum = str.charAt(str.length - 1);
    ++lastNum;
    arr = (str.substring(0, str.length - 1) + lastNum).split('');
    arr = arr.map((item) => {
      return parseInt(item);
    });
    return arr;
  };
};



upArray([2,4,2,1]);