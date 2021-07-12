import { useSelector } from "react-redux"
import { NavLink, Link } from "react-router-dom"
import s from "../../app/settings/settings"
import logo from '../../assets/images/bootstrap-logo.svg'

import con from "../../app/utils"
import api from "../../app/axios"
import { TradeList } from "../../components/trades/Trades"


const doit = async () => {
    try {
        const res = await api.get('/demo/private')
        con.table(res.data)
    }
    catch({response}) {
        con.log('[You need to be signed in to do this]')
    }
}

const DeviceSizes = () => {
    const {site} = useSelector(state => state)
    return (
        <>
            {site.debug && (
                <div className="text-end ms-5" style={{fontWeight: 'bold'}}>
                    <div className={'d-block d-sm-none'}>xs</div>
                    <div className={'d-none d-sm-block d-md-none'}>sm</div>
                    <div className={'d-none d-md-block d-lg-none'}>md</div>
                    <div className={'d-none d-lg-block d-xl-none'}>lg</div>
                    <div className={'d-none d-xl-block d-xxl-none'}>xl</div>
                    <div className={'d-none d-xxl-block'}>xxl</div>
                </div>
            )}
        </>
    )
}


const GuestHeader = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-start">
                <Link to="/" className={'navbar-brand'}><img src={logo} alt="" width="30" height="24" /></Link>
                {/*
                <NavLink className={'navbar-brand'} to={`${s.LOGIN_URL}`}>Login</NavLink>
                <button onClick={doit} className={'btn btn-primary d-lg-none'}>Test private</button>
                */}
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/'} exact>Home</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/auth/register'}>Register</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/auth/login'}>Login</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/foo'}>Open link foo</NavLink></li>
                </ul>
                <ul className="navbar-nav">
                    <li className={'nav-item me-3 d-none d-lg-inline-block'}>
                        <button onClick={doit} className={'btn btn-primary w-100'}>Test private</button>
                    </li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/trades'}>Private</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/auth/logout'}>[Logout]</NavLink></li>
                    <li className={'nav-item navbar-text'}><DeviceSizes /></li>
                </ul>
            </div>
        </div>
    )
}


const UserHeader = () => {
    const {auth: {display}} = useSelector(state => state)
    return (
        <div className="container">
            <div className="d-flex justify-content-start">
                <Link to="/" className={'navbar-brand'}><img src={logo} alt="" width="30" height="24" /></Link>
                <DeviceSizes />
                {/*
                <NavLink className={'navbar-brand'} to={`${s.LOGOUT_URL}`}>Logout</NavLink>
                <button onClick={doit} className={'btn btn-primary d-lg-none'}>Test private</button>
                */}
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse justify-content-between" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/'} exact>Home</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/foo'}>Open link foo</NavLink></li>
                    {/*<li className={'nav-item navbar-text'}>Profile</li>*/}
                </ul>
                <ul className={'navbar-nav'}>
                    {/*
                    <li className={'nav-item me-3 d-none d-lg-inline-block'}>
                        <button onClick={doit} className={'btn btn-primary w-100'}>Test private</button>
                    </li>
                    */}
                    <li className={'nav-item navbar-text display d-none d-lg-block'}><strong>Hi {display}!</strong></li>
                    <li className={'nav-item me-3 d-none d-lg-inline-block'}>
                        <button onClick={doit} className={'btn btn-primary w-100'}>Test private</button>
                    </li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/trades'}>Private</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/auth/logout'}>Logout</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/auth/register'}>[Register]</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/auth/login'}>[Login]</NavLink></li>
                    <li className={'nav-item navbar-text d-none d-lg-inline-block'}><DeviceSizes /></li>
                </ul>
            </div>
        </div>
    )
}


const Header = () => {
    const {auth, site} = useSelector(state => state)
    return (
        <header id="header" className={site.theme}>
            <div id="navbar">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    {auth.is_auth && <UserHeader /> || <GuestHeader />}
                </nav>
            </div>
        </header>
    )
}

export default Header