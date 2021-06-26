const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_MESSAGE = 'CHANGE_MESSAGE';


let initialState = {

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
}


const dialogsReducer = (state = initialState,action) => {

    switch (action.type) {

        case ADD_MESSAGE :

            let newDialogs = {
                id:5,
                name:'Gor Tamazyan'
            }

            let newMessage = {
                id:5,
                message: state.newMessageText,
            }

            state.dialogs.push(newDialogs);
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case CHANGE_MESSAGE:

            state.newMessageText = action.text;
            return state;

        default:
            return state;
    }
}

export default dialogsReducer;