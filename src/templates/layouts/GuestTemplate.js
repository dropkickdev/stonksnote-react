import { useSelector } from "react-redux"

import BaseTemplate from "./BaseTemplate"
import Header from "../partials/headers"
import Footer from "../partials/footers"



const GuestTemplate = props => {
    const {site} = useSelector(state => state)
    return (
        <BaseTemplate>
            <Header />
            <div id={'content'} className={`${site.theme} container`}>
                {props.children}
            </div>
            <Footer />
        </BaseTemplate>
    )
}

export default GuestTemplate