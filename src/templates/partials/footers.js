import { useSelector } from "react-redux"



export const GuestFooter = ({theme}) => {
    return (
        <>
            <footer id="footer" className={theme}>
                <div className="container">
                    This is the guest footer
                </div>
            </footer>
        </>
    )
}


export const UserFooter = ({theme}) => {
    return (
        <>
            <footer id="footer" className={theme}>
                <div className="container">
                    This is the user footer
                </div>
            </footer>
        </>
    )
}


const Footer = () => {
    const {auth, theme} = useSelector(state => state)
    const themeclass = `theme-${theme.type}`
    return auth.is_auth && <UserFooter theme={themeclass} /> || <GuestFooter theme={themeclass} />
}

export default Footer