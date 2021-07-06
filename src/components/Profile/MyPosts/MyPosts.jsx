import s from './MyPosts.module.css';
import Post from './Posts/Post'
import React from 'react';
import MyPostsReduxForm from "./MyPostsForm";

const MyPosts = React.memo(props => {

    let postsElement = props.profilePage.posts.map(p => <Post key={p.id} like={p.likeCount} message={p.message}/>)

    function onSubmit (formData)
    {
        props.addPostAC(formData.post);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <MyPostsReduxForm onSubmit={onSubmit}/>
            <div>
                {postsElement}
            </div>
        </div>
    )
})

export default MyPosts;