import {connect} from "react-redux";
import s from './Users.module.css';
import { followAC, unFollowAC,setUsersAC,setCurrentPageAC,isFetchingAC } from '../../redux/usersReducer';
import React from "react";
import Users from "./Users";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.isFetchingAC(true)
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(response => {
                this.props.setUsersAC(response.items)
                this.props.isFetchingAC(false)
            })
    }

    onPageChanged = (p) => {
        this.props.setCurrentPageAC(p)
        this.props.isFetchingAC(true)
        usersAPI.getUsers(p,this.props.pageSize)
            .then(response => {
                this.props.setUsersAC(response.items)
                this.props.isFetchingAC(false)
            })
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

export default connect(mapStateToProps,{followAC,unFollowAC,setUsersAC,setCurrentPageAC,isFetchingAC})(UsersContainer)

