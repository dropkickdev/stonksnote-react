// import { Switch, Route, useRouteMatch } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
//
// import s from "../../app/settings/settings"
import { TradeList } from "./Trades"
//
//
// const TradeRoutes = () => {
//     const match = useRouteMatch()
//     return (
//         <Switch>
//             <Route path={`${match.url}/:tab`} component={TradeList} />
//             <Route path={`${match.url}`} component={TradeList} />
//         </Switch>
//     )
// }

const traderoutes = [
    {path: '/trades', component: TradeList, is_private: true},
]


export default traderoutes