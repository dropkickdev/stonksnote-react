import './App.css'
import { useSelector, useDispatch } from "react-redux"
import { Route } from 'react-router-dom'

import { login, logout } from "./app/redux/store"
import AuthRoutes, { FooRoutes } from "./components/authentication/routes"
import HomePage from "./components/Home"
import { set_pageclass } from "./app/redux/slices"




function App() {
    const {auth, theme} = useSelector(state => state)
    const dispatch = useDispatch()

    /*
    const switchauth = () => {
        dispatch(login({
            display: 'fooman',
            email: 'master@gmail.com'
        }))
    }

    const loggingout = () => {
        dispatch(logout())
    }
    */

    return (
        <>
            <div id={'App'} className={`App ${theme.pageclass}`}>

                <Route path={'/'} component={HomePage} exact />
                <Route path={''} component={AuthRoutes} />
                <Route path={''} component={FooRoutes} />

                {/*
                <div>
                    <p><button className={'btn btn-primary'} onClick={switchauth}>Login</button></p>
                    <p><button className={'btn btn-secondary'} onClick={loggingout}>Logout</button></p>
                </div>
                */}
            </div>
        </>
    );
}

export default App;
