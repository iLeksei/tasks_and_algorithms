'use strict';
// Multiplying numbers as strings
// This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!
// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid

function multiply(a, b) {
let aa = a.split('').reverse(),
    bb = b.split('').reverse(),
    stack = [];

  for (let i = 0; i < aa.length; i++) {
    for (let j = 0; j < bb.length; j++) {
      let m = aa[i] * bb[j];
      stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
    };
  };
  console.log(stack)
  for (let i = 0; i < stack.length; i++) {
    let num = stack[i] % 10;
    let move = Math.floor(stack[i] / 10);
    stack[i] = num;

    if (stack[i + 1])
      stack[i + 1] += move;
    else if (move != 0)
      stack[i + 1] = move;
  };
  stack = stack.reverse().join('');

// return stack.reverse().join('').replace(/^(0(?!$))+/, "");

  if (stack[0] !== '0') return stack;
  let count = 0;
  for (let i = 0; i <str.length; i++) {
   if (str[i] === '0') {
      count++;
   } else {
      break;
   };
  };
  stack = stack.slice(count);
  return stack;
};

multiply("1020303004875647366210", "2774537626200857473632627613");
multiply("58608473622772837728372827", "7586374672263726736374");

