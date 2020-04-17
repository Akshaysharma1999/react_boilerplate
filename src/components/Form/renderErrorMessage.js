import React from 'react'

export default ({ error, touched }) => {
        if (error && touched) {
            return { content: error, pointing: 'below' }
        }
        else {
            return false
        }
    }