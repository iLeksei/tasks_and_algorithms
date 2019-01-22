'use strict';
// Prize Draw
// Example: names: COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH weights: [1, 4, 4, 5, 2, 1];
// PAUL -> n = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54 The weight associated with PAUL is 2 so Paul's winning number is 54 * 2 = 108.
// sort the firstnames in decreasing order of the winning numbers
// return: the firstname of the participant whose rank is n (ranks are numbered from 1)

function rank(st, we, n) {
	if (st.length === 0) { return "No participants"};
  st = st.split(',');
  if (st.length === 1 && n) {return st[0]};
	if (n > st.length) { return "Not enough participants"};
   const abc = 'abcdefghijklmnopqrstuvwxyz';
   st = st.map((name, i) => {
   	name = name.toLowerCase();
   	let scoreOfName = 0;
   	for (let j = 0; j < name.length; j++) {
   		let pos = abc.indexOf(name[j]) + 1;
   		scoreOfName+=pos;
   	};
   	return [name, (scoreOfName + name.length) * we[i]];
   }).sort((a,b) => {
   	if (a[1] !== b[1]) {
   			return b[1] - a[1];
   		} else if (a[0] > b[0]) {
   			return 1;
   		} else {
   			return -1;
   		};
   }).map(item => item[0].charAt(0).toUpperCase() + item[0].slice(1));
   return st[n - 1];
};

// rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 3);
 // rank('Joshua,Mia', [4,5], 1);
 // rank('Addison,Emily,Lily,Grace,Samantha,William,Jayden,Naoh,Ethan,Chloe,Willaim,Lyli,Sofia,Alexander,Ella,Joshua,Natalie,Liam,Lagon,Emma,James,Madison,Noah,Isabella,Olivai,Aubrey,Avery,Mason,Sophia', [6,6,6,4,6,1,2,3,1,1,3,6,4,1,5,1,3,6,4,3,6,3,3,4,3,6,5,5,1], 14);
rank('Benjamin,Aiden,Alexander,Mia,David,Aubrey,Mason,Jacob,Elijah,Chloe,William,Robert,Naoh,Joshua,Addison,Ethan,Sophia,Ava,Logan,Liam,Michael,Noah', [5,6,2,3,5,2,4,3,1,2,6,3,3,2,3,2,1,4,3,6,1,3], 1);
