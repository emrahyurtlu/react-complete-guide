import React from "react";
import ExpenseForm from "./ExpenseForm";
import { Guid } from 'js-guid';
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    
    const expenseData = {
      id: Guid.newGuid().toString(),
      ...enteredExpenseData
    }
    console.log(expenseData);
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
