import React from 'react';
import { addPostAC, changePostAC } from '../../../redux/store';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {

    return {
        profilePage: state.profilePage
    }
}

const MyPostsContainer = connect(mapStateToProps,{addPostAC,changePostAC}) (MyPosts)

export default MyPostsContainer;