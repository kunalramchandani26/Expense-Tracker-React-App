import React, { useState } from 'react'
import Expenses from "./components/Expenses";
import NewExpense from './components/NewExpense/NewExpense';


function App() {
    const DUMMY_EXPENSE = [
        // { id: 'e0', title: 'food', amount: 323, date: new Date(2021, 1, 3) },
        // { id: 'e1', title: 'brush', amount: 50, date: new Date(2021, 2, 9) },
        // { id: 'e2', title: 'shirt', amount: 523, date: new Date(2021, 3, 6) },
        // { id: 'e3', title: 'jeans', amount: 823, date: new Date(2021, 4, 25) },
    ];

    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    const addExpenseHandler = (expense) => {
        // setExpenses([expense, ...expenses]);
        setExpenses((prevExpense) => {
            return ([expense, ...prevExpense]);
        })
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
