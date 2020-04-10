'use strict';
let money, time;


function start() {
	money = +prompt('Ваш бюджет на месяц?', '');
	time = +prompt('Ввудите дату в фрмате YYYY-MM-DD', '');
	
	while(isNaN(money) || money === '' || money === null) {
		money = +prompt('Ваш бюджет на месяц?', '');
	}
}

start();



const appData = {
	money,
	time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
};

function chooseExpenses() {
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
		}
	}
}
chooseExpenses();

appData.moneyPerDay = (appData.money / 30).toFixed(1);

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

function checkSavings() {
	if (appData.savings === true) {
		let save = +prompt('Какова сумма накоплений?'),
			  percent = +prompt('Под какой процент?');
		
		appData.monthIncome = save/100/12*percent;
		alert('Salaray: ' + appData.monthIncome)
		
	}
}

checkSavings();