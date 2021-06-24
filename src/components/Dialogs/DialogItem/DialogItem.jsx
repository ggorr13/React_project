import s from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={'mt-2'}>
            <img src={'https://zoomd.com/wp-content/uploads/2020/09/man-avatar-profile-vector-21372076.jpg'}/>
            <NavLink className={'navbar-brand text-dark'} to={path}>{props.name}</NavLink>
        </div>
    )

}

export default DialogItem;
