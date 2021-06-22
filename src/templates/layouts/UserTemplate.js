import BaseTemplate from "./BaseTemplate"
import Header from "../partials/headers"
import Footer from "../partials/footers"



const UserTemplate = props => {
    return (
        <BaseTemplate>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </BaseTemplate>
    )
}

export default UserTemplate