

const SidebarAdmin = () => {
    return (
        <>
            <aside id={'sidebar'} className="sidebar d-none d-md-block">
                <h4>Sidebar</h4>
                <div className="item">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nostrum, unde. Aliquam, amet animi aspernatur consectetur consequatur culpa, dolorem doloribus eveniet illo laborum magnam perferendis qui sed. Non, perspiciatis, quo.</p>
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