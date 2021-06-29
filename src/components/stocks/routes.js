import { Switch, Route, useRouteMatch } from 'react-router-dom'

import s from "../../app/settings/settings"
import { TradeList } from "./Trades"


const TradeRoutes = () => {
    const match = useRouteMatch()
    return (
        <Switch>
            <Route path={`${match.url}`} component={TradeList} />
        </Switch>
    )
}


export default TradeRoutes