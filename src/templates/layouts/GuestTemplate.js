import { useSelector } from "react-redux"

import BaseTemplate from "./BaseTemplate"
import Header from "../partials/headers"
import Footer from "../partials/footers"
import Sidebar from "../partials/sidebars"



const GuestTemplate = ({children, page}) => {
    page = page || ''
    return (
        <BaseTemplate>
            <Header />
            <main id={'content'} className={page}>
                <div className="container py-5">
                    {children}
                </div>
            </main>
            <Footer />
        </BaseTemplate>
    )
}

export default GuestTemplate