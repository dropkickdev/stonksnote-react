import './App.css'
import { useSelector, useDispatch } from "react-redux"
import { Route } from 'react-router-dom'

import s from "./app/settings/settings"
import GuestTemplate from "./templates/layouts/GuestTemplate"
import { login, logout } from "./app/redux/store"
import Register from "./components/authentication/Register"
import Login from "./components/authentication/Login"
import AuthRoutes, { FooRoutes } from "./components/authentication/routes"


function App() {
    const {auth} = useSelector(state => state)
    const dispatch = useDispatch()

    const switchauth = () => {
        dispatch(login({
            display: 'fooman',
            email: 'master@gmail.com'
        }))
    }

    const loggingout = () => {
        dispatch(logout())
    }

    return (
        <>
            <div className="App">

                <Route path={''} component={AuthRoutes} />
                <Route path={''} component={FooRoutes} />

                {/*
                <GuestTemplate>
                    <h1>Hello world</h1>
                    <p className="h1">This is big too.</p>
                    <p>{s.MESSAGE}</p>
                    <p><button className={'btn btn-primary'} onClick={switchauth}>Login</button></p>
                    <p><button className={'btn btn-secondary'} onClick={loggingout}>Logout</button></p>
                    <p>{auth.display}</p>
                </GuestTemplate>
                */}
            </div>
        </>
    );
}

export default App;
