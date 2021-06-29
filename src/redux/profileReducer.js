import {usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const CHANGE_POST = 'CHANGE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {

    posts: [
        {id:1,message:'Hi how are you',likeCount:15},
        {id:2,message:'I am fine',likeCount:35},
        {id:3,message:'How old are you',likeCount:25},
        {id:4,message:'Thank you',likeCount:5},
    ],
    newPostText: '',
    profile:null
}


const profileReducer = (state = initialState ,action) => {

    switch (action.type) {

        case ADD_POST:
        return {
            ...state,
                posts: [...state.posts,{id:5,message: state.newPostText,likeCount: 0,}],
                newPostText: '',
        }

        case CHANGE_POST:
            return {
                ...state,
                newPostText: action.text,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile:action.profile
            }
        default:
            return state;
    }
}

export const addPostAC = () => ({ type: ADD_POST });

export const changePostAC = (post) => ({ type: CHANGE_POST, text:post });

export const setUserProfileAC = (profile) =>({type:SET_USER_PROFILE,profile})

export const setUserProfileThunkCreator = (userId) => (dispatch) => {

    usersAPI.getProfile(userId)
        .then(data => dispatch(setUserProfileAC(data)))
}

export default profileReducer;