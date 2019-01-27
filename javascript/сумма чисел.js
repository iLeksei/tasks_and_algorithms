'use strict';

let foo = [1,45,67,34,88,55,2,4,5,7,9,5,4,2,3];
let target = 21;
// вернуть стартовую позицию и длину 

// function findSum(arr, target) {
// 	for (let i = 0; i < foo.length; i++) {
// 		for (let j = i, acc = 0, NumLength = []; j < foo.length; j++) {
// 			acc+=foo[j];
// 			NumLength.push(foo[j]);
// 			if (acc > target) break;
// 			if (acc === target) {
// 				console.log(`position is ${i} and length is ${NumLength.length}`);
// 				return
// 			} else {
// 				continue;
// 			};
// 		}
// 	}
// 	return 'sum not finded'
// };

function findSum(arr,target) {
	let nums = [],
		i = 1,
		pos = 0,
		acc = arr[pos];

	while (i < arr.length) {
		if (acc === target) {
			console.log(`find! pos is ${i} and length is ${nums.length}`);
			return;
		} else if (acc > target) {
			nums = [];
			++pos;
			acc = arr[pos];
			i = pos + 1;
		} else {
			nums = [...nums, arr[i]];
			acc+=arr[i];
			i++; 
		};
	};
	return 'sum not finded';
};



findSum(foo, target);