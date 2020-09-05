import React, { useContext} from 'react'
import './Transactions.css'
import {trans} from './GlobalProvider.js'


function Transactionlist({uniqueId,text , amount}) {
    
    const {deleteTransaction} = useContext(trans)
   const deleteList = ()=>
   {
       deleteTransaction({uniqueId,amount})     
   } 
   return (
    <li className={amount>=0?"income":"expense"}>{text}<span className="amountt">{amount}<span className="Cross" onClick={deleteList}>X</span></span>
    </li>
    )
}

export default Transactionlist
