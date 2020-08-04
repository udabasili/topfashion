import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

/*
 * This prevents unauthenticated user from accessing certain routes
 * @param {object} Component - the component that loads if user is authenticated
 * @param {object} currentUser - remove item from cart by one unit


 */
 

const PrivateRoute = ({ component: Component, currentUser, ...rest }) => {    
    console.log(typeof Component, typeof currentUser);
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
 
PrivateRoute.propTypes = {
    currentUser: PropTypes.object.isRequired,
    Component: PropTypes.object.isRequired
}

export default connect(mapStateToProps , null)(PrivateRoute)


