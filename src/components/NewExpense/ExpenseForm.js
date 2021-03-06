import React, {useState} from 'react';
import './ExpenseForm.scss';

const ExpenseForm = (props) => {
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState(new Date().toISOString().substr(0, 10));

    const titleChangeHandler = event => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // });

        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHadler = event => {
      setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        props.onCloseForm();

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate(new Date().toISOString().substr(0, 10));
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2021-01-01" max="2025-12-31" onChange={dateChangeHadler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCloseForm}>Close</button>
                <button type="submit" disabled={enteredTitle.length === 0 || enteredAmount.length === 0 || enteredDate.length === 0}>Add expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
