import { Route } from 'react-router-dom'

import HomePage from "../components/Home"
import authroutes, {fooroutes} from "../components/authentication/routes"
import traderoutes from "../components/trades/routes"


export const private_routes = [
    ...traderoutes,
]


export const public_routes = [
    ...authroutes
]