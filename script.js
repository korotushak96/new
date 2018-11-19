'use strict';

let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    optionalExpenses: '',
    income: [],
    savings: false
};

let expense = prompt('Введите обязательную статью расходов в этом месяце'),
    expenseCost = prompt('Во сколько обойдется?');

appData.expenses.expense=expenseCost;

alert((appData.budget/30));