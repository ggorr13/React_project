import {connect} from "react-redux";
import s from './Users.module.css';
import {getUsersThunkCreator, followThunk, unFollowThunk, setCurrentPageAC} from '../../redux/usersReducer';
import React from "react";
import Users from "./Users";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getDisabled,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (p) => {
        this.props.getUsersThunkCreator(p, this.props.pageSize);
    }


    render() {
        return <Users {...this.props} onPageChanged={this.onPageChanged}/>
    }
}

let mapStateToProps = (state) => {
    return {
        usersPage:getUsers(state),
        currentPage:getCurrentPage(state),
        totalUsersCount:getTotalUsersCount(state),
        pageSize: getPageSize(state),
        isFetching:getIsFetching(state),
        disabled:getDisabled(state),
    }
}

export default compose(
    connect(mapStateToProps,{ getUsersThunkCreator, followThunk,unFollowThunk,setCurrentPageAC }),
    WithAuthRedirect,
)(UsersContainer)





