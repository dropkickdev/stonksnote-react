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
                        {site.debug && (
                            <div className="col text-end">
                                <div className={'d-block d-sm-none'}>xs</div>
                                <div className={'d-none d-sm-block d-md-none'}>sm</div>
                                <div className={'d-none d-md-block d-lg-none'}>md</div>
                                <div className={'d-none d-lg-block d-xl-none'}>lg</div>
                                <div className={'d-none d-xl-block d-xxl-none'}>xl</div>
                                <div className={'d-none d-xxl-block'}>xxl</div>
                            </div>
                        )}
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