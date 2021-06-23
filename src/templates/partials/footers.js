import { useSelector } from "react-redux"



export const GuestFooter = ({theme}) => {
    return (
        <>
            <footer id="footer" className={theme}>
                This is the guest footer
            </footer>
        </>
    )
}


export const UserFooter = ({theme}) => {
    return (
        <>
            <footer id="footer" className={theme}>
                This is the user footer
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