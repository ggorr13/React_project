import Dialogs from "./Dialogs";
import { addMessageAC,changeMessageAC } from '../../redux/dialogsReducer';
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps,{addMessageAC,changeMessageAC}) (Dialogs)

export default DialogsContainer;