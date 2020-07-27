import React,{useContext} from 'react';
import Heading from './Heading.js';
import './Expense.css';
import Balance from './Balance.js'
import IncomeEx from './IncomeEx.js'
import Transactions from './Transactions.js';
import NewTransaction from './NewTransaction.js';
import {GlobalProvider} from './GlobalProvider.js';
import transaction from './GlobalProvider.js'

function App() {
  // const myTransaction = useContext(Transaction)
  return (
    <div className="Expense-body">
      <GlobalProvider>
      <Heading />
      <Balance />
      <IncomeEx />
      
      <Transactions /> 
      <NewTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
