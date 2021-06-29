import Profile from './Profile';
import React from 'react';
import { connect } from "react-redux";
import { setUserProfileAC } from '../../redux/profileReducer';
import axios from "axios";
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component{

    componentDidMount () {
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfileAC(response.data)
            })
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