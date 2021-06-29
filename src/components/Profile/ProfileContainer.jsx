import Profile from './Profile';
import React from 'react';
import { connect } from "react-redux";
import { setUserProfileThunkCreator } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component{

    componentDidMount () {
        let userId = this.props.match.params.userId;
        this.props.setUserProfileThunkCreator(userId)
    }
    render () {

        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let  mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile
    }
}

let WithUrlData = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfileThunkCreator}) (WithUrlData);