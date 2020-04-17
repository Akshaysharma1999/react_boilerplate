import React from 'react'
import Form from '../../components/Form'
import {connect} from 'react-redux'

import validate from './validate'
import { logIn } from '../../services/store/actions'

let data = [{name:"username",icon:"user" ,label:"User Name" , placeholder:"Enter email-id",type:"email"},
            {name:"password",icon:"key" ,label:"Password" , placeholder:"Enter password",type:"password"}]

let formHeader = {label:"Log-in to your account",icon:"signup"}

let button = {label:"Login"}

class Login extends React.Component{

    onSubmit = (formValues)=>{
        // console.log(formValues)
        this.props.logIn(formValues)
    }

    render()
    {
        return(
           <Form data={data} formHeader={formHeader} button={button} validate={validate} onSubmit={this.onSubmit}/>
        )
    }
}

export default connect(null,{logIn})(Login)