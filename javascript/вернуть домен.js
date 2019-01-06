'use strict';

// вернуть домен
function domainName(url){
	let reg = /(?:(\w+)(\:\/\/www\.|\.|\:\/\/))/i;
	if (url.indexOf('https') == -1 && 
		url.indexOf('http') == -1 && 
		url.indexOf('www') == -1 && 
		url.indexOf('http://www') == -1 &&
		url.indexOf('https://www') == -1
		 ) {
		getDomain(url);
	} else {
		url = url.replace(reg, '');
		getDomain(url)
	};
  	function getDomain(url) {
	  	url = url.split('.').splice(0,1);
	  	url = url.join("");
	  	console.log(url)
	  	return url
	  };
};
domainName("http://google.com")// "google");
domainName("nwjkuh843nj134bv3szs5wtho.net/index.php")// "google");
domainName('http://www.hif3khts7sm.tv/error') //"hif3khts7sm");
domainName("www.xakep.ru");

// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };

// function domainName(url){
//   return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
// }