"use strict";
// вернуть строк имен, разделенную запятыми,где посление два имени разделены &

function list(names){
	if (names.length == 0) {
		return '';
	};
	let arr = names.map((item, i, arr) => {
		if (arr.length == 1) {
			return item.name;
		}
		if (i == arr.length - 2) {
		return `${item.name} & ${arr[i + 1].name}`
		} else if (i == arr.length - 1) {
			return;
		} else {
			return item.name;
		};
	});
	if (arr.length == 1) {
		return arr.join();
	};
	arr.pop();
	arr = arr.join(', ');
	console.log(arr);
	return arr;
};

function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 };
 
 function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}

list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]);
list([{name: 'Bart'}]);