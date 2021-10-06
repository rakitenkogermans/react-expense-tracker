import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.scss'
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
    const [filteredYer, setFilteredYear] = useState('2021');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log('expenses.js');
        console.log(selectedYear);
    }
    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selYear={filteredYer} onFilterChange={filterChangeHandler}/>
                <ExpenseItem
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date}
                />
                <ExpenseItem
                    title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date}
                />
                <ExpenseItem
                    title={props.expenses[2].title}
                    amount={props.expenses[2].amount}
                    date={props.expenses[2].date}
                />
                <ExpenseItem
                    title={props.expenses[3].title}
                    amount={props.expenses[3].amount}
                    date={props.expenses[3].date}
                />
            </Card>
        </div>
    );
}

export default Expenses;
