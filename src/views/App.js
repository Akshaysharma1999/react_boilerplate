import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'

import Login from './Login'
import Home from './Home'
import ProtectedPage from './ProtectedPage'
import ProtectedRoute from '../utils/protectedRoute'

class App extends React.Component
{
    render()
    {
        return(
            <div>           
                <Router history={history}>               
                <Switch>
                    <Route path="/" exact component={Home} />                 
                    <ProtectedRoute path="/secure" exact component={ProtectedPage} />
                    <Route path="/login" exact component={Login} />
                    <Route path="*" component={()=>"404 not found"} />
                </Switch>
                </Router>
           </div>
        )
    }
}

export default App