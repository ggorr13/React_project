import Profile from './Profile';
import React from 'react';
import { connect } from "react-redux";
import { setUserProfileThunkCreator } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount () {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 15428;
        }
        this.props.setUserProfileThunkCreator(userId)
    }
    render () {

        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile,
    }
}

export default compose(
    connect(mapStateToProps,{setUserProfileThunkCreator}),
    WithAuthRedirect,
    withRouter
)(ProfileContainer)









