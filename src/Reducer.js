import React from 'react'
const Reducer = (state,action)=>
{
    switch(action.type)
    {
        case "ADD_TRANSACTION":
            return([...state,action.payload])
        case "DELETE_TRANSACTION":
            return(state.filter((item)=>item.id!==action.payload))
    }
}
export default Reducer;