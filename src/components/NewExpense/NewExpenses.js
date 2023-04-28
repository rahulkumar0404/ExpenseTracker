import './NewExpense.css'
import ExpenseForm from './Expenseform.js'
import { useState } from 'react'
const NewExpense = (props) => {
    const [isEditing , setEditing]= useState(false)
    const saveExpenseDataHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id: Math.random().toString()
        } 
        props.onAddExpense(expenseData);
        setEditing(false)
    }
    const startEditingHandler = () => {
        setEditing(true)
    }
    const stopEditingHandler = () => {
        setEditing(false)
    }
    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expenses</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseDate={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                /> 
            )}
                     
        </div>
    )
}

export default NewExpense;