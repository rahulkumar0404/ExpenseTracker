
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'
import Card from '../UI/Card.js';
import { useState } from 'react';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState(''); 


    const filterChangeHandler = (selectYear) => {
        setFilterYear(selectYear)
    }


    const filterExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear
    })

    
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filterExpenses}/>
                <ExpenseList items={filterExpenses} />
                       
            </Card>                
        </div>
        
    )    
}

export default Expenses;