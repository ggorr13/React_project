import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.css';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={'mt-2'} key={props.key}>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfgg1JvFtD7oG3i1S8Po1mLLWa8gYgvJGTPFoLqIXQdSzkdq-LabOmK343lT8mvKs0cY&usqp=CAU'} className={'w-25'}/>
            <NavLink className={'navbar-brand text-dark'} to={path}>{props.name}</NavLink>
        </div>
    )

}

export default DialogItem;
