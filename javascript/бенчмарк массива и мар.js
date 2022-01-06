'use strict';

//бенчмарк массива и маp

let testMap = new Map();
let testArr = [];

for (let i = 0; i < 1000000; i++) {
	let testObj = {
		num: `test ${i}`,
		id: `${i}`,
	};
	testMap.set(testObj.num, testObj.id);
	testArr.push(testObj);
};
// console.log(testMap, testArr);

function benchmark(test, search) {
	
	let start = performance.now()

	if (test instanceof Array) {
		let found = test.find(item => {
			return item.num == search;
		})
		console.log(found);
		found = null;
	} else {
		let found = test.get(search)
		console.log(found);
		found = null;
	}

	let result = performance.now() - start;
	console.log(result);
	return result;
};

console.log(benchmark(testArr, 'test 10233') - benchmark(testMap, 'test 10233'))
// benchmark(testArr, 'test 1023');
// benchmark(testMap, 'test 1023');
testMap = null;
testArr = null;