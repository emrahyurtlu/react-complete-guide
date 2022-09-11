import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = () => {
  const [enteredExpense, setEnteredExpense] = useState({
    title: "",
    amount: 0.0,
    date: "",
  });

  const titleChangedHandler = (event) => {
    console.log(event);
    enteredExpense.title = event.target.value;
    setEnteredExpense(enteredExpense);
  };

  const amountChangedHandler = (event) => {
    enteredExpense.amount = event.target.value;
    setEnteredExpense(enteredExpense);
  };

  const dateChangedHandler = (event) => {
    enteredExpense.date = event.target.value;
    setEnteredExpense(enteredExpense);
  };

  const saveExpenseHandler = (event) => {
    event.preventDefault();
    console.log(enteredExpense);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            id="title"
            placeholder="Input title"
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amout</label>
          <input
            type="number"
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
            min="2019-01-01"
            max="2030-12-31"
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={saveExpenseHandler}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
