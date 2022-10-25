import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // cost[(userInput, setUserInput)] = useState({
  //   entredTitle: "",
  //   entredTitle: "",
  //   entredTitle: "",
  // });
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // Внизу не правильное использование UseState как объекта
    // SetUserInput({
    //   ...userInput,
    //   entredTitle: event.target.value,
    // });
    //Лучше использовать нижний вариант
    // setUserInput((prevState) => {
    //   return { ...prevState, entredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // SetUserInput({
    //   ...userInput,
    //   entredAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, entredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // SetUserInput({
    //   ...userInput,
    //   entredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, entredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
