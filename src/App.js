import './App.css'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Route } from 'react-router-dom'

import con from "./app/utils"
import AuthRoutes, { FooRoutes } from "./components/authentication/routes"
import HomePage from "./components/Home"
import { set_access_token, reload_user_data, logout } from "./app/redux/slices"
import { api_reload_user_data } from "./app/api/auth-account"



function App() {
    const {site} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        // Load access_token when if exists upon loading
        const access_token = localStorage.getItem('access_token')
        if(access_token) {
            dispatch(set_access_token(access_token))
            api_reload_user_data()
                .then(res => {
                    dispatch(reload_user_data(res.data))
                    con.log('[Data reloaded]')
                })
                .catch(err => {
                    dispatch(logout())
                })
        }
    }, [])


    return (
        <>
            <div id={'app'} className={site.theme}>

                <Route path={'/'} component={HomePage} exact />
                <Route path={''} component={AuthRoutes} />
                <Route path={''} component={FooRoutes} />

            </div>
        </>
    );
}

export default App;
