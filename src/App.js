import './App.css'
import { useSelector, useDispatch } from "react-redux"
import { Route } from 'react-router-dom'

import AuthRoutes, { FooRoutes } from "./components/authentication/routes"
import HomePage from "./components/Home"
import { history } from "./index"


function App() {
    const {site} = useSelector(state => state)
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
