import React from 'react'
import './Transactions.css'

function Transactionlist({text , amount}) {
   
    return (
    <li className={amount>=0?"income":"expense"}>{text}<span className="amountt">{amount}</span></li>
    )
}

export default Transactionlist
