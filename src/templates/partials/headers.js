import { useSelector } from "react-redux"
import { NavLink, Link } from "react-router-dom"
import s from "../../app/settings/settings"
import logo from '../../assets/images/bootstrap-logo.svg'

import api from "../../app/axios"
import { IF } from "../../app/utilcomp"


const doit = async () => {
    try {
        const res = await api.get('/demo/private')
        console.table(res.data)
    }
    catch({response}) {}
}

const DeviceSizes = () => {
    const {site} = useSelector(state => state)
    return (
        <>
            {site.debug && (
                <div>
                    <span className={'d-block d-sm-none'}>xs</span>
                    <span className={'d-none d-sm-block d-md-none'}>sm</span>
                    <span className={'d-none d-md-block d-lg-none'}>md</span>
                    <span className={'d-none d-lg-block d-xl-none'}>lg</span>
                    <span className={'d-none d-xl-block d-xxl-none'}>xl</span>
                    <span className={'d-none d-xxl-block'}>xxl</span>
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
    const {auth: {display, avatar}} = useSelector(state => state)
    return (
        <div className="container">
            <div className="d-flex justify-content-start">
                <Link to="/" className={'navbar-brand'}><img src={logo} alt="" width="30" height="24" /></Link>
                {/*<DeviceSizes />*/}
                {/*
                <NavLink className={'navbar-brand'} to={`${s.LOGOUT_URL}`}>Logout</NavLink>
                <button onClick={doit} className={'btn btn-primary d-lg-none'}>Test private</button>
                */}
                <div className="btn-group" role="group" aria-label="Basic example">
                    <Link className={'btn btn-primary btn-add-mark'} to={'/trades/add'}>
                        <span className="material-icons me-2">trending_up</span> trade
                    </Link>
                    <button className={'btn btn-primary btn-add-mark'}
                            data-bs-toggle="modal" data-bs-target="#markModalTrigger">
                        <span className="material-icons me-2">add_circle</span> mark
                    </button>
                </div>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse justify-content-between" id="navbarNav">
                <ul className="navbar-nav ms-3">
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/trades'} exact>Trades</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/collections'} exact>Collections</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/marks'} exact>Marks</NavLink></li>
                </ul>
                <ul className={'navbar-nav'}>
                    {/*
                    <li className={'nav-item me-3 d-none d-lg-inline-block'}>
                        <button onClick={doit} className={'btn btn-primary w-100'}>Test private</button>
                    </li>
                    */}
                    <li className={'nav-item navbar-text d-none d-lg-block'}><span>Hi&nbsp;<strong>{display}</strong>!</span></li>
                    {/*
                    <li className={'nav-item me-3 d-none d-lg-inline-block'}>
                        <button onClick={doit} className={'btn btn-primary w-100'}>Test private</button>
                    </li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/trades'}>Private</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/auth/register'}>[Register]</NavLink></li>
                    <li className={'nav-item'}><NavLink className={'nav-link'} to={'/auth/login'}>[Login]</NavLink></li>
                    */}

                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle caret-off account-btn" to="" id="navbarDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            <IF condition={avatar}>
                                <img src={avatar} width={34} height={34} />
                                <span className={'d-lg-none ms-3'}>Account</span>
                            </IF>
                            <IF condition={!avatar}>
                                <span className="material-icons">manage_accounts</span>
                                Account
                            </IF>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><Link className={'nav-link'} to={'/account'}>Account</Link></li>
                            <li><Link className={'nav-link'} to={'/account/password'}>Password</Link></li>
                            <li><Link className={'nav-link'} to={'/auth/logout'}>Logout</Link></li>
                        </ul>
                    </li>
                    <li className={'nav-item navbar-text'}>
                        <span><DeviceSizes /></span>
                    </li>
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