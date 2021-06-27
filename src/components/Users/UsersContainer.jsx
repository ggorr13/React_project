import {connect} from "react-redux";
import Users from './Users';
import { followAC, unFollowAC,setUsersAC } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        usersPage:state.usersPage
    }
}

const UsersContainer = connect(mapStateToProps,{followAC,unFollowAC,setUsersAC})(Users)

export default UsersContainer;