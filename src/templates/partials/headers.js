import { useSelector } from "react-redux"
import { NavLink, Link } from "react-router-dom"
import s from "../../app/settings/settings"
import logo from '../../assets/images/bootstrap-logo.svg'


const GuestHeader = ({theme}) => {
    return (
        <header id="header" className={theme}>
            <div id="navbar">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="" width="30" height="24" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
<div className="collapse navbar-collapse justify-content-between" id="navbarNav">
    <ul className="navbar-nav">
        <li className={'nav-item'}><NavLink className={'nav-link'} to={'/'} exact>Home</NavLink></li>
        <li className={'nav-item'}><NavLink className={'nav-link'} to={`${s.REGISTER_URL}`}>Register</NavLink></li>
        <li className={'nav-item'}><NavLink className={'nav-link'} to={`${s.LOGIN_URL}`}>Login</NavLink></li>
        <li className={'nav-item'}><NavLink className={'nav-link'} to={'/foo'}>Foo</NavLink></li>
    </ul>
    <ul className="navbar-nav">
        <li className={'nav-item navbar-text'}>Watevs</li>
    </ul>
</div>
                    </div>
                </nav>
            </div>
        </header>
    )
}


const UserHeader = ({theme}) => {
    return (
        <header id="header" className={theme}>
            <div id="navbar">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="" width="30" height="24" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
<div className="navbar-collapse collapse justify-content-between" id="navbarNav">
    <ul className="navbar-nav">
        <li className={'nav-item'}><NavLink className={'nav-link'} to={'/'}>Home</NavLink></li>
        <li className={'nav-item navbar-text'}>Profile</li>
    </ul>
    <ul className={'navbar-nav'}>
        <li className={'nav-item'}><NavLink className={'nav-link'} to={`${s.LOGOUT_URL}`}>Logout</NavLink></li>
    </ul>
</div>
                    </div>
                </nav>
            </div>
        </header>
    )
}


const Header = () => {
    const {auth, site} = useSelector(state => state)
    return (
        <>
            {auth.is_auth && <UserHeader theme={site.theme} /> || <GuestHeader theme={site.theme} />}
        </>
    )
}

export default Header