import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.dialogs.map(d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = props.dialogs.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    function addMessage ()
    {
        let input = newMessageElement.current.value;
        alert(input)
    }

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={'mt-2'}>
                {messagesElements}
            </div>
            <div className={"navbar navbar-light bg-light"}>
                <div className={"d-flex"}>
                    <input className={"form-control mr-sm-2"} type={"text"} placeholder={"Add message"} ref={newMessageElement}/>
                        <button className={"btn btn-outline-dark my-2 my-sm-0 m-1"} type={"submit"} onClick={addMessage}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs