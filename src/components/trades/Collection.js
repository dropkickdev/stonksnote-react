import UserTemplate from "../../templates/layouts/UserTemplate"
import { Link } from "react-router-dom"


export const CollectionPage = () => {
    return (
        <UserTemplate>
            <div id="collection-content">

<header className={'post-header'}>
    <h1>Collections</h1>
</header>
<div className={'post-content'}>
    <p>Data here</p>
</div>

           </div>
        </UserTemplate>
    )
};


export const MarkPage = () => {
    return (
        <UserTemplate>
            <div id="marks-content">

<header className={'post-header'}>
    <h1>Marks</h1>
</header>
<div className={'post-content'}>
    <p>
        <Link className={'btn btn-primary btn-add-mark'} to={'/marks/add'}>
            <span className="material-icons">add</span> Mark
        </Link>
    </p>
</div>

            </div>
        </UserTemplate>
    )
};


export const MarkAddPage = () => {
    return (
        <UserTemplate>
            <div id="marks-content">

<header className={'post-header'}>
    <h1>Add Mark</h1>
</header>
<div className={'post-content'}>
    <p>Data here</p>
</div>

            </div>
        </UserTemplate>
    )
};
