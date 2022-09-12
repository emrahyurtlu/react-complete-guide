import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { Guid } from "js-guid";
import React, { useState } from "react";

const INITIAL_DATA = [
  {
    id: Guid.newGuid().toString(),
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: Guid.newGuid().toString(),
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: Guid.newGuid().toString(),
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: Guid.newGuid().toString(),
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_DATA);

  const addNewExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]); 
    // OR Set with Robust way of updating
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })

    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addNewExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
