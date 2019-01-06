'use strict';

// можно ли продать билеты. в кассе нет денегб блинет - 25

function tickets(peopleInLine){
	let cashBox25 = 0,
		cashBox50 = 0,
		cashBox100 = 0;

	for (let i = 0; i < peopleInLine.length; i++) {
		if (peopleInLine[i] === 25) {
			cashBox25+=peopleInLine[i];
			continue;
		} else if (peopleInLine[i] === 50 && cashBox25 >= 25) {
			cashBox25-=25;
			cashBox50+=50;
			continue;
		} else if (peopleInLine[i] === 100){
			if (cashBox50 >= 50 && cashBox25 >= 25) {
				cashBox50-=50;
				cashBox25-=25;
				cashBox100+=100;
				continue;
			} else if (cashBox50 == 0 && cashBox25 >= 75) {
				cashBox25-=75;
				cashBox100+=100;
				continue;
			} else {
				return 'NO';
			}
		} else {
			return 'NO';
		}
	};
	return 'YES';
};

tickets([25,50,25,100,25,25,25,100,25,25,50,100,25,50,25,100,25,50,25,100]);