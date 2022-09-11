import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const elements = props.items.map(item => {
    return (<ExpenseItem key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />);
  });
  return (
    <Card className="expenses">
      {elements}
    </Card>
  );
}

export default Expenses;