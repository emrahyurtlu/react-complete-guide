import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = () => {
  /* const [enteredExpense, setEnteredExpense] = useState({
    title: "",
    amount: 0.0,
    date: "",
  }); */

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangedHandler = (event) => {
    //enteredExpense.title = event.target.value;
    // setEnteredExpense(enteredExpense);
    /* setEnteredTitle((prevState) => {
      return {...prevState, title: event.target.value}
    }); */
    setEnteredTitle(event.target.value);
  };

  const amountChangedHandler = (event) => {
    /* setEnteredExpense((prevState) => {
      return {...prevState, amout: event.target.value}
    }); */
    setEnteredAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    /* setEnteredExpense((prevState) => {
      return {...prevState, date: event.target.value}
    }); */
    setEnteredDate(event.target.value);
  };

  const saveExpenseHandler = (event) => {
    event.preventDefault();
    const enteredExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    console.log(enteredExpense);
  };

  return (
    <form onSubmit={saveExpenseHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            id="title"
            placeholder="Input title"
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amout</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            placeholder="Input title"
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2030-12-31"
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
