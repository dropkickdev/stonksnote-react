import { useSelector } from "react-redux"

import BaseTemplate from "./BaseTemplate"
import Header from "../partials/headers"
import Footer from "../partials/footers"
import Sidebar from "../partials/sidebars"



const UserTemplate = ({children, page}) => {
    const {auth} = useSelector(state => state)
    page = page || ''
    return (
        <BaseTemplate>
            <div id="tops">Tops</div>
            <Sidebar />
            <main id={'mids'} className={page}>
                {children}
            </main>
            <div id="bottoms">Bottoms</div>
        </BaseTemplate>
    )
}

export default UserTemplate