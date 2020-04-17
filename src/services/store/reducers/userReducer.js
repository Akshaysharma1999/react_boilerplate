import {ERROR,SUCCESS,LOG_IN} from '../actions/types'

const INITIAL_STATE={
    errors:{},
    success:{},
    user_data:{},
    isLogedIn:false
}

export default (state=INITIAL_STATE,action)=>{
    if(action.type===ERROR)
    {    
       return {...state,errors:action.payload,success:{}}
    }
    else if(action.type===SUCCESS)
    {
        return{...state,success:action.payload,errors:{}}
    }
    else if(action.type===LOG_IN)
    {               
        return{...state,user_data:action.payload,errors:{},isLogedIn:true}
    }
    else
    {      
       return {...state}
    }
}