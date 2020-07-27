import React, { useContext} from 'react'
import './Transactions.css'
import {trans} from './GlobalProvider.js'
import GlobalProvider from './GlobalProvider.js'

function Transactionlist({id,text , amount}) {
    
    const {deleteTransaction} = useContext(trans)
   const deleteList = ()=>
   {
       deleteTransaction(id)
      
       
   } 
   return (
    <li className={amount>=0?"income":"expense"}>{text}<span className="amountt">{amount}<span className="Cross" onClick={deleteList}>X</span></span>
    </li>
    )
}

export default Transactionlist
