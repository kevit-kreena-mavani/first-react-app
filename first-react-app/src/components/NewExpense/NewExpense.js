import React from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import styles from './newExpense.module.css';
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const EnteredData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        
        props.onAddExpense(EnteredData)
    }
  return (
    <Card className={styles['new-expense']}>
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>
    </Card>
  );
};
export default NewExpense;
