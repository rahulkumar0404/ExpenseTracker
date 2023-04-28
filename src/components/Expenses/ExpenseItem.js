import './ExpenseItem.css';
import Card from '../UI/Card.js'
import ExpenseDate from './ExpenseDate'; 
// import Text from 'react-native'
const ExpenseItem = (props) => {
    // const [title, setTitle] = useState(props.title);
    // const clickHandler = () => {
    //    setTitle('Updated!')
    // }
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item_description">
                <h2>{props.title}</h2>
                <div className="expense-item_price">{'\u20B9'}{props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    ) 
}

export default ExpenseItem;