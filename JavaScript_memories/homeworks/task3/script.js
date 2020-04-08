'use strict';

const money = +prompt('Ваш бюджет на месяц?', 1000),
			time = +prompt('Ввудите дату в фрмате YYYY-MM-DD', '2020-10-10');

const appData = {
	money,
	time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};

for (let i=0; i< 2; i++) {
	let a = prompt('Введите обязательную статью расходов в этом месяце', 1000);
	let	b = prompt('Во сколько обойдется?', 500);
	
	if (
		typeof(a) === 'string' && 
		typeof(a) !== null && 
		typeof(b) === 'string' &&
		a !== '' &&
		b !== '' &&
		a.length < 50 &&
		b.length < 50
	) {
		appData.expenses[a] = b;
	};
};

appData.moneyPerDay = appData.money / 30;

console.log(appData);
console.log(appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
	console.log('minimal')
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('middle')
} else if (appData.moneyPerDay > 2000) {
	console.log("It's very cool")
} else {
	console.log('error')
}
