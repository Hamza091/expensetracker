import React,{useContext} from 'react'
import './Transactions.css'
import Transactionlist from './Transactionlist.js'
import {GlobalProvider} from './GlobalProvider.js';
import {trans} from './GlobalProvider.js';

function Transactions() {
  console.log(GlobalProvider) 
  const {transactions} = useContext(trans)
  console.log(transactions)

    return (
      
        <div className="Transactions">
            <h4>History </h4>
             <ul className="list-items">
               { transactions.map((list)=>(<Transactionlist key={list.id} id={list.id} text={list.text} amount={list.amount}/>))}
               
            </ul>
        </div>
    )
}

export default Transactions
