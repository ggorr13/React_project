import {connect} from "react-redux";
import s from './Users.module.css';
import {followAC, unFollowAC, setUsersAC, setCurrentPageAC, isFetchingAC, disabledAC} from '../../redux/usersReducer';
import React from "react";
import Users from "./Users";
import {usersAPI} from "../../api/api";
import axios from "axios";

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.isFetchingAC(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials:true,
            headers:{
                "API-KEY":'031f07b2-b965-4987-a8d9-5921845550a6',
            }}).then(response => {
            this.props.setUsersAC(response.data.items)
            this.props.isFetchingAC(false)
            })
    }

    onPageChanged = (p) => {
        this.props.setCurrentPageAC(p)
        this.props.isFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,{
            withCredentials:true,
            headers:{
                "API-KEY":'031f07b2-b965-4987-a8d9-5921845550a6',
            }})
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
        disabled:state.usersPage.disabled
    }
}

export default connect(mapStateToProps,{followAC,unFollowAC,setUsersAC,setCurrentPageAC,isFetchingAC, disabledAC})(UsersContainer)

