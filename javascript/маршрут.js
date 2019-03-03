"use strict";

// найти самый короткий маршрут

function dirReduc(arr){
  if (!arr || arr.length === 0) return [];
  let i = 0;

  while ( i < arr.length) {
  	let next = arr[i+1];
    if (arr[i] === 'SOUTH' && next === 'NORTH') {
      arr.splice(i,2);
      i = 0;
      continue;
    };
    if (arr[i] === 'NORTH' && next === 'SOUTH') {
      arr.splice(i,2);
      i = 0;
      continue;
    };
    if (arr[i] === 'WEST' && next === 'EAST') {
      arr.splice(i,2);
      i = 0;
      continue;
    };
    if (arr[i] === 'EAST' && next === 'WEST') {
      arr.splice(i,2);
      i = 0;
      continue;
    };
    i++;
  };
  console.log(arr)
};

// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])


function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}