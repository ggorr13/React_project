import s from './Dialogs.module.css';
import React from 'react';
import Dialogs from "./Dialogs";
import { addMessageAC,changeMessageAC } from '../../redux/store';
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {

                function addMessage ()
                {
                    store.dispatch(addMessageAC());
                }

                function onMessageChange (text)
                {
                    store.dispatch(changeMessageAC(text));
                }
                return  <Dialogs addMessage={addMessage}
                                 onMessageChange={onMessageChange}
                                 dialogsPage={store.getState().dialogsPage}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;