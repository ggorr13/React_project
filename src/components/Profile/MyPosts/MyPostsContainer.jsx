import React from 'react';
import { addPostAC, changePostAC } from '../../../redux/store';
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    function addPost ()
    {
        props.dispatch(addPostAC());
    }

    function onPostChange(text)
    {
        props.dispatch(changePostAC(text));
    }

    return <MyPosts onPostChange={onPostChange} addPost={addPost} profilePage={props.profilePage}/>
}

export default MyPostsContainer;