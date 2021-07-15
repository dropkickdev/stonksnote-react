import { useSelector } from "react-redux"

import GuestTemplate from "../templates/layouts/GuestTemplate"
import UserTemplate from "../templates/layouts/UserTemplate"
import { TradeList } from "./trades/Trades"
import BaseTemplate from "../templates/layouts/BaseTemplate"
import Sidebar from "../templates/partials/sidebars"
import { HeaderActions } from "../templates/partials/partials"


const HomeGuest = () => {
    return (
        <GuestTemplate>
            <header>
                <div className="text">
                    <h1>Guest home page</h1>
                    <h2>This is a subhead</h2>
                </div>
            </header>
            <div id="content">
                <p><strong>Absolute pitch (AP)</strong>, often called perfect pitch, is a rare ability of a person to identify or re-create a given musical note without the benefit of a reference tone.[1][2] AP may be demonstrated using linguistic labeling ("naming" a note), associating mental imagery with the note, or sensorimotor responses. For example, an AP possessor can accurately reproduce a heard tone on a musical instrument without "hunting" for the correct pitch.</p>
            </div>
        </GuestTemplate>
    )
}


const HomeUser = () => {
    return (
        // <TradeList />
        <UserTemplate page={'home-page'}>
            <header id="header">
                <div className="text">
                    <h1>Home</h1>
                </div>
                <HeaderActions type={ 'trade_mark' } />
            </header>
            <div id={'content'}>
                <p>Data here</p>
            </div>
            <footer id="footer">Footer</footer>
        </UserTemplate>
    )
}


const HomePage = () => {
    const {auth} = useSelector(state => state)
    return auth.is_auth && <HomeUser /> || <HomeGuest />
}


export default HomePage