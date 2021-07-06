import Profile from './Profile';
import React from 'react';
import { connect } from "react-redux";
import {getStatusThunk, setUserProfileThunkCreator, updateStatusThunk,savePhotoThunk, saveProfileThunk } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    refreshProfile () {

        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.userId;
        }
        this.props.setUserProfileThunkCreator(userId);
        this.props.getStatusThunk(userId);
    }

    componentDidMount () {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }
    }


    render () {

        return <Profile {...this.props} profile={this.props.profile} isOwner={!this.props.match.params.userId}/>
    }
}

let mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.id,
    }
}

export default compose(
    connect(mapStateToProps,{
        setUserProfileThunkCreator,
        getStatusThunk,
        saveProfileThunk,
        savePhotoThunk,
        updateStatusThunk }),
    WithAuthRedirect,
    withRouter
)(ProfileContainer)








