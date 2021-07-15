import UserTemplate from "../../templates/layouts/UserTemplate"
import { Link } from "react-router-dom"

import { ScrollToStart } from "../../app/utilcomp"


export const CollectionPage = () => {
    return (
        <UserTemplate page={'collections-page'}>
            <ScrollToStart />
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
            <ScrollToStart />
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
            <ScrollToStart />
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
