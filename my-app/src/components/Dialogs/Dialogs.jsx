import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/> );
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />);

    let newMessageElement = React.createRef();

    function addMessage ()
    {
        props.addMessageAC()
    }

    function onMessageChange ()
    {
        let text = newMessageElement.current.value;
        props.changeMessageAC(text);
    }

    if(props.login === null) return  <Redirect to={'/login'} />

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
                    <input className={"form-control mr-sm-2"}
                           onChange={onMessageChange}
                           type={"text"}
                           placeholder={"Add message"}
                           ref={newMessageElement}
                           value={props.dialogsPage.newMessageText}/>
                    <button className={"btn btn-outline-dark my-2 my-sm-0 m-1"}
                            type={"submit"}
                            onClick={addMessage}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs