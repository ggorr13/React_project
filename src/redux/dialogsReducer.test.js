import dialogsReducer, {addMessageAC} from "./dialogsReducer";

let state = {

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

it('length of message should be incremented', () => {
    let action = addMessageAC("React app")

    let newState = dialogsReducer(state,action)

    expect(newState.dialogs.length).toBe(5);
    expect(newState.messages.length).toBe(5);
})
