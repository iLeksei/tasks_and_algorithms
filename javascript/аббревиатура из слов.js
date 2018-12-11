'use strict';

// сделать аббривиатуру путем вставки количества символо между первым и последним символом

function abbreviate(string) {
  string = string.split(' ');
  let reg = /\,/g;
  string = string.map((word) => {
  	if (~word.indexOf('-')) {
  		return word = word.split('-').map((word) => {
   			return word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1);
   		}).join('-');
  	} else if (word.length > 3) {
  		if (!reg.test(word)) {
  			return word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1);
  		} else {
  			return word.charAt(0) + (word.length - 3) + word.charAt(word.length - 2) + ',';
  		}
   	} else {
   		return word;
   	};
  });
  return string = string.join(' ');
};

function abbreviate(string) {
  return string.replace(/\w{4,}/g, function(word) {
    return word[0] + (word.length - 2) + word.slice(-1);
  });
}

abbreviate("You need, need not want, to complete this code-wars mission");