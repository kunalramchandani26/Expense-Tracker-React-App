import React, { useState } from 'react'

export default function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };


    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <div className="container my-3">
            <form onSubmit={submitHandler} >
                <div className="mb-3">
                    <h4>Title</h4>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <h4>Amount</h4>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <h4>Date</h4>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Add Expense</button>
            </form>
        </div>
    )
}
