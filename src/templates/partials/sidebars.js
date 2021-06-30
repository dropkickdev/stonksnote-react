import { Link } from "react-router-dom"


const SidebarAdmin = () => {
    return (
        <>
            <aside id={'sidebar'} className="sidebar d-none d-md-block px-3 pt-5">
                <div className="widget">
                    <h4>Groups</h4>
                    <div>
                        <ul className={'nav flex-column'}>
                            <li className={'nav-item'}>
                                <Link to={ '' }>Group 1</Link>
                            </li>
                            <li className={'nav-item'}>
                                <Link to={ '' }>Group 2</Link>
                            </li>
                            <li className={'nav-item'}>
                                <Link to={ '' }>Group 3</Link>
                            </li>
                            <li className={'nav-item'}>
                                <Link to={ '' }>Group 4</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    )
}


const Sidebar = props => {
    return (
        <>
            <SidebarAdmin />
        </>
    )
}


export default Sidebar