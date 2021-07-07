import {useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css';

const names = ['hey','hi','huilo']

function ExpenseItem(props){

    const [title,setTitle] = useState(props.title);
    const clicked = () => {
        setTitle(names[Math.floor(Math.random()*3)])
        console.log(title)
        
    }
    return (
        <Card className='expense-item'>
             <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        <button onClick={clicked} >Change Item</button>
            </Card>
    )
}

export default ExpenseItem;