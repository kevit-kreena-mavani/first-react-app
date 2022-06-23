import logo from "./logo.svg";
import "./App.css";
import Expense from "./components/Expense";


function App() {
  const items = [
    {
      title: "car insurance",
      amount: "267",
      date: new Date(2021, 2, 13),
    },
    {
      title: "car insurance 1",
      amount: "268",
      date: new Date(2021, 3, 14),
    },
    {
      title: "car insurance 2",
      amount: "269",
      date: new Date(2021, 4, 15),
    },
    {
      title: "car insurance 3",
      amount: "270",
      date: new Date(2021, 5, 16),
    },
  ];
  return (
    <div>
      <h1>Hello!!</h1>
      <Expense item= {items}></Expense>
    </div>
  );
}

export default App;
