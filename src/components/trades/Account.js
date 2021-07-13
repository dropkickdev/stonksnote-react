import UserTemplate from "../../templates/layouts/UserTemplate"
import Sidebar from "../../templates/partials/sidebars"
import { NavLink } from "react-router-dom"
import { TradeEntry } from "./Trades"



export const AccountPage = () => {
    return (
        <UserTemplate>
            <div id="account-content">

<header className={'post-header'}>
    <h1>Account</h1>
</header>
<div className={'post-content'}>
    <p>Data here</p>
</div>

            </div>
        </UserTemplate>
    )
};



export const PasswordPage = () => {
    return (
        <UserTemplate>
            <div id="password-content">

<header className={'post-header'}>
    <h1>Password</h1>
</header>
<div className={'post-content'}>
    <p>Data here</p>
</div>

            </div>
        </UserTemplate>
    )
};
