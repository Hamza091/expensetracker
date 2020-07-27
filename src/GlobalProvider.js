import React,{createContext,useReducer,useContext,useState} from 'react'
import Reducer from './Reducer.js'


const initialState=[
     {id:2,text:"bag",amount:100}, {id:1,text:"shoes",amount:300}
]
const income=0.00.toFixed(2)
const expense=0.00.toFixed(2)
const totalBalance = 0.00
 export const trans=createContext(initialState)
   
export const  GlobalProvider=({children})=>{
    const [total,setTotal]=useState(income)
    const [extotal,setExTotal]=useState(expense)
    const [balance ,setBalance] = useState(totalBalance)
    const [state , dispatch] = useReducer(Reducer,initialState)
    
    const addTransaction=(trans)=>
    {
        dispatch({
            type:"ADD_TRANSACTION",
            payload:trans
        })
    }
    
    const calculateIncome= (trans) =>
    {
        console.log(trans.amount)
        setTotal((parseFloat(trans.amount)+parseFloat(total)).toFixed(2))
        setBalance(balance+parseFloat(trans.amount))
    }
    const calculateExpense= (trans) =>
    {
        
         setExTotal((parseFloat(trans.amount)+parseFloat(extotal)).toFixed(2))
         setBalance(balance+parseFloat(trans.amount))
         console.log(balance)
    }
    return(<trans.Provider value={
        {
            transactions:state, 
            addTransaction,
            calculateIncome,
             total,
             extotal,
             balance,
             calculateExpense    
        }
    }>
        
        {children}    
    </trans.Provider>);

}









