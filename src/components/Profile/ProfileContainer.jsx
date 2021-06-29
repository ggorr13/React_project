import Profile from './Profile';
import React from 'react';
import { connect } from "react-redux";
import { setUserProfileAC } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import {usersAPI} from "../../api/api";


class ProfileContainer extends React.Component{

    componentDidMount () {
        let userId = this.props.match.params.userId;
       usersAPI.getProfile(userId)
            .then(data => this.props.setUserProfileAC(data))
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

export default connect(mapStateToProps,{setUserProfileAC}) (WithUrlData);