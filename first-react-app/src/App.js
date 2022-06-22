import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      title: "car insurance",
      amount: "267",
      date: new Date(2021, 2, 13),
    },
    {
      title: "car insurance 1",
      amount: "268",
      date: new Date(2021, 2, 13),
    },
    {
      title: "car insurance 2",
      amount: "269",
      date: new Date(2021, 2, 13),
    },
    {
      title: "car insurance 3",
      amount: "270",
      date: new Date(2021, 2, 13),
    },
  ];
  return (
    <div>
      <h1>Hello!!</h1>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
