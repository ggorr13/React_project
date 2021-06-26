import React from 'react';
import { addPostAC, changePostAC } from '../../../redux/store';
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                function addPost ()
                {
                    store.dispatch(addPostAC());
                }

                function onPostChange(text)
                {
                    store.dispatch(changePostAC(text));
                }

               return <MyPosts onPostChange={onPostChange}
                               addPost={addPost}
                               profilePage={store.getState().profilePage}
               />
            }
        }
        </StoreContext.Consumer>
    )

}

export default MyPostsContainer;