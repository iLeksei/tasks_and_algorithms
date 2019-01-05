'use strict';

// вернуть первые два значения из ints, которые дают сумму s

//sum_pairs([1, 4, 8, 7, 3, 15], 8);
//sum_pairs([1, -2, 3, 0, -6, 1], -6);
//sum_pairs([10,5,2,3,7,5], 10);



var sum_pairs=function(ints, s){
   let pos = 0,
		arr = [],
		indexArr = [];
		while (pos < ints.length) {
			for (let i = pos + 1; i < ints.length; i++) {
				if (ints[pos] + ints[i] != s) {
					continue;
				} else {
					arr.push([ints[pos],ints[i]]);
					indexArr.push([i - pos]);
				};
			};
			pos++;
		};
		if (arr.length == 0) {
			return undefined;
		} else if (indexArr[0] > indexArr[1] ) {
			return arr[1];
		};
			return arr[0];
};
sum_pairs([1,2,3,4,1,0], 2);
//sum_pairs([1, 4, 8, 7, 3, 15], 8);
//sum_pairs([1, -2, 3, 0, -6, 1], -6);
//sum_pairs([10,5,2,3,7,5], 10);
