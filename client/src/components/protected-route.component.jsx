 import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

 

const PrivateRoute = ({ component: Component, currentUser, ...rest }) => {    
    return (
    <Route {...rest} render={(props) => (
       localStorage.getItem("validator") && currentUser
        ? 
        <div>
            <Component {...props} />
        </div>
        : <Redirect to={{
            pathname:"/auth",
            state:{from: props.location}
            }}
        />
    )} />
    )
}
const mapStateToProps = (state) =>({
    currentUser:state.user.currentUser
 })
 


export default connect(mapStateToProps , null)(PrivateRoute)


