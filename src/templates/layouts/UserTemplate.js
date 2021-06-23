import BaseTemplate from "./BaseTemplate"
import Header from "../partials/headers"
import Footer from "../partials/footers"



const UserTemplate = props => {
    return (
        <BaseTemplate>
            <Header />
            {props.children}
            <Footer />
        </BaseTemplate>
    )
}

export default UserTemplate