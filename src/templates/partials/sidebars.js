import { useSelector } from "react-redux"
import { NavLink, Link } from "react-router-dom"
import { IF } from "../../app/utilcomp"
import logo from "../../assets/images/bootstrap-logo.svg"


const SidebarAdmin = () => {
    const {auth: {avatar, display}} = useSelector(state => state)
    const nudge = avatar ? '' : 'nudge'
    return (
        <>
            <aside id={'sidebar'}>
<div className={`top ${nudge}`}>
    <div className="user">
        <div className="pic">
            <IF condition={avatar}>
                <img src={avatar} className={'rounded-circle me-3'} />
                {/*<span className={'d-lg-none ms-3'}>Account</span>*/}
            </IF>
            <IF condition={!avatar}>
                <span className="material-icons no-pic me-2">account_circle</span>
            </IF>
        </div>
        <div className={'dropdown data'}>
            <h4>{display}</h4>
            <Link className="dropdown-toggle" to="" id="navbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                Account
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className={'nav-link'} to={'/account'}>Edit Account</Link></li>
                <li><Link className={'nav-link'} to={'/account/password'}>Change password</Link></li>
                <li><Link className={'nav-link'} to={'/account/avatar'}>Change photo</Link></li>
            </ul>
        </div>
    </div>
</div>
<div className={'content pt-3'}>
    <div className="brand mb-2">
        <Link to="/" className={'navbar-brand'}>
            <img src={logo} alt="" width="30" height="24" className={'me-2'} />
            Stonksnote
        </Link>
    </div>
    <nav className="navbar primary-nav">
        <ul className="nav flex-column w-100">
            <li className={'nav-item'}>
                <NavLink className={'nav-link'} to={'/'} exact><span className="material-icons me-3">home</span>Home</NavLink>
            </li>
            <li className={'nav-item'}>
                <NavLink className={'nav-link'} to={'/trades'} exact><span className="material-icons me-3">trending_up</span>Trades</NavLink>
            </li>
            <li className={'nav-item'}>
                <NavLink className={'nav-link'} to={'/collections'} exact><span className="material-icons me-3">folder</span>Collections</NavLink>
            </li>
            <li className={'nav-item'}>
                <NavLink className={'nav-link'} to={'/marks'} exact><span className="material-icons me-3">add_circle</span>Marks</NavLink>
            </li>
            <li className={'nav-item'}>
                <NavLink className={'nav-link'} to={'/brokers'} exact><span className="material-icons me-3">maps_home_work</span>Brokers</NavLink>
            </li>
        </ul>
    </nav>
    <nav className="navbar secondary-nav mt-2">
        <ul className="nav flex-column w-100">
            <li className={'nav-item'}>
                <NavLink className={'nav-link'} to={'/profile'} exact>Profile</NavLink>
            </li>
            <li className={'nav-item'}>
                <NavLink className={'nav-link'} to={'/auth/logout'} exact>Logout</NavLink>
            </li>
        </ul>
    </nav>
</div>
<div className={'bottom'}>Bottom</div>
            </aside>
        </>
    )
}


const Sidebar = props => {
    return (
        <>
            <SidebarAdmin />
        </>
    )
}


export default Sidebar