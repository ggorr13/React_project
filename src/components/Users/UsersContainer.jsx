import {connect} from "react-redux";
import s from './Users.module.css';
import {getUsersThunkCreator, followThunk, unFollowThunk} from '../../redux/usersReducer';
import React from "react";
import Users from "./Users";

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
    }
}

export default connect(mapStateToProps,{ getUsersThunkCreator, followThunk,unFollowThunk })(UsersContainer)