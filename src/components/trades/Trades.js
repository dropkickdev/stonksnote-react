import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { NavLink, Link, useRouteMatch, useParams } from "react-router-dom"
import { Field, Form, Formik } from "formik"
import * as yup from 'yup'

import { ScrollToStart, SearchForm } from "../../app/utilcomp"
import UserTemplate from "../../templates/layouts/UserTemplate"
import { HeaderActions } from "../../templates/partials/partials"
import { api_mark_create } from "./api_trades"
import { SimpleInputHTML } from "../../templates/partials/forms"


export const TradeList = () => {
    const [state, setState] = useState({currpage: 1})
    const [search, setSearch] = useState('')
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

    const searchHandler = query => {
        // TODO: Handle the search query for Trades
        // TODO: Page for search results
        console.log(query)
    };


    return (
        <UserTemplate page={'trades-page'}>
            <ScrollToStart />
            <header id="header">
                <div className="text">
                    {title}
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

                <div className="listing mt-5">
                    <header className={'split-focus-left'}>
                        <h2>{table_title}</h2>
                        <SearchForm callback={searchHandler} placeholder={'Symbol'} maxlength={6} />
                    </header>
                    <TradeTable />
                </div>
            </div>
            <footer id="footer">Footer</footer>
        </UserTemplate>
    )
}

export const TradeTable = () => {
    const data = [
        {symbol: 'ABC', shares: '12,000', buy: '12.00', sell: '13.00', minsell: '12.6',
            gainloss: '1,500', currency: 'PHP', total: '99,432.00', bought: '2021-03-06',
            sold: '2021-03-06', id: 1},
        {symbol: 'ABC', shares: '12,000', buy: '12.00', sell: '13.00', minsell: '12.6',
            gainloss: '1,500', currency: 'PHP', total: '99,432.00', bought: '2021-03-06',
            sold: '2021-03-06', id: 2},
        {symbol: 'ABC', shares: '12,000', buy: '12.00', sell: '13.00', minsell: '12.6',
            gainloss: '1,500', currency: 'PHP', total: '99,432.00', bought: '2021-03-06',
            sold: '2021-03-06', id: 3},
        {symbol: 'ABC', shares: '12,000', buy: '12.00', sell: '13.00', minsell: '12.6',
            gainloss: '1,500', currency: 'PHP', total: '99,432.00', bought: '2021-03-06',
            sold: '2021-03-06', id: 4},
        {symbol: 'ABC', shares: '12,000', buy: '12.00', sell: '13.00', minsell: '12.6',
            gainloss: '1,500', currency: 'PHP', total: '99,432.00', bought: '2021-03-06',
            sold: '2021-03-06', id: 5},
        {symbol: 'ABC', shares: '12,000', buy: '12.00', sell: '13.00', minsell: '12.6',
            gainloss: '1,500', currency: 'PHP', total: '99,432.00', bought: '2021-03-06',
            sold: '2021-03-06', id: 6},
        {symbol: 'ABC', shares: '12,000', buy: '12.00', sell: '13.00', minsell: '12.6',
            gainloss: '1,500', currency: 'PHP', total: '99,432.00', bought: '2021-03-06',
            sold: '2021-03-06', id: 7},
    ]
    return (
        <table className="table table-striped table-hover table-boundless">
            <thead>
            <tr>
                <th scope={'col'}><Link to={''}>Symbol</Link></th>
                <th scope={'col'}><Link to={''}>Shares</Link></th>
                <th scope={'col'}><Link to={''}>Buy</Link></th>
                <th scope={'col'}><Link to={''}>Sell</Link></th>
                <th scope={'col'}><Link to={''}>Min sell</Link></th>
                <th scope={'col'}><Link to={''}>Gain/Loss</Link></th>
                <th scope={'col'}><Link to={''}>Total</Link></th>
                <th scope={'col'}><Link to={''}>Bought<span className="material-icons">arrow_downward</span></Link></th>
                <th scope={'col'}><Link to={''}>Sold</Link></th>
                <th scope={'col'}>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
                {data.map(items => (
                    <TradeEntry key={items.id} {...items} />
                ))}
            </tbody>
        </table>
    )
};

export const TradeEntry = props => {
    const {symbol, shares, buy, sell, minsell, gainloss, currency, total,
          bought, sold, id} = props
    return (
        <>
            <tr>
                <th scope={'row'} className={'symbol'}>{symbol}</th>
                <td className={'shares'}>{shares}</td>
                <td className={'buy focus-buy text-bold clr-buy-darker'}>{buy}</td>
                <td className={'sell focus-sell text-bold clr-sell-darker'}>{sell}</td>
                <td className={'minsell text-bold'}>&gt; {minsell}</td>
                <td className={'gainloss'}>{gainloss} <small className={'clr-light'}>{currency}</small></td>
                <td className={'total'}>{total} <small className={'clr-light'}>{currency}</small></td>
                <td className={'bought'}>{bought}</td>
                <td className={'sold fitwidth'}>{sold}</td>
                <td className={'action d-flex flex-end'}>&nbsp;
                    <button className="btn btn-outline-secondary btn-sm me-2">Edit</button>
                    <button className="btn btn-primary btn-sm"><span className="material-icons me-2">done</span>Sold stock</button>
                </td>
            </tr>
        </>
    )
}


export const MarkModal = () => {
    const init = {
        symbol: '',
        expires: ''
    }

    const schema = yup.object({
        symbol: yup.string().max(10).required(),
        expires: yup.string()
    })

    const formik = {
        initialValues: init,
        validationSchema: schema,
        onSubmit: async (values, actions) => {
            try {
                const {status, data} = await api_mark_create(values)
                console.log(status, data)
            }
            catch(err) {
                console.log(err)
            }
        }
    }

    return (
        <div className="modal" id="markModalTrigger" tabIndex="-1"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-eyelevel">
                <div className="modal-content">
                    <div className="modal-body">

                        <Formik {...formik}>
                            {({errors, touched}) => {
                                return (
<Form>
    <h3>Add Mark</h3>
    <div className="mb-3">
        <SimpleInputHTML name={'symbol'} placeholder={'Symbol name'} touched={touched} errors={errors} />
    </div>
    <div className="submit">
        <button type={'submit'} className={'btn btn-primary btn-lg w-100'}>Submit</button>
    </div>
</Form>
                                )
                            }}
                        </Formik>

                    </div>
                </div>
            </div>
        </div>
    )
};
