import {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    
    const [enteredtitle , setEnteredtitle] = useState('')
    const [enteredamount, setEnteredAmount] = useState('')
    const [enterDate, setEnteredDate] = useState('');
    const titleHandler = (event) => {
        setEnteredtitle(event.target.value);
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    }
    const datechangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }
    
/*
    The other form of useState
    const [userInput, setUserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enterDate: ''
    });

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enterDate: event.target.value,
        })
    }

    const titleChangeHandler = (event) =>{
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        setUserInput((prevState) => { 
           return { ...prevState,enteredTitle: event.target.value}
        })
    }
*/
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseDate = {
            title : enteredtitle,
            amount : +enteredamount,
            date : new Date(enterDate)
        }
        props.onSaveExpenseDate(expenseDate);
        setEnteredtitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleHandler} value={enteredtitle}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredamount}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2023-12-31' onChange={datechangeHandler} value={enterDate}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;