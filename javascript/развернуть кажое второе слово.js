"use strict";


// Reverse every other word in the string
function reverse(str){
    if (str === '') return ('');
    str = str.split(' ');
  for (let i = 1; i < str.length; i = i + 2) {
    str[i]= str[i].split('').reverse().join('');;
  };
  return str.join(' ');
}



reverse("I really don't like reversing strings!");
//"I yllaer don't ekil reversing !sgnirts"
reverse("Reverse this string, please!")
// "Reverse siht string, !esaelp")