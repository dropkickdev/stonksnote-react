import { useSelector } from "react-redux"

import GuestTemplate from "../templates/layouts/GuestTemplate"
// import UserTemplate from "../templates/layouts/UserTemplate"
import { TradeList } from "./stocks/Trades"


const HomeGuest = () => {
    const aaa = ''
    return (
        <GuestTemplate>
            <div className="container">
                <main>
                    <h1>Guest home page</h1>
                    <h2>This is a subhead</h2>
                    <p><strong>Absolute pitch (AP)</strong>, often called perfect pitch, is a rare ability of a person to identify or re-create a given musical note without the benefit of a reference tone.[1][2] AP may be demonstrated using linguistic labeling ("naming" a note), associating mental imagery with the note, or sensorimotor responses. For example, an AP possessor can accurately reproduce a heard tone on a musical instrument without "hunting" for the correct pitch.</p>
                </main>
            </div>
        </GuestTemplate>
    )
}


const HomeUser = () => {
    return (
        <TradeList />
        /*
        <UserTemplate>
            <div className="container">
                <main>
                    <h1>User home page</h1>
                </main>
            </div>
        </UserTemplate>
        * */
    )
}


const HomePage = () => {
    const {auth} = useSelector(state => state)
    return auth.is_auth && <HomeUser /> || <HomeGuest />
}


export default HomePage