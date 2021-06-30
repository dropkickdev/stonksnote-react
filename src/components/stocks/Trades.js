import { NavLinku, Link } from "react-router-dom"
import Sidebar from "../../templates/partials/sidebars"
import UserTemplate from "../../templates/layouts/UserTemplate"


export const TradeList = () => {
    return (
        <UserTemplate>

            <Sidebar />

            <main id={'main'} className={'px-3 px-md-5 pt-5'}>
                <h2>Active Trades</h2>
                <nav>
                    <ul className="nav nav-pills bg-links">
                        <li className="nav-item">
                            <Link to={''} className="nav-link" aria-current="page">All Trades</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={''} className="nav-link" aria-current="page">Active</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={''} className="nav-link" aria-current="page">Gain</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={''} className="nav-link" aria-current="page">Loss</Link>
                        </li>
                    </ul>
                </nav>
                <div className="listing">
                    <ul class={'nolist'}>
                        <li>
                            <div>aaa</div>
                            <div className={'px-4'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cumque debitis facere labore minus praesentium quisquam vitae voluptatem! Accusantium alias atque dolor harum ipsam neque possimus quisquam sapiente voluptas voluptatem.</div>
                            <div className={'text-end'}>
                                <button className="btn btn-secondary btn-sm me-2">Group ico</button>
                                <button className="btn btn-primary btn-sm">Sell stock</button>
                            </div>
                        </li>
                        <li>
                            <div>aaa</div>
                            <div className={'px-4'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cumque debitis facere labore minus praesentium quisquam vitae voluptatem! Accusantium alias atque dolor harum ipsam neque possimus quisquam sapiente voluptas voluptatem.</div>
                            <div className={'text-end'}>
                                <button className="btn btn-secondary btn-sm me-2">Group ico</button>
                                <button className="btn btn-primary btn-sm">Sell stock</button>
                            </div>
                        </li>
                        <li>
                            <div>aaa</div>
                            <div className={'px-4'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cumque debitis facere labore minus praesentium quisquam vitae voluptatem! Accusantium alias atque dolor harum ipsam neque possimus quisquam sapiente voluptas voluptatem.</div>
                            <div className={'text-end'}>
                                <button className="btn btn-secondary btn-sm me-2">Group ico</button>
                                <button className="btn btn-primary btn-sm">Sell stock</button>
                            </div>
                        </li>
                        <li>
                            <div>aaa</div>
                            <div className={'px-4'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cumque debitis facere labore minus praesentium quisquam vitae voluptatem! Accusantium alias atque dolor harum ipsam neque possimus quisquam sapiente voluptas voluptatem.</div>
                            <div className={'text-end'}>
                                <button className="btn btn-secondary btn-sm me-2">Group ico</button>
                                <button className="btn btn-primary btn-sm">Sell stock</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
        </UserTemplate>
    )
}
