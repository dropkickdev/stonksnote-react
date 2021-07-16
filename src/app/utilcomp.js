import { useEffect, useState } from 'react'
import { useSelector, useStore } from "react-redux"
import { Redirect, Route, useLocation } from 'react-router-dom'

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


export const IF = ({condition, children}) => {
    return condition ? <>{children}</> : null
}


export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}


export const ScrollToTopOnMount = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}


export const ScrollToStart = () => (
    <ScrollToTop />
)

export const SearchForm = ({callback, className, ...rest}) => {
    const [value, setValue] = useState('')

    const searchHandler = e => {
        setValue(e.target.value)
    };

    const submitHandler = e => {
        e.preventDefault()
        callback(value)
    };

    className = className || ''
    return (
        <form onSubmit={submitHandler} className={'search-inline'}
              style={{marginTop: '-20px'}}>
            <div className="icon-prepend">
                <span className="material-icons">search</span>
                <input onChange={searchHandler} value={value}
                       type="search" className={`form-control ${className}`} {...rest} />
            </div>
        </form>
    )
};
