import {connect} from "react-redux";
import UsersApiComponent from './Users';
import { followAC, unFollowAC,setUsersAC,setCurrentPageAC } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        usersPage:state.usersPage,
        currentPage:state.usersPage.currentPage,
        totalUsersCount:state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
    }
}

export default connect(mapStateToProps,{followAC,unFollowAC,setUsersAC,setCurrentPageAC})(UsersApiComponent)

