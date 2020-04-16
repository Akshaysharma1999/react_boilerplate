import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'

import Login from './Auth/Login'
import Home from './Home'

class App extends React.Component
{
    render()
    {
        return(
            <div>
                <Router history={history}>               
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                </Switch>
                </Router>
           </div>
        )
    }
}

export default App