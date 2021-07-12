import { useEffect } from 'react'
import { useSelector, useStore } from "react-redux"
import { Redirect, Route } from 'react-router-dom'

import conutils from "./utils"
import s from "./settings/settings"


export const PrivateRoute = ({component: Component, ...rest}) => {
    const {auth} = useSelector(state => state)
    return (
        <Route {...rest} render={props => {
            return auth.is_auth && <Component {...props} /> || <Redirect to={ s.REDIRECT_PRIVATE_ONLY } />
        }} />
    )
};


export const PublicRoute = ({component: Component, ...rest}) => {
    const {auth} = useSelector(state => state)
    return (
        <Route {...rest} render={props => {
            return !auth.is_auth && <Component {...props} /> || <Redirect to={ s.REDIRECT_PUBLIC_ONLY } />
        }} />
    )
};
