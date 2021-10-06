import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import './Expenses.scss'
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYer, setFilteredYear] = useState('All');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log('expenses.js');
        console.log(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return filteredYer === 'All' ? true : expense.date.getFullYear().toString() === filteredYer;
    });


    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selYear={filteredYer} onFilterChange={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;
