import React from 'react'
import {Button} from 'semantic-ui-react'

export default (props) => {
        return (<Button color={props.color||'teal'} fluid={props.fluid||false} size={props.size||'large'}>{props.label}</Button>)
}
