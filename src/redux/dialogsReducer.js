const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_MESSAGE = 'CHANGE_MESSAGE';

const dialogsReducer = (state,action) => {

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