'use strict';

let companies = [
	{
		name: 'Google',
		children: [
			{
				name: 'Google-mobile',
				children: [],
				capitalization: 3.253
			},
			{
				name: 'Google-computers',
				children: [
					{
						name: 'Google-radar',
						children: [],
						capitalization: 2.133
					}
				],
				capitalization: 30
			}
		],
		capitalization: 50
	},
	{
		name: 'Apple',
		children: [
			{
				name: 'Apple-mobile',
				children: [
					{
						name: 'Apple-devices',
						children: [],
						capitalization: 4.231
					},
					{
						name: 'Apple-photo',
						children: [],
						capitalization: 1.864
					}
				],
				capitalization: 10
			},
			{
				name: 'Apple-computers',
				children: [],
				capitalization: 5.930
			}
		],
		capitalization: 30
	},
	{
		name: 'Samsung',
		children: [
			{
				name: 'Samsung-mobile',
				children: [],
				capitalization: 6.320
			},
			{
				name: 'Samsung-computers',
				children: [
					{
						name: 'Samsung-devices',
						children: [],
						capitalization: 1.526
					},
					{
						name: 'Samsung-project',
						children: [],
						capitalization: 3.213
					}
				],
				capitalization: 20
			},
		],
		capitalization: 50
	}
];

// console.log(JSON.stringify(companies), companies);

function printCapital(companies) {
	for (let i = 0; i < companies.length; i++ ) {
		let company = companies[i];
		let totalCapital = calcCapital(company);
		console.log(company.name, totalCapital);
	};
};

function calcCapital(company) {
	let capital = 0;
	for (let i = 0; i < company.children.length; i++) {
	  capital += calcCapital(company.children[i]);
	};
	
	return company.capitalization + capital;
};

printCapital(companies);