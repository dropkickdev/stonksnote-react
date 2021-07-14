import UserTemplate from "../../templates/layouts/UserTemplate"
import { Link } from "react-router-dom"


export const CollectionPage = () => {
    return (
        <UserTemplate page={'collections-page'}>
            <header id="header">
                <h1>Collections</h1>
            </header>
            <div id={'content'}>
                <p>Data here</p>
            </div>
            <footer id="footer">Footer</footer>
        </UserTemplate>
    )
};


export const MarkPage = () => {
    return (
        <UserTemplate page={'marks-page'}>
            <header id="header">
                <h1>Marks</h1>
            </header>
            <div id={'content'}>
                <p>Data here</p>
            </div>
            <footer id="footer">Footer</footer>
        </UserTemplate>
    )
};


export const MarkAddPage = () => {
    return (
        <UserTemplate page={'marksadd-page'}>
            <header id="header">
                <h1>Add Marks</h1>
            </header>
            <div id={'content'}>
                <p>Data here</p>
            </div>
            <footer id="footer">Footer</footer>
        </UserTemplate>
    )
};
