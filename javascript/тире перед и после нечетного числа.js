'use strict';

// поставить типе перед и после нечетного числа

function dashatize(num) {
	if (num === 1 || num == (-1)) {
		return 1;
	} else if (isNaN(num)) {
		return 'NaN';
	} else if (num == 0) {
    	return '0';
  	} else {
	    num = ((Math.abs(num)).toString()).split('');
	    num = num.map((item, i) => {
		  	if (item%2 == 0) {
		  		return item;
		  	};
		  	if (item%2 != 0) {
		  		if (i == 0) {
		  			return item = item + '-';
		  		} else if (i == num.length - 1) {
		  			return item = '-' + item;
		  		} else {
		  			return item = '-' + item + '-';
		  		};
		  	};
  		});
	  num = num.join('');
	  let change = /--/gi;
	  return num = num.replace(change, '-');
  	};
};

function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "")
};

function dashatize(num) {
  return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
};
//dashatize(5311);

