'use strict';

let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    expense = prompt('Введите обязательную статью расходов в этом месяце'),
    expenseCost = prompt('Во сколько обойдется?');

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        expense: expenseCost
    },
    optionalExpenses: {},
    optionalExpenses: '',
    income: [],
    savings: false
};

alert((appData.budget - appData.expenses.expense)/30)