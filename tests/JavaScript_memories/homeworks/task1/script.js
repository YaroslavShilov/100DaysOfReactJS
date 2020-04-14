'use strict';

const money = prompt('Ваш бюджет на месяц?', 1000),
			time = prompt('Ввудите дату в фрмате YYYY-MM-DD', '2020-10-10'),
			neces1 = prompt('Введите обязательную статью расходов в этом месяце', 1000),
			need1 = prompt('Во сколько обойдется?', 500),
			neces2 = prompt('Введите обязательную статью расходов в этом месяце', 1000),
			need2 = prompt('Во сколько обойдется?', 500);

const appData = {
	money,
	time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};

appData.expenses[neces1] = need1;
appData.expenses[neces2] = need2;

let forDay = appData.money / 30;
alert(forDay);
console.log(appData);

