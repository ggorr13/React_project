import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';


const ADD_POST = 'ADD_POST';
const CHANGE_POST = 'CHANGE_POST';
const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_MESSAGE = 'CHANGE_MESSAGE';

let store = {

    _state: {

        profilePage: {

            posts: [
            {id:1,message:'Hi how are you',likeCount:15},
            {id:2,message:'I am fine',likeCount:35},
            {id:3,message:'How old are you',likeCount:25},
            {id:4,message:'Thank you',likeCount:5},
            ],
            newPostText: '',
        },
        
        dialogsPage: {

            dialogs: [
            {id: 1, name:'Gor Tamazyan'},
            {id: 2, name:'Den Sargsyan'},
            {id: 3, name:'Ani Muradyan'},
            {id: 4, name:'Alisa Harutunyan'},

            ],
            messages: [
            {id: 1, message:'Hi'},
            {id: 2, message:'How are you'},
            {id: 3, message:'Thank you'},
            {id: 4, message:'My name is Alisa'},
            ],
            newMessageText: "",
        },
    },

    rerenderRntireTree () {},

    _subscribe (observe)
    {
        this.rerenderRntireTree = observe
    },

    getState ()
    {
        return this._state;
    },

    dispatch(action)
    {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this.rerenderRntireTree();
    },
}

export const addPostAC = () => ({ type: ADD_POST });

export const changePostAC = (post) => ({ type: CHANGE_POST, text:post });

export const addMessageAC = () => ({ type: ADD_MESSAGE});

export const changeMessageAC = (message) => ({type: CHANGE_MESSAGE,text:message})


export default store;