import React,{useContext} from 'react'
import './IncomeEx.css';
import {trans} from './GlobalProvider.js'



function IncomeEx() {
    const {total} = useContext(trans)
    const {extotal} = useContext(trans)
    return (
        <div className="IncomeEx-main">
            <div className="Income">INCOME <br /><span className="Income-Amount">${total.toFixed(2)}</span></div>
    <div className="Expense">EXPENSE <br /><span className="Expense-Amount">${extotal.toFixed(2)}</span></div>
        </div>
    )
}

export default IncomeEx
