'use strict';

// преобразовть строку из camelcase в кебаб

function kebabize(str) {
  str = str.split('');
  let reg = /[A-Z]/;
  for (let i = 0; i < str.length; i++) {
  	if (str[i] / 1) {
  		str.splice(i, 1);
  	};
  	if (reg.test(str[i])) {
  		str.splice(i, 0, '-');
  		i++;
  	};
  };
  return str = str.join('').toLowerCase();
};


//kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('myCamelHas3Humps')