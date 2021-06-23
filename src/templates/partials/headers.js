import { useSelector } from "react-redux"
import { NavLink, Link } from "react-router-dom"
import s from "../../app/settings/settings"
import logo from '../../assets/images/bootstrap-logo.svg'


export const GuestHeader = ({theme}) => {
    return (
        <header id="header" className={theme}>
            <div id="navbar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="" width="30" height="24" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className={'nav-item'}><NavLink className={'nav-link'} to={'/'}>Home</NavLink></li>
                                <li className={'nav-item'}><NavLink className={'nav-link'} to={`${s.REGISTER_URL}`}>Register</NavLink></li>
                                <li className={'nav-item'}><NavLink className={'nav-link'} to={`${s.LOGIN_URL}`}>Login</NavLink></li>
                                <li className={'nav-item'}><NavLink className={'nav-link'} to={'/foo'}>Foo</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}


export const UserHeader = ({theme}) => {
    return (
        <header id="header" className={theme}>
            <div id="navbar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="" width="30" height="24" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className={'nav-item'}><NavLink className={'nav-link'} to={'/'}>Home</NavLink></li>
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
    const {auth, theme} = useSelector(state => state)
    const themeclass = `theme-${theme.type}`

    return auth.is_auth && <UserHeader theme={themeclass} /> || <GuestHeader theme={themeclass} />
}

export default Header