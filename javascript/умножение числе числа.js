'use strict';

// вернуть количество умножений чисел числа
function persistence(num) {
  let count = 0;
  multiplication(num);
  function multiplication(num) {
    num = Array.from(num.toString());
    if (num.length >= 2) {
      num = num.reduce((a,b) => {
        return a * b;
      });
      count++;
      multiplication(num);
     } else {
      return count;
     };
  };
  return count;
};
persistence(1234);
