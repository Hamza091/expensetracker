import React from 'react'
const Reducer = (state,action)=>
{
    switch(action.type)
    {
        case "ADD_TRANSACTION":
            return([...state,action.payload])
    }
}
export default Reducer;