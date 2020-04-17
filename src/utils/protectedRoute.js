import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'

class ProtectedRoute extends React.Component {
    render()
    {
        if(this.props.user.isLogedIn)
        {
            return(
               <Route
                {...this.props}
                render={(params)=>{
                    return<this.props.component {...params}/>
                }}
               />
            )
        }
        else
        {
            // console.log("here")
            return(
                <Redirect
                to={{
                    pathname: "/",
                    state: {
                    from: this.props.location
                    }
                }}
                />
            )
        }      
    } 
}

const mapStateToProps = (state) => {
  console.log(state)
  return state
}

export default connect(mapStateToProps,{})(ProtectedRoute)