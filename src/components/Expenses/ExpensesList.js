import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.scss';

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return (
            <h2 className="expenses-list__fallback">Not found expenses!</h2>
        )
    }

    return (
        <ul className="expenses-list">
            {props.items.map(el => {
                return (
                    <ExpenseItem
                        key={el.id}
                        title={el.title}
                        amount={el.amount}
                        date={el.date}
                    />
                );
            })}
        </ul>
    );
};

export default ExpensesList;
