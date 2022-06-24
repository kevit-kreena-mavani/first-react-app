import { useState } from "react";

import styled from "styled-components";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const TitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();

    const ExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(ExpenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const Form2 = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1rem;

    & label{
      font-weight: bold;
      margin-bottom: 0.5rem;
      display: block;
    }
    & input {
      font: inherit;
      padding: 0.5rem;
      border-radius: 6px;
      border: 1px solid #ccc;
      width: 20rem;
      max-width: 100%;
    }

    & button {
      font: inherit;
      cursor: pointer;
      padding: 1rem 2rem;
      border: 1px solid #40005d;
      background-color: #40005d;
      color: white;
      border-radius: 12px;
    }
  `;
  return (
    <div>
      <Form2 onSubmit={SubmitHandler}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={TitleChangeHandler}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            min="2019-02-01"
            max="2022-06-01"
            value={enteredDate}
            onChange={DateChangeHandler}
          />
        </div>
        <div>
          <button type="submit">Add Expense</button>
        </div>
      </Form2>
     
    </div>
  );
};
export default ExpenseForm;
