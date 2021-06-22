import BaseTemplate from "./BaseTemplate"



const UserTemplate = props => {
    return (
        <BaseTemplate>
            {props.children}
        </BaseTemplate>
    )
}

export default UserTemplate