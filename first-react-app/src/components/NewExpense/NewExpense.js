import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import './newExpense.css';
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const EnteredData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        
        props.onAddExpense(EnteredData)
    }
  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>
    </Card>
  );
};
export default NewExpense;
