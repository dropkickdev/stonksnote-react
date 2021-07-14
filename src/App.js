import './App.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Route, Switch } from 'react-router-dom'

import conutils from "./app/utils"
import { public_routes, private_routes } from "./app/routes"
import 'bootstrap/dist/js/bootstrap.bundle'
import { set_access_token, reload_user_data, logout } from "./app/redux/slices"
import { api_reload_user_data } from "./app/api/auth-account"
import HomePage from "./components/Home"
import { FooPage } from "./components/authentication/Login"
import { PrivateRoute, PublicRoute } from "./app/utilcomp"
import { TradeList } from "./components/trades/Trades"
import Login, { Logout } from "./components/authentication/Login"
import Register from "./components/authentication/Register"
import { AccountPage, PasswordPage } from "./components/trades/Account"
import { CollectionPage, MarkPage, MarkAddPage } from "./components/trades/Collection"


function App() {
    const {auth, site} = useSelector(state => state)
    const dispatch = useDispatch()
    const layout_type = auth.is_auth && 'starter-layout' || 'guest-layout'

    useEffect(() => {
        // Load access_token when if exists upon loading
        const access_token = localStorage.getItem('access_token')
        if(access_token) {
            dispatch(set_access_token(access_token))
        }
    }, [])
    useEffect(() => {
        if(auth.access_token && !auth.email) {
            // console.log('[State access_token]', auth.access_token)
            api_reload_user_data()
                .then(res => {
                    dispatch(reload_user_data(res.data))
                    // console.log('[Data reloaded]')
                })
                .catch(err => {
                    dispatch(logout())
                })
        }
        // console.table(auth)
    }, [auth])

    return (
        <>
            <div id={'app'} className={`${layout_type} ${site.theme}`}>

                <Switch>
                    <Route path={'/'} component={HomePage} exact />
                    <Route path={'/foo'} component={FooPage} />

                    <PrivateRoute path={'/account'} component={AccountPage} exact />
                    <PrivateRoute path={'/account/password'} component={PasswordPage} />

                    <PrivateRoute path={'/trades'} component={TradeList} exact />
                    <PrivateRoute path={'/trades/:tab'} component={TradeList} />
                    <PrivateRoute path={'/collections'} component={CollectionPage} exact />
                    <PrivateRoute path={'/marks'} component={MarkPage} exact />
                    <PrivateRoute path={'/marks/add'} component={MarkAddPage} />

                    <PublicRoute path={'/auth/register'} component={Register} />
                    <PublicRoute path={'/auth/login'} component={Login} />
                    <PrivateRoute path={'/auth/logout'} component={Logout} />
                </Switch>

            </div>
        </>
    );
}

export default App;
