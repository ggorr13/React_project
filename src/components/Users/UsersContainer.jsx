import {connect} from "react-redux";
import Users from './Users';
import { followAC, unFollowAC,setUsersAC,setCurrentPageAC } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        usersPage:state.usersPage,
        currentPage:state.usersPage.currentPage,
        totalUsersCount:state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,

    }
}

const UsersContainer = connect(mapStateToProps,{followAC,unFollowAC,setUsersAC,setCurrentPageAC})(Users)

export default UsersContainer;