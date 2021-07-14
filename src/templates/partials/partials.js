import { Link } from "react-router-dom"
import { IF } from "../../app/utilcomp"


export const PageTitle = ({title, subhead}) => {

};

export const HeaderActions = ({type}) => {
    return (
        <div className="actions">
            <IF condition={type === 'trade_mark'}>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <Link className={'btn btn-primary btn-lg btn-add-mark'} to={'/trades/add'}>
                        <span className="material-icons me-2">trending_up</span> trade
                    </Link>
                    <button className={'btn btn-primary btn-lg btn-add-mark'}
                            data-bs-toggle="modal" data-bs-target="#markModalTrigger">
                        <span className="material-icons me-2">add_circle</span> mark
                    </button>
                </div>
            </IF>
        </div>
    )
};

