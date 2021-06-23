import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import s from "../../app/settings/settings"


export const GuestHeader = ({theme}) => {
    return (
        <>
            <header id="header" className={theme}>
                <ul>
                    <li><NavLink to={`${s.REGISTER_URL}`}>Register</NavLink></li>
                    <li><NavLink to={`${s.LOGIN_URL}`}>Login</NavLink></li>
                    <li><NavLink to={'/foo'}>Foo</NavLink></li>
                </ul>
            </header>
        </>
    )
}


export const UserHeader = ({theme}) => {
    return (
        <>
            <header id="header" className={theme}>
                This is the user header
            </header>
        </>
    )
}


const Header = () => {
    const {auth, theme} = useSelector(state => state)
    const themeclass = `theme-${theme.type}`

    return (
        <>
            {auth.is_auth ? (
                <UserHeader theme={themeclass} />
            ) : (
                <GuestHeader theme={themeclass} />
            )}
        </>
    )
}

export default Header