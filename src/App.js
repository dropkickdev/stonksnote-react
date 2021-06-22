import './App.css';
import { useSelector } from "react-redux"
import s from "./app/settings/settings"
import GuestTemplate from "./templates/layouts/GuestTemplate"


function App() {
    const x = useSelector(state => state)
    console.table(x)
    return (
        <>
            <div className="App">
                <GuestTemplate>
                    <h1>Hello world</h1>
                    <p>{s.MESSAGE}</p>
                </GuestTemplate>
            </div>
        </>
    );
}

export default App;
