import { useSelector } from "react-redux"

import BaseTemplate from "./BaseTemplate"
import Header from "../partials/headers"
import Footer from "../partials/footers"
import Sidebar from "../partials/sidebars"



const UserTemplate = props => {
    const {site} = useSelector(state => state)
    return (
        <BaseTemplate>
            <Header />
            <div id={'content'} className={`${site.theme} container-fluid g-0 left-sb`}>
                <Sidebar />
                <main id={'main'} className={'px-3 px-md-5 pt-5'}>
                    {props.children}
                </main>
            </div>
            <Footer />
        </BaseTemplate>
    )
}

export default UserTemplate