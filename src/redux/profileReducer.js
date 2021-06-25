const ADD_POST = 'ADD_POST';
const CHANGE_POST = 'CHANGE_POST';

const profileReducer = (state,action) => {

    switch (action.type) {

        case ADD_POST:

            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            }
            state.posts.push(newPost);
            state.newPostText = '';

            return state;

        case CHANGE_POST:

            state.newPostText = action.text;
            return state;

        default:

            return state;
    }
}

export default profileReducer;