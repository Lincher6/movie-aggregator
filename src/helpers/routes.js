import React from 'react'
import {Route, Redirect} from "react-router-dom";

export const AuthRedirect = ({loggedInPath, children, user, ...rest}) => {
    return (
        <Route
            {...rest}
            render={() => {
                if (!user) {
                    return children
                }
                return <Redirect to={loggedInPath}/>
            }}
        />
    )
}

export const ProtectedRoute = ({children, user, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user) {
                    return children
                }
                return <Redirect to={{ pathname: 'signin', state: {from: location} }}/>
            }}
        />
    )
}