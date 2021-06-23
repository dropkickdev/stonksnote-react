import BaseTemplate from "./BaseTemplate"
import Header from "../partials/headers"
import Footer from "../partials/footers"



const GuestTemplate = props => {
    return (
        <BaseTemplate>
            <Header />
            <div id={'content'}>
                {props.children}
            </div>
            <Footer />
        </BaseTemplate>
    )
}

export default GuestTemplate