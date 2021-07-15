import { useEffect } from 'react'
import { useSelector } from "react-redux"
import { NavLink, Link } from "react-router-dom"

import { ScrollToStart } from "../../app/utilcomp"
import UserTemplate from "../../templates/layouts/UserTemplate"
import Sidebar from "../../templates/partials/sidebars"
import { TradeEntry } from "./Trades"



export const AccountPage = () => {
    return (
        <UserTemplate page={'account-page'}>
            <ScrollToStart />
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


export const SecurityPage = () => {
    return (
        <UserTemplate page={'security-page'}>
            <ScrollToStart />
            <header id="header">
                <h1>Security</h1>
            </header>
            <div id={'content'}>
                <p>Data here</p>
            </div>
            <footer id="footer">Footer</footer>
        </UserTemplate>
    )
};


export const ProfilePage = () => {
    const {auth: {display}} = useSelector(state => state)
    return (
        <UserTemplate page={'profile-page'}>
            <ScrollToStart />
            <header id="header">
                <h1>{display}</h1>
            </header>
            <div id={'content'}>
                <p>Data here</p>
            </div>
            <footer id="footer">Footer</footer>
        </UserTemplate>
    )
};
