'use strict';

function isFiveEqualNumbers(arr, e) {
  let count = 1;
  arr.reduce((acc, item) => {
   if (item == acc) {
     count++;
     return acc = item;
   } else {
     return item;
   };
  });
  let answere = (count == 5) ? true : false;
  console.log(answere);
};

// function isFiveEqualNumbers(arr, e) {
//   let count = 1;
//   let now = arr[0];
//   for (let i = 1; i < arr.length;i++) {
//   	if (now == arr[i]) {
//   		count++;
//   		now = arr[i]
//   	} else {
//   		now = arr[i]
//   		continue;
//   	};
//   };
//   let answere = (count == 5) ? true : false;
//   console.log(answere);
// };


isFiveEqualNumbers([1,2,2,2,2,2,4,6], 2);
