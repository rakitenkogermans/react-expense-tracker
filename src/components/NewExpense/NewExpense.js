import React, {useState} from "react";
import './NewExpense.scss';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString().split('.')[1]
        };
        props.onAddExpenseData(expenseData);
    }
    
    const showFormHandler = () => {
        setShowForm(true);
    }

    const closeFormHandler = () => {
        setShowForm(false);
    }

    return (
        <div className="new-expense">
            {!showForm && <button onClick={showFormHandler}>Add new expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCloseForm={closeFormHandler}/>}
        </div>
    );
};

export default NewExpense;
