'use strict';

let tree = [
	{
		name: 'Google',
		childs: [
			{
				name: 'Google-mobile',
				childs: [],
				capitalization: 3.253
			},
			{
				name: 'Google-computers',
				childs: [
					{
						name: 'Google-radar',
						childs: [],
						capitalization: 2.133
					}
				],
				capitalization: ''
			}
		],
		capitalization: ''
	},
	{
		name: 'Apple',
		childs: [
			{
				name: 'Apple-mobile',
				childs: [
					{
						name: 'Apple-devices',
						childs: [],
						capitalization: 4.231
					},
					{
						name: 'Apple-photo',
						childs: [],
						capitalization: 1.864
					}
				],
			},
			{
				name: 'Apple-computers',
				childs: [],
				capitalization: 5.930
			}
		],
		capitalization: ''
	},
	{
		name: 'Samsung',
		childs: [
			{
				name: 'Samsung-mobile',
				childs: [],
				capitalization: 6.320
			},
			{
				name: 'Samsung-computers',
				childs: [
					{
						name: 'Samsung-devices',
						childs: [],
						capitalization: 1.526
					},
					{
						name: 'Samsung-project',
						childs: [],
						capitalization: 3.213
					}
				],
				capitalization: ''
			},
		],
		capitalization: ''
	}
];

// console.log(JSON.stringify(tree), tree);

function getTotalCapital(tree, fn) {
	let totalCapital = 0;
	for (let i = 0; i < tree.length; i++ ) {
		totalCapital = fn(tree[i], totalCapital);
	};
	console.log(totalCapital / 1000)
};

function returnCapital(company, capital = 0) {
	if (company.childs.length == 0 ) {
		return  capital += company.capitalization * 1000;
	} else if (company.childs.length == 1) {
		return capital += company.childs[0].capitalization * 1000;
	} else {
		for (let i = 0; i < company.childs.length; i++) {
			capital = returnCapital(company.childs[i], capital);
		};
		return capital;
	};
};

getTotalCapital(tree, returnCapital);


