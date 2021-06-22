import './App.css';
import { useSelector, useDispatch } from "react-redux"
import s from "./app/settings/settings"
import GuestTemplate from "./templates/layouts/GuestTemplate"
import { login, logout } from "./app/redux/store"


function App() {
    const {auth} = useSelector(state => state)
    const dispatch = useDispatch()

    const switchauth = () => {
        dispatch(login({
            display: 'fooman',
            email: 'master@gmail.com'
        }))
    }

    const loggingout = () => {
        dispatch(logout())
    }

    return (
        <>
            <div className="App">
                <GuestTemplate>
                    <h1>Hello world</h1>
                    <p>{s.MESSAGE}</p>
                    <p><button onClick={switchauth}>Login</button></p>
                    <p><button onClick={loggingout}>Logout</button></p>
                    <p>{auth.display}</p>
                </GuestTemplate>
            </div>
        </>
    );
}

export default App;
