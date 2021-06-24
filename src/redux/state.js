import {rerenderRntireTree} from '../render';

const store = {

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
    },

    profilePage: {

        posts: [
        {id:1,message:'Hi how are you',likeCount:15},
        {id:2,message:'I am fine',likeCount:35},
        {id:3,message:'How old are you',likeCount:25},
        {id:4,message:'Thank you',likeCount:5},
        ],
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id:5,
        message: postMessage,
        likeCount:0,
    }
    store.profilePage.posts.push(newPost);
    rerenderRntireTree(store);
}

export default store;
