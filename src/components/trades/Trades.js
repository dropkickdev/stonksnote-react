import { useState, useEffect } from "react"
import { NavLink, Link, useRouteMatch, useParams } from "react-router-dom"
import Sidebar from "../../templates/partials/sidebars"
import UserTemplate from "../../templates/layouts/UserTemplate"

import con from "../../app/utils"



export const TradeList = () => {
    const [state, setState] = useState({})
    const {tab} = useParams()

    useEffect(() => {
        // Get data here
    }, [])

    // switch(tab) {
    //     case 'active':
    //         const title = <h1></h1>
    // }

    let title = ''
    switch(tab) {
        case 'active':
            title = <h1>Active Trades</h1>
            break
        case 'gain':
            title = <h1>Gained Trades</h1>
            break
        case 'loss':
            title = <h1>Losing Trades</h1>
            break
        default:
        title = <h1>All Trades</h1>
    }
    if(tab) {
    }
    else {
    }

    return (
        <UserTemplate>

            <Sidebar />

            <main id={'main'} className={'px-3 px-md-5 pt-5'}>
                {title}
                <nav>
                    <ul className="nav nav-pills bg-links">
                        <li className="nav-item">
                            <NavLink to={`/trades`} className="nav-link" aria-current="page" exact>All Trades</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/trades/active`} className="nav-link" aria-current="page">Active</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/trades/gain`} className="nav-link" aria-current="page">Gain</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/trades/loss`} className="nav-link" aria-current="page">Loss</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="listing">
                    <ul className={'nolist'}>
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>Buy/Sell</th>
                                    <th>Shares</th>
                                    <th>Gain/Loss</th>
                                    <th>Bought</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TradeEntry />
                                <TradeEntry />
                                <TradeEntry />
                                <TradeEntry />
                                <TradeEntry />
                                <TradeEntry />
                            </tbody>
                        </table>
                    </ul>
                </div>
            </main>
        </UserTemplate>
    )
}


export const TradeEntry = props => {
    return (
        <>
            <tr>
                <td className={'stock'}>ABC</td>
                <td className={'buysell'}>12.00 / 13.00</td>
                <td className={'shares'}>12,000 shares</td>
                <td className={'gainloss'}>1,500.00</td>
                {/*<td className={'notes'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium corporis culpa cupiditate ex fugit labore laboriosam libero, perspiciatis quae quaerat quibusdam saepe sint unde vel. Consequuntur cupiditate nisi quae.</td>*/}
                <td className={'date'}>Mar 03, 2021</td>
                <td className={'action'}>
                    <button className="btn btn-primary btn-sm">Sell stock</button>
                </td>
            </tr>
            <tr>
                <td className={'stock'}>SHIFTY</td>
                <td className={'buysell'}>12.00 / 134543.00</td>
                <td className={'shares'}>15345432,000 shares</td>
                <td className={'gainloss'}>1,523,543,500.00</td>
                {/*<td className={'notes'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium corporis culpa cupiditate ex fugit labore laboriosam libero, perspiciatis quae quaerat quibusdam saepe sint unde vel. Consequuntur cupiditate nisi quae.</td>*/}
                <td className={'date'}>Mar 03, 2021</td>
                <td className={'action'}>
                    <button className="btn btn-primary btn-sm">Sell stock</button>
                </td>
            </tr>
            {/*
            <li>
                <div className={'name'}>ABC</div>
                <div className={'buy'}>12.00 / 13.00</div>
                <div className={'shares'}>12,000 shares</div>
                <div className={'gainloss'}>1.500.00</div>
                <div className={'notes'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cumque debitis facere labore minus praesentium quisquam vitae voluptatem! Accusantium alias atque dolor harum ipsam neque possimus quisquam sapiente voluptas voluptatem.</div>
                <div className="date text-center">Mar 03, 2021</div>
                <div className={'action text-center'}>
                    <button className="btn btn-primary btn-sm">Sell stock</button>
                </div>
            </li>
            <li>
                <div className={'name'}>SHIFTY</div>
                <div className={'buy'}>12.00 / 13.00</div>
                <div className={'shares'}>12,000 shares</div>
                <div className={'gainloss'}>1.500.00</div>
                <div className={'notes'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cumque debitis facere labore minus praesentium quisquam vitae voluptatem! Accusantium alias atque dolor harum ipsam neque possimus quisquam sapiente voluptas voluptatem.</div>
                <div className="date text-center">Mar 03, 2021</div>
                <div className={'action text-center'}>
                    <button className="btn btn-primary btn-sm">Sell stock</button>
                </div>
            </li>
            */}
        </>
    )
}