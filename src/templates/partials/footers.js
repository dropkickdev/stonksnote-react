import { useSelector } from "react-redux"



const GuestFooter = ({theme}) => {
    const {site} = useSelector(state => state)
    return (
        <>
            <footer id="footer" className={`${theme} container-fluid`}>
                <div className={'container'}>
                    <div className="row">
                        <div className="col">
                            This is the guest footer
                        </div>
                    </div>
                </div>


            </footer>
        </>
    )
}


const UserFooter = ({theme}) => {
    return (
        <>
            <footer id="footer" className={`${theme} container-fluid`}>
                <div className={'container'}>
                    This is the user footer
                </div>
            </footer>
        </>
    )
}


const Footer = () => {
    const {auth, site} = useSelector(state => state)
    return auth.is_auth && <UserFooter theme={site.theme} /> || <GuestFooter theme={site.theme} />
}

export default Footer