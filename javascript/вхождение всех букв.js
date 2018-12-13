'use strict';


// проверить если ли в строе все символы из алфавита

function isPangram(string){
	let answer = false;
	string = string.toLowerCase();
	let i = 97;
	while (i <= 122) {
		let char = String.fromCharCode(i);
		if (~string.indexOf(char)) {
			i++;
		} else {
			return false;
		};
	}
  return true;
};

isPangram("abcdefghijklmopqrstuvwxyz");

// function isPangram(string){
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//     return string.indexOf(x) !== -1;
//   });
// }