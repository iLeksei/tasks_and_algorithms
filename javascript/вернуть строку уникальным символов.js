'use strict';


// вернуть сроку без повторяющихся подряд символов

let uniqueInOrder = function(iterable){
	if (iterable.length == 0) {
		return [];
	}
	let uniqArr = [];
	let char = iterable.charAt(0);
	uniqArr.push(char);

  for (let i = 1; i < iterable.length; i++) {
  	if (iterable[i] == char) {
  		continue;
  	} else {
  		char = iterable[i];
  		uniqArr.push(char);
  	};
  };
 	return uniqArr;
};

uniqueInOrder('AAAABBBCCDAABBB');

// return [...iterable].filter((a, i) => a !== iterable[i-1])