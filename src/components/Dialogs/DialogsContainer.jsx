import s from './Dialogs.module.css';
import React from 'react';
import Dialogs from "./Dialogs";
import { addMessageAC,changeMessageAC } from '../../redux/store';

const DialogsContainer = (props) => {

    function addMessage ()
    {
        props.dispatch(addMessageAC());
    }

    function onMessageChange (text)
    {
        props.dispatch(changeMessageAC(text));
    }

    return <Dialogs addMessage={addMessage} onMessageChange={onMessageChange} dialogsPage={props.dialogsPage}/>
}

export default DialogsContainer;