import React from 'react'
import {Form} from 'semantic-ui-react'

import renderErrorMessage from './renderErrorMessage'

export default  ({ input, meta, placeholder, label, type, icon }) => {
        // console.log(meta)
        return (
            <Form.Field >
                <label left>{label}</label>
                <Form.Input error={renderErrorMessage(meta)}
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