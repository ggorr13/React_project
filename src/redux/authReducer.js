import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth:false,
    captchaUrl:null,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.state,
                isAuth: action.isAuth
            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captcha
            }

        default:
            return state;
    }
}

export const setAuthUserDataAC = (state,isAuth = true) => ({type:SET_USER_DATA,state,isAuth});

export const getCaptchaUrlAC = (captcha) => ({type:GET_CAPTCHA_URL,captcha})


export const setAuthUserThunkCreator = () => async (dispatch) => {

    let response = await authAPI.authMe()

        if(response.resultCode === 0) {
            dispatch(setAuthUserDataAC(response.data))
        }
}

export const loginThunk = (email,password,captcha,rememberMe= false) => (dispatch) => {

    authAPI.login(email,password,captcha,rememberMe)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserThunkCreator())
            }else {
                if(response.data.resultCode === 10) {
                    dispatch(getCaptchaUrlThunk())

                } else {
                    dispatch(stopSubmit("login",{ _error: 'Invalid email or password'}))
                }
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

export const getCaptchaUrlThunk = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    dispatch(getCaptchaUrlAC(response.data.url))
}
export default authReducer;



