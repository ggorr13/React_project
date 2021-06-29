import {usersAPI} from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
}

const authReducer = (state = initialState,action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.state
            }

        default:
            return state;
    }
}

export const setAuthUserDataAC = (state) => ({type:SET_USER_DATA,state})

export const setAuthUserThunkCreator = () => (dispatch) => {

    usersAPI.authMe().then(response  => {

        if(response.resultCode === 0) {
            dispatch(setAuthUserDataAC(response.data))
        }
    })
}
export default authReducer;



