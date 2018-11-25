'use strict';

// двоичное число из массива

const binaryArrayToNumber = arr => {
  return arr = parseInt((arr.join('')), 2);
};

binaryArrayToNumber([1,0,0,1]);