import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { NavLink, Link, useRouteMatch, useParams } from "react-router-dom"

import UserTemplate from "../../templates/layouts/UserTemplate"
import { HeaderActions } from "../../templates/partials/partials"


export const TradeList = () => {
    const [state, setState] = useState({currpage: 1})
    const {tab} = useParams()
    const {site} = useSelector(state => state)

    useEffect(() => {
        // Get data here
    }, [])

    // switch(tab) {
    //     case 'active':
    //         const title = <h1></h1>
    // }

    let title = ''
    let table_title = ''
    switch(tab) {
        case 'active':
            title = <h1>Trades: <span className={'nobold'}>Active</span></h1>
            table_title = 'Currently bought stocks'
            break
        case 'gain':
            title = <h1>Trades: <span className={'nobold'}>Won</span></h1>
            table_title = 'Stocks you earned from'
            break
        case 'loss':
            title = <h1>Trades: <span className={'nobold'}>Lost</span></h1>
            table_title = 'Stocks you lost from'
            break
        default:
            title = <h1>Trades</h1>
            table_title = 'All trades'
    }

    return (
        <UserTemplate page={'trades-page'}>
            <header id="header">
                <div className="text">
                    <h1>{title}</h1>
                    <p>This is a subhead</p>
                </div>
                <HeaderActions type={ 'trade_mark' } />
            </header>
            <div id={'content'}>
                <div className="page-options">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <NavLink to={`/trades`} className="nav-link" aria-current="page" exact>All Trades</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/trades/active`} className="nav-link" aria-current="page">Active</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/trades/gain`} className="nav-link" aria-current="page">Won</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/trades/loss`} className="nav-link" aria-current="page">Lost</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="listing">
                    <header className={'mt-5'}>
                        <h2>{table_title}</h2>
                    </header>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope={'col'}><Link to={''}>Ticket</Link></th>
                                <th scope={'col'}><Link to={''}>Shares</Link></th>
                                <th scope={'col'}><Link to={''}>Buy</Link></th>
                                <th scope={'col'}><Link to={''}>Sell</Link></th>
                                <th scope={'col'}><Link to={''}>Min sell</Link></th>
                                <th scope={'col'}><Link to={''}>Gain/Loss</Link></th>
                                <th scope={'col'}><Link to={''}>Total</Link></th>
                                <th scope={'col'}><Link to={''}>Bought</Link></th>
                                <th scope={'col'}><Link to={''}>Sold</Link></th>
                                <th scope={'col'}>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TradeEntry />
                            <TradeEntry />
                            <TradeEntry />
                            <TradeEntry />
                            <TradeEntry />
                            <TradeEntry />
                            <TradeEntry />
                            <TradeEntry />
                            <TradeEntry />
                            <TradeEntry />
                            <TradeEntry />
                            <TradeEntry />
                            <TradeEntry />
                        </tbody>
                    </table>
                </div>
            </div>
            <footer id="footer">Footer</footer>
        </UserTemplate>
    )
}


export const TradeEntry = props => {
    return (
        <>
            <tr>
                <th scope={'row'} className={'symbol'}>ABC</th>
                <td className={'shares'}>12,000</td>
                <td className={'buy focus-buy text-bold fitwidth clr-buy-darker'}>12.00</td>
                <td className={'sell focus-sell text-bold fitwidth clr-sell-darker'}>13.00</td>
                <td className={'minsell text-bold'}>&gt; 12.6</td>
                <td className={'gainloss'}><span className={'clr-light'}>Php</span> 1,500.00</td>
                <td className={'total'}><span className={'clr-light'}>Php</span> 99,234.00</td>
                <td className={'bought'}>2021-03-06</td>
                <td className={'sold'}>2021-03-06</td>
                <td className={'action d-flex'}>
                    <button className="btn btn-outline-secondary btn-sm">More</button>
                    <button className="btn btn-primary btn-sm ms-2"><span className="material-icons clr-white me-2">done</span>Sold</button>
                </td>
            </tr>
        </>
    )
}


export const MarkModal = () => {
    return (
        <div className="modal" id="markModalTrigger" tabIndex="-1"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    {/*
                    <header className="modal-header">
                        <h5 className="modal-title"
                            id="exampleModalLabel">Modal title</h5>
                    </header>
                    */}
                    <div className="modal-body">
                        <p>Data here</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary">Mark it</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
