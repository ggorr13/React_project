import s from './Profile.module.css';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";
import React from "react";

const Profile = (props) => {

    if(props.login === null) return  <Redirect to={'/login'} />

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;