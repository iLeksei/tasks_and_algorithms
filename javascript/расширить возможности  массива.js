'use strict';

Array.prototype.square = function() {
  return this.map((a) => {
    return a**2;
  });
};

Array.prototype.cube = function() {  
  return this.map((a) => {
    return a**3;
  });
};

Array.prototype.sum = function() {
  return this.reduce((a,b) => {
   return a + b;
  });
};

Array.prototype.average = function() {
  if (this.length == 0) {
    return NaN;
  };
  return (this.reduce((a,b) => {
   return a + b;
  }) / this.length);
};

Array.prototype.odd = function() {
  return this.filter((a) => {
   if (a%2 != 0) {
    return a;
   };
  });
};

Array.prototype.even = function() {
  return this.filter((a) => {
   if (a%2 == 0) {
    return a;
   };
  });
};
