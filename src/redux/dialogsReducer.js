const ADD_MESSAGE = 'ADD_MESSAGE';

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
}

const dialogsReducer = (state = initialState,action) => {

    switch (action.type) {

        case ADD_MESSAGE :
            return {
                ...state,
                messages: [...state.messages,{id:5,message: action.message}],
                dialogs: [...state.dialogs,{id:5,name:'Gor Tamazyan'}],
            }

        default:
            return state;
    }
}

export const addMessageAC = (message) => ({ type: ADD_MESSAGE,message});


export default dialogsReducer;