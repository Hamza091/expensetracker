import React,{useState,useContext,useReducer} from 'react'
import './NewTransaction.css'
import {GlobalProvider} from './GlobalProvider.js';
import {trans} from './GlobalProvider.js';


function NewTransaction() {

    const [text , setText] = useState('')
    const [amount , setAmount] = useState(0) 
    const {addTransaction,calculateIncome,calculateExpense}=useContext(trans)
      
  
    const callTransaction=()=>
    {
        if(text!=""&&amount!=""&&amount!=0)
        {
        const id = Math.floor(Math.random()*1000)+2
      
        addTransaction({id,text,amount})
        // calculateIncome(amount)

        console.log(typeof(parseFloat(amount)))
        if(parseFloat(amount)>0)
        {
            console.log(amount)
            calculateIncome({amount})
        }
        else if(parseFloat(amount)<0)
        {console.log(amount)
            calculateExpense({amount})
        }
        }
        
    
       setText("")
       setAmount("")
           
    }
    return (
        <div className="Transaction-body">
            <h2>Add new transaction</h2><br />
            <label className="text-label">Text</label><br />
            <input  className="text-input" value={text} onChange={(e)=>{setText(e.target.value)}} type="text" placeholder="Enter text here..."></input><br />
            <label className="amount-label">Amount<br /><span className="info">(negative - expense, positive - income)</span></label><br />
            <input className="number-input" type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter amount here.."></input><br />
            <button className="Transaction-button" onClick={callTransaction}>Add Transaction</button>
        </div>
       
    )
}

export default NewTransaction
