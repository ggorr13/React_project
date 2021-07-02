import {setAuthUserThunkCreator} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized:false,
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_INITIALIZED:
            return {
                ...state,
                initialized:true,
            }

        default:
            return state;
    }
}

export const initializedAC = () => ({type:SET_INITIALIZED})

export const initializedThunk = () => (dispatch) => {

    let promise = dispatch(setAuthUserThunkCreator());

    Promise.all([promise])
        .then(() => {
        dispatch(initializedAC())
    })
}

export default appReducer;



