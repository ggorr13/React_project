import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import {compose} from "redux";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth:authReducer,
    app:appReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers,composeEnhancers(applyMiddleware (thunkMiddleware)));

window.store = store;

export default store