import s from './MyPosts.module.css';
import Post from './Posts/Post'
import React from 'react';
import { addPostAC, changePostAC } from '../../../redux/store';

const MyPosts = (props) => {

    let postsElement = props.profilePage.posts.map(p => <Post like={p.likeCount} message={p.message}/>)

    let newpostElement = React.createRef();

    function addPost ()
    {
        props.dispatch(addPostAC());
    }

    function onPostChange()
    {
        let input = newpostElement.current.value;
        props.dispatch(changePostAC(input));
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={'d-flex mb-3'}>
                <input type={'text'} onChange={onPostChange} className={'form-control mr-sm-2 w-25'} ref={newpostElement}  value={props.profilePage.newPostText}></input>
                <button className={'btn btn-outline-dark my-2 my-sm-0'} onClick={addPost}>Add post</button>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;