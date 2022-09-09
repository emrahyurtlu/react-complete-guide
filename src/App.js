import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const expenses = [
    {title: 'Car Insurance', amount: 294.21, date: new Date(2020, 7, 1)},
    {title: 'Toilet', amount: 94.21, date: new Date(2021, 8, 15)},
    {title: 'Meat', amount: 194.21, date: new Date(2022, 10, 29)},
  ];

  return (
    <div>
      <h1>Hello World!!!</h1>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
    </div>
  );
};

export default App;
