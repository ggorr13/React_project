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

    _subscribe (observe) {
        this.rerenderRntireTree = observe
    },

    getState () {
        return this._state;
    },

    addPost  ()  {
        let newPost = {
            id:5,
            message: this.getState().profilePage.newPostText,
            likeCount:0,
        }
        this.getState().profilePage.posts.push(newPost);
        this.rerenderRntireTree();
    },

    onPostChange (text)  {
        this.getState().profilePage.newPostText = text;

        this.rerenderRntireTree();
    },


    addMessage () {

        let newDialogs = {
            id:5,
            name:'Gor Tamazyan'
        }

        let newMessage = {
            id:5,
            message: this.getState().dialogsPage.newMessageText,
        }

        this.getState().dialogsPage.dialogs.push(newDialogs);
        this.getState().dialogsPage.messages.push(newMessage);
        this.rerenderRntireTree();
    },

    onMessageChange (text) {
        this.getState().dialogsPage.newMessageText = text;
        this.rerenderRntireTree();
    }
}

export default store;