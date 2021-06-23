import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Register from "./Register"
import Login, { FooPage } from "./Login"
import s from "../../app/settings/settings"



const AuthRoutes = () => {
    return (
        <Switch>
            <Route path={`${s.REGISTER_URL}`} component={Register} />
            <Route path={`${s.LOGIN_URL}`} component={Login} />
        </Switch>
    )
}

export const FooRoutes = () => {
    return (
        <Switch>
            <Route path={`/foo`} component={FooPage} />
        </Switch>
    )
}


export default AuthRoutes