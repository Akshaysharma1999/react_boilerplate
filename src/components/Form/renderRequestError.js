import React from 'react'
import {Message} from 'semantic-ui-react'

export default (props) => {
        if(props.requestErrors.message)
        {
            return (
                < Message negative >
                    <Message.Header>Log In Error</Message.Header>
                    <p>{props.requestErrors.message}</p>
                </Message >
            )
        }
    }