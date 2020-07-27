import React,{useContext} from 'react'
import './Expense.css';
import GlobalProvider from './GlobalProvider.js';
import {trans} from './GlobalProvider'

function Balance() {
    const {balance}=useContext(trans)
    return (
        <div className="current-balance">
            YOUR BALANCE<br />
            <span>${balance.toFixed(2)}</span>
        </div>
    )
}

export default Balance
