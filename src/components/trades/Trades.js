import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { NavLink, Link, useRouteMatch, useParams } from "react-router-dom"

import Sidebar from "../../templates/partials/sidebars"
import UserTemplate from "../../templates/layouts/UserTemplate"

import conutils from "../../app/utils"



export const TradeList = () => {
    const [state, setState] = useState({currpage: 1})
    const {tab} = useParams()
    const {site} = useSelector(state => state)
    conutils.log(tab)

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
            title = <h1>Active</h1>
            break
        case 'gain':
            title = <h1>Gained</h1>
            break
        case 'loss':
            title = <h1>Losing</h1>
            break
        default:
            title = <h1>All Trades</h1>
    }

    return (
        <UserTemplate>
            <div id={'trades-content'}>

<header className={'post-header'}>
    {title}
</header>
<div className={'post-content'}>
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
                </tbody>
            </table>
        </ul>
    </div>
</div>

            </div>
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
