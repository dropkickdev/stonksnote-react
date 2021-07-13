import { MarkModal } from "../../components/trades/Trades"



const BaseTemplate = props => {
    return (
        <>
            {props.children}
            <MarkModal />
        </>
    )
}

export default BaseTemplate