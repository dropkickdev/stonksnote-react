import { useSelector } from "react-redux"



const GuestFooter = () => {
    const {site} = useSelector(state => state)
    return (
        <footer id="footer" className={site.theme}>
            <div className={'container'}>
                This is the Guest footer
            </div>
        </footer>
    )
}


const UserFooter = () => {
    const {site} = useSelector(state => state)
    return (
        <footer id="footer" className={site.theme}>
            <div className={'container'}>
                This is the User footer
            </div>
        </footer>
    )
}


const Footer = () => {
    const {auth, site} = useSelector(state => state)
    return auth.is_auth && <UserFooter /> || <GuestFooter />
}

export default Footer