import { profileAPI } from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'CHANGE_STATUS';
const DELETE_POST = 'DELETE_POST';
const PROFILE_PHOTO = 'PROFILE_PHOTO';

let initialState = {

    posts: [
        {id:1,message:'Hi how are you',likeCount:15},
        {id:2,message:'I am fine',likeCount:35},
        {id:3,message:'How old are you',likeCount:25},
        {id:4,message:'Thank you',likeCount:5},
    ],
    newPostText: '',
    profile: [],
    status :'',
}

const profileReducer = (state = initialState ,action) => {

    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,{id:5,message: action.post,likeCount: 0}],
                newPostText: '',
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile:  [{
                    fullName:action.name,
                    photo:action.photo,
                    contacts:action.contacts,
                    aboutMe:action.aboutMe,
                    lookingForAJob:action.lookingForAJob,
                    lookingForAJobDescription:action.lookingForAJobDescription
                }]
            }
        case SET_STATUS :
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts:state.posts.filter(p => p.id !== action.postId)
            }
        case PROFILE_PHOTO:
            return {
                ...state,
                profile: [{photo: action.image}]
            }
        default:
            return state;
    }
}

export const addPostAC = (post) => ({ type: ADD_POST,post });

export const deletePostAC = (postId) => ({ type: DELETE_POST,postId });

export const setUserProfileAC = (name,photo,contacts,aboutMe,lookingForAJob,lookingForAJobDescription) =>({type:SET_USER_PROFILE,name,photo,contacts,aboutMe,lookingForAJob,lookingForAJobDescription})

export const setStatusAC = (status) => ({type:SET_STATUS,status})

export const profilePhotoAC = (image) => ({type:PROFILE_PHOTO,image})

export const setUserProfileThunkCreator = (userId) => (dispatch) => {

    profileAPI.getProfile(userId)
        .then(response => {
            console.log(response)
            dispatch(setUserProfileAC(
                response.data.fullName,
                response.data.photos,
                response.data.contacts,
                response.data.aboutMe,
                response.data.lookingForAJob,
                response.data.lookingForAJobDescription,
            ))
        })
}

export const getStatusThunk = (userId) => async (dispatch) => {

    let data = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(data.data))
}

export const updateStatusThunk = (status) => async (dispatch) => {

    let response = await profileAPI.updateStatus(status)

    if(response.data.resultCode === 0){
        dispatch(setStatusAC(status))
    }
}

export const savePhotoThunk = (image) => async (dispatch) => {

    let response = await profileAPI.profilePhoto(image)

    if(response.data.resultCode === 0){
        console.log(response.data.data.photos)
        dispatch(profilePhotoAC(response.data.data.photos))
    }
}

export const saveProfileThunk = (formData) => async  (dispatch,getState) => {
    const userId = getState().auth.id

    let response = await profileAPI.profile(formData)
    if(response.data.resultCode === 0){
        dispatch(setUserProfileThunkCreator(userId))
    }else {
        dispatch(stopSubmit("Description",{ _error: response.data.messages[0]}));

        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;