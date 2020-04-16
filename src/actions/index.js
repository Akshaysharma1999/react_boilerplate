import history from '../history'
import {LOG_IN,ERROR,SUCCESS} from './types'
import api from '../services/api'

export const logIn = (formValues) =>{
    return async (dispatch, getState) => {
        // console.log(formValues)
        api.post('/register', {email:formValues.username,password:formValues.password})
            .then((response)=>{ 
                // console.log(response)
                localStorage.setItem('jwt', JSON.stringify(response.data.token))
                dispatch({ type: 'LOG_IN', payload: response.data })              
                history.push(`/`)              
            })
            .catch((error)=>{
                // console.log(error.request)
                // console.log(error.response)
                // console.log(error.message)
                dispatch({ type: ERROR, payload:{message:error.message}})       
            }) 
    }
}