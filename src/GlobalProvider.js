import React,{createContext,useReducer,useEffect,useState} from 'react'
import Reducer from './Reducer.js'
import axios from 'axios'

let initialState=[
    // {id:2,text:"bag",amount:100}, {id:1,text:"shoes",amount:300}

]

const income=0.00
const expense=0.00
const totalBalance = 0.00
 export const trans=createContext(initialState)
   
export const  GlobalProvider=({children})=>{
    let [total,setTotal]=useState(income)
    let [extotal,setExTotal]=useState(expense)
    let [balance ,setBalance] = useState(totalBalance)
    let data =[]
    const [state , dispatch] = useReducer(Reducer,initialState)
    useEffect(() => {
        axios.get('http://localhost:8888/api/transactions')
             .then((res)=>{data=res.data;dispatch({
                 type:"GET_TRANSACTION",
                 payload:res.data
             }) })
             .then(()=>{
                data.map((item)=>{item.amount>0?setTotal(total+=item.amount):setExTotal(extotal-=item.amount)}) 
             })
             .then(()=>{data.map((item)=>{item.amount>0?setBalance(balance+=item.amount):setBalance(balance+=item.amount)})})
             
    }, [])
    
    // useEffect(() => {
    //         console.log(state)
    // }, axios.get())
    
    
    const addTransaction=(trans)=>
    {
        trans={"uniqueId":trans.uniqueId,"text":trans.text,"amount":parseInt(trans.amount)}
        console.log(trans)
        // axios.post('http://localhost:8888/api/addtransactions',body
        // )
        axios({
            method:'post',
            url:'http://localhost:8888/api/addtransactions',
            headers:{"Content-Type":"application/json"},
            data:{trans}
        }
        )
        dispatch(
            {
                type:"ADD_TRANSACTION",
                payload:trans
            }
        )
    }
    
    const calculateIncome= (trans) =>
    {
        console.log(state)
    
        console.log(trans.amount)
        setTotal((parseFloat(trans.amount)+parseFloat(total)))
        setBalance(balance+parseFloat(trans.amount))
       
    }
    const updateStates=(amount)=>
    {
        if(amount>0)
        {
            setTotal(total-amount)
            setBalance(balance-amount)
        }
        else if(amount<0)
        {
            setExTotal(extotal-amount)
            setBalance(balance-amount)
        }
    }
    const deleteTransaction=({uniqueId,amount})=>
    {
        console.log(uniqueId)
        axios({
            method:'delete',
            url:`http://localhost:8888/api/deletetransactions/${uniqueId}`,
            headers:{"Content-Type":"application/json"},
          
        })
        dispatch({
            type:"DELETE_TRANSACTION",
            payload: uniqueId
        })
        updateStates(amount)
    }
    const calculateExpense= (trans) =>
    {
        
         setExTotal((parseFloat(trans.amount)-parseFloat(extotal)))
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
             calculateExpense,
             deleteTransaction
        }
    }>
        
        {children}    
    </trans.Provider>);

}









