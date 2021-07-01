import Dialogs from "./Dialogs";
import { addMessageAC } from '../../redux/dialogsReducer';
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        login: state.auth.login,
    }
}

export default compose(
    connect(mapStateToProps,{addMessageAC}),
    WithAuthRedirect
)(Dialogs)
