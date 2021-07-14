import { useSelector } from "react-redux"

import BaseTemplate from "./BaseTemplate"
import Header from "../partials/headers"
import Footer from "../partials/footers"
import Sidebar from "../partials/sidebars"



const UserTemplate = ({children}) => {
    const {auth} = useSelector(state => state)
    return (
        <BaseTemplate>
            <div id="tops">Tops</div>
            <Sidebar />
            <div id="content">
                <header id="header">Header</header>
                <main>{children}</main>
                <footer id="footer">Footer</footer>
            </div>
            <div id="bottoms">Bottoms</div>
        </BaseTemplate>
    )
}

export default UserTemplate