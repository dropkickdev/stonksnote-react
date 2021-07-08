import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Register from "./Register"
import Login, { Logout, FooPage } from "./Login"
import s from "../../app/settings/settings"



const authroutes = [
    {path: '/auth/register', component: Register},
    {path: '/auth/login', component: Login},
    {path: '/auth/logout', component: Logout}
]

export default authroutes