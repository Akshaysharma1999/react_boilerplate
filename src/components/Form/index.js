import React from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment} from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import renderFormInput from './renderFormInput'
import renderButton from '../Button'
import renderRequestError from './renderRequestError'

let validate

class LoginForm extends React.Component {  
    constructor(props)
    {
        super(props)      
        validate = this.props.validate      
    }

    onSubmit = (formvalues) => {
        // console.log(formvalues)
        // this.props.logIn(formvalues)
        this.props.onSubmit(formvalues)
    }
   
    renderFields = ()=>{
        return this.props.data.map((field)=>{
             return(               
                <Field name={field.name} as={Form.Input} component={renderFormInput} icon={field.icon} label={field.label} placeholder={field.placeholder} type={field.type}></Field>        
                  )
        })       
    }

    render() {
        console.log(this.props.action)
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                        {renderRequestError(this.props)}
                    <Header as='h2' color='teal' textAlign='center'>
                        <Icon name={this.props.formHeader.icon} /> {this.props.formHeader.label}
                    </Header>
                    <Form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    <Segment textAlign="left">
                        {this.renderFields()}  
                    </Segment>
                        {renderButton({label:this.props.button.label ,color:'teal',size:'large',fluid:true})}
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = (state)=>{
    // console.log(state)   
    return{requestErrors:state.user.errors}
}

export default connect(mapStateToProps, {})( reduxForm({ form: 'LoginForm', validate })(LoginForm))
