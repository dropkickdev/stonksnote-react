import { useSelector } from "react-redux"



export const GuestHeader = ({theme}) => {
    return (
        <>
            <header id="header" className={theme}>
                This is the guest header
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