import { useSelector } from "react-redux"

import BaseTemplate from "./BaseTemplate"
import Header from "../partials/headers"
import Footer from "../partials/footers"
import Sidebar from "../partials/sidebars"



const GuestTemplate = ({children}) => {
    return (
        <BaseTemplate>
            <Header />
            <main>
                <div className={'container my-5'}>
                    {children}
                </div>
            </main>
            <Footer />
        </BaseTemplate>
    )
}

export default GuestTemplate