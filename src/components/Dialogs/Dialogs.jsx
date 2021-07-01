import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import DialogsReduxForm from "./DialogsForm";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/> );
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />);

    let onSubmit = (formData) => {
        props.addMessageAC(formData.message)
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
                <DialogsReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Dialogs