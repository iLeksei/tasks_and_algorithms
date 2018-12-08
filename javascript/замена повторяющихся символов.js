'use strict';

// заменить повторяющийся символ на ')', иначе на '('

function duplicateEncode(word){
  word = word.toLowerCase();
  let arr = word.split('');

  arr = arr.map((item) => {
    if (arr.indexOf(item) === arr.lastIndexOf(item)) {
      return item = '(';
    } else {
      return item = ')';
    }
  });
  return arr.join('');
};
   

duplicateEncode("(( @");
duplicateEncode("din");
duplicateEncode("Success");
