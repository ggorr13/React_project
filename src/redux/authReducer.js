import { authAPI } from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth:false,
}

const authReducer = (state = initialState,action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.state,
                isAuth: action.isAuth
            }

        default:
            return state;
    }
}

export const setAuthUserDataAC = (state,isAuth = true) => ({type:SET_USER_DATA,state,isAuth})

export const setAuthUserThunkCreator = () => (dispatch) => {

    authAPI.authMe().then(response  => {

        if(response.resultCode === 0) {
            dispatch(setAuthUserDataAC(response.data))
        }
    })
}

export const loginThunk = (email,password,rememberMe= false) => (dispatch) => {

    authAPI.login(email,password,rememberMe)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(email,password,rememberMe))
            }
        })
}

export const logOutThunk = () => (dispatch) => {

    authAPI.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null,false))
            }
        })
}
export default authReducer;



