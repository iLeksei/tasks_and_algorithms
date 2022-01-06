'use strict';

// find start position and amount of numbers for getting @target

function findSum(arr, target) {
	let pos = 0,
		numsLength = 1,
		i = 1,
		acc = arr[pos]; //initial value

	while (i <= arr.length) {
		if (acc === target) {
			console.log(`found! pos is ${pos} and length is ${numsLength}`);
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
	return 'sum not found';
};

let target = 7; 
let arr3 = [1,3,0,2,0,0,4,3,5,7,6];
// arr3 = [10,0,15];
findSum(arr3, target);