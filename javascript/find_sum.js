'use strict';

// вернуть статовую позицию и длину 

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
	let pos = 0,
		numsLength = 1,
		i = 1,
		acc = arr[pos];

	while (i <= arr.length) {
		if (acc === target) {
			console.log(`find! pos is ${pos} and length is ${numsLength}`);
			return;
		} else if (acc > target) {
			numsLength--;
			acc = acc - arr[pos];
			++pos;
		} else if (acc < target) {
			numsLength++;
			acc+=arr[i];
			i++;
		};
	};
	console.log(0)
	return 'sum not finded';
};

let target = 7; 
let arr3 = [1,3,0,2,0,0,4,3,5,7,6];
// arr3 = [10,0,15];
findSum(arr3, target);