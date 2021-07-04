import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const IS_FETCHING = 'IS_FETCHING';
const DISABLED = 'DISABLED';

let initialState = {

    users: [],
    pageSize:13,
    currentPage:1,
    totalUsersCount:160,
    isFetching: false,
    disabled:false,
}

const usersReducer = (state = initialState,action) => {

    switch (action.type) {

        case FOLLOW:
        return {
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return {...u,followed:true}
                }
                return u;
            })
        }
        case UNFOLLOW:
        return {
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return {...u,followed:false}
                }
                return u;
            })
        }

        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage

            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.bool
            }
        case DISABLED:
            return {
                ...state,
                disabled: action.bool

            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type:FOLLOW,userId});

export const unFollowAC = (userId) =>({type:UNFOLLOW,userId});

export const setUsersAC = (users) => ({type:SET_USERS,users})

export const setCurrentPageAC = (currentPage) => ({type:SET_CURRENT_PAGE,currentPage})

export const isFetchingAC = (bool) => ({type:IS_FETCHING,bool})

export const disabledAC = (bool) => ({type:DISABLED,bool})

export const followThunk = (userId) => async (dispatch) => {

    dispatch(disabledAC(true))
    let data = await usersAPI.follow(userId)
    if(data.resultCode === 0){
        dispatch(followAC(userId))
        dispatch(disabledAC(false))
    }

}

export const unFollowThunk = (userId) => async (dispatch) => {

    dispatch(disabledAC(true))
    let data = await usersAPI.unFollow(userId)

    if (data.resultCode === 0) {
        dispatch(unFollowAC(userId))
        dispatch(disabledAC(false))
    }
}

export const  getUsersThunkCreator = (currentPage,pageSize) => async (dispatch) => {

    dispatch(isFetchingAC(true))
    let response = await usersAPI.getUsers(currentPage,pageSize);
        dispatch(setUsersAC(response.items))
        dispatch(setCurrentPageAC(currentPage))
        dispatch(isFetchingAC(false))
}

export default usersReducer;