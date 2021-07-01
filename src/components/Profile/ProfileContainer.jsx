import Profile from './Profile';
import React from 'react';
import { connect } from "react-redux";
import {getStatusThunk, setUserProfileThunkCreator, updateStatusThunk } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount () {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 15428;
        }
        this.props.setUserProfileThunkCreator(userId);
        this.props.getStatusThunk(userId);

    }
    render () {

        return <Profile status={this.props.status} profile={this.props.profile} updateStatusThunk={this.props.updateStatusThunk}/>
    }
}

let mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps,{
        setUserProfileThunkCreator,
        getStatusThunk,
        updateStatusThunk }),
    WithAuthRedirect,
    withRouter
)(ProfileContainer)









