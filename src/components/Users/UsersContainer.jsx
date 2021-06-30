import {connect} from "react-redux";
import s from './Users.module.css';
import {getUsersThunkCreator, followThunk, unFollowThunk} from '../../redux/usersReducer';
import React from "react";
import Users from "./Users";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";

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
        usersPage:state.usersPage,
        currentPage:state.usersPage.currentPage,
        totalUsersCount:state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        isFetching:state.usersPage.isFetching,
        disabled:state.usersPage.disabled,
        login: state.auth.login,
    }
}

export default compose(
    connect(mapStateToProps,{ getUsersThunkCreator, followThunk,unFollowThunk }),
    WithAuthRedirect,
)(UsersContainer)





