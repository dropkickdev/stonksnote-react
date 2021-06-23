import { useSelector } from "react-redux"

import GuestTemplate from "../templates/layouts/GuestTemplate"
import UserTemplate from "../templates/layouts/UserTemplate"



const HomeGuest = () => {
    return (
        <GuestTemplate>
            <div className="container">
                <main>
                    <h1>Guest home page</h1>
                </main>
            </div>
        </GuestTemplate>
    )
}


const HomeUser = () => {
    return (
        <UserTemplate>
            <div className="container">
                <main>
                    <h1>User home page</h1>
                </main>
            </div>
        </UserTemplate>
    )
}


const HomePage = () => {
    const {auth} = useSelector(state => state)
    return auth.is_auth && <HomeUser /> || <HomeGuest />
}


export default HomePage