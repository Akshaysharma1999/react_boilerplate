import React from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment, Input } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { logIn } from '../../actions'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {

    renderErrorMessage = ({ error, touched }) => {
        if (error && touched) {
            return { content: error, pointing: 'below' }
        }
        else {
            return false
        }
    }

    renderInput = ({ input, meta, placeholder, label, type, icon }) => {
        // console.log(meta)
        return (
            <Form.Field >
                <label left>{label}</label>
                <Form.Input error={this.renderErrorMessage(meta)}
                    {...input}
                    icon={icon}
                    iconPosition='left'
                    type={type}
                    onChange={input.onChange}
                    value={input.value} placeholder={placeholder} />
                {/* {this.renderErrorMessage(meta)} */}
            </Form.Field>
        )
    }

    renderButton = () => {
        return (<Button color='teal' fluid size='large'>Login</Button>)
    }

    onSubmit = (formvalues) => {
        console.log(formvalues)
        this.props.logIn(formvalues)
    }

    renderRequestError = () => {
        console.log(this.props.requestErrors)
        if(this.props.requestErrors.message)
        {
            return (
                < Message negative >
                    <Message.Header>Log In Error</Message.Header>
                    <p>{this.props.requestErrors.message}</p>
                </Message >
            )
        }
    }

    render() {
        // console.log(this.props)
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    {this.renderRequestError()}
                    <Header as='h2' color='teal' textAlign='center'>
                        <Icon name="signup" /> Log-in to your account
                    </Header>
                    <Form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                        <Segment textAlign="left">
                            <Field name="username" as={Form.Input} component={this.renderInput} icon="user" label="User Name" placeholder="Enter email-id" type="email"></Field>
                            <Field name="password" component={this.renderInput} icon="key" label="Password" placeholder="Enter password" type="password"></Field>
                        </Segment>
                        {this.renderButton()}
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

const validate = formValues => {
    const errors = {}

    if (!formValues.username) {
        errors.username = 'You must enter a username'
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.username)) {
        errors.username = 'Email is not valid'
    }

    if (!formValues.password) {
        errors.password = 'You must enter a password'
    }

    return errors
}

export default connect(mapStateToProps, { logIn })( reduxForm({ form: 'LoginForm', validate })(LoginForm))
