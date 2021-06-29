import Sidebar from "../../templates/partials/sidebars"
import UserTemplate from "../../templates/layouts/UserTemplate"


export const TradeList = () => {
    return (
        <UserTemplate>
            {/*
            <div className="x">
                <div className="a">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut enim est fuga inventore molestias, quasi voluptatem. Ab accusantium alias eveniet maxime neque optio praesentium provident sint? Commodi, repudiandae, saepe!</div>
                <div className="a">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut enim est fuga inventore molestias, quasi voluptatem. Ab accusantium alias eveniet maxime neque optio praesentium provident sint? Commodi, repudiandae, saepe!</div>
                <div className="a">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut enim est fuga inventore molestias, quasi voluptatem. Ab accusantium alias eveniet maxime neque optio praesentium provident sint? Commodi, repudiandae, saepe!</div>
                <div className="a">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut enim est fuga inventore molestias, quasi voluptatem. Ab accusantium alias eveniet maxime neque optio praesentium provident sint? Commodi, repudiandae, saepe!</div>
            </div>
            */}
            <Sidebar />
            <main id={'main'} className={'px-5'}>
                <h2>Main content</h2>
                <div className="listing">
                    <ul class={'nolist'}>
                        <li>
                            <div>aaa</div>
                            <div>aaa</div>
                            <div>aaa</div>
                        </li>
                        <li>
                            <div>aaa</div>
                            <div>aaa</div>
                            <div>aaa</div>
                        </li>
                        <li>
                            <div>aaa</div>
                            <div>aaa</div>
                            <div>aaa</div>
                        </li>
                        <li>
                            <div>aaa</div>
                            <div>aaa</div>
                            <div>aaa</div>
                        </li>
                        <li>
                            <div>aaa</div>
                            <div>aaa</div>
                            <div>aaa</div>
                        </li>
                    </ul>
                </div>
            </main>
        </UserTemplate>
    )
}
