'use strict';

// вернуть число и его степень


var isPP = function(n){
		let nums = [];

    for (let i = 2; i < n; i++) {
         for (let j = 2; j < n/2; j++) {
          if (i**j > n) {
            break;
          };
          if (n / (i ** j) === 1) {
            return nums = [i, j];
          };
        };
      }
    return null;
};



isPP(81);