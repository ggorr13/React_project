import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const IS_FETCHING = 'IS_FETCHING';
const DISABLED = 'DISABLED';

let initialState = {

    users: [],
    pageSize:10,
    currentPage:1,
    totalUsersCount:100,
    isFetching: false,
    disabled:[],
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
                disabled: action.isFetching
                    ? [...state.disabled,action.id]
                    : state.disabled.filter(id => id !== action.id)
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

export const disabledAC = (isFetching , id) => ({type:DISABLED,isFetching, id})

export const followThunk = (userId) => (dispatch) => {

    usersAPI.follow(userId).then(resultCode => {
        console.log(resultCode)
        if(resultCode === 0){
           // dispatch(unFollowAC(userId))
        }
    })
}

export const unFollowThunk = (userId) => (dispatch) => {

    usersAPI.unFollow(userId).then(resultCode => {
        console.log(resultCode)
        if (resultCode === 0) {
           // dispatch(followAC(userId))
        }
    })
}

export const  getUsersThunkCreator = (currentPage,pageSize) => (dispatch) => {

    dispatch(isFetchingAC(true))
    usersAPI.getUsers(currentPage,pageSize).then(response => {
        dispatch(setUsersAC(response.items))
        dispatch(setCurrentPageAC(currentPage))
        dispatch(isFetchingAC(false))
    })
}

export default usersReducer;