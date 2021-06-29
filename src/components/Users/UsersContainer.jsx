import {connect} from "react-redux";
import { followAC, unFollowAC,setUsersAC,setCurrentPageAC,isFetchingAC } from '../../redux/usersReducer';
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.isFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials:true,
        })
            .then(response => {
                this.props.setUsersAC(response.data.items)
                this.props.isFetchingAC(false)
            })
    }

    onPageChanged = (p) => {
        this.props.setCurrentPageAC(p)
        this.props.isFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,{
            withCredentials:true,
        })
            .then(response => {
                this.props.setUsersAC(response.data.items)
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

