import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
const PrivateRoute = ({ component: Component, user, ...rest }) => {
 
    return (
        <Route {...rest} render={props => {
            return (
                user.auth
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )}} />
    )
}

export default connect(state => ({
    user: state.user
}))(PrivateRoute)