import UserTemplate from "../../templates/layouts/UserTemplate"
import Sidebar from "../../templates/partials/sidebars"
import { NavLink } from "react-router-dom"
import { TradeEntry } from "./Trades"



export const AccountPage = () => {
    return (
        <UserTemplate page={'account-page'}>
            <header id="header">
                <h1>Account</h1>
            </header>
            <div id={'content'}>
                <p>Data here</p>
            </div>
            <footer id="footer">Footer</footer>
        </UserTemplate>
    )
};



export const PasswordPage = () => {
    return (
        <UserTemplate page={'password-page'}>
            <header id="header">
                <h1>Password</h1>
            </header>
            <div id={'content'}>
                <p>Data here</p>
            </div>
            <footer id="footer">Footer</footer>
        </UserTemplate>
    )
};
