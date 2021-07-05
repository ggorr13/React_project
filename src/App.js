import './App.css';
import Navbar  from './components/Navbar/Navbar';
import {Route, BrowserRouter } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {Suspense} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializedThunk} from "./redux/appReducer";
import store from "./redux/redux-store";
import MainSpinner from "./components/Common/MainSpinner/MainSpinner";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializedThunk();
    }

    render() {

        return (
            <BrowserRouter>
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={'app-wrapper-content'}>

                        <Suspense fallback={<MainSpinner/>}>
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        </Suspense>

                        <Suspense fallback={<MainSpinner/>}>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                        </Suspense>

                        <Suspense fallback={<MainSpinner/>}>
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        </Suspense>

                        <Route path="/login" render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

let AppContainer = compose(
    connect(mapStateToProps,{initializedThunk})
)(App)

let MainApp = () => {
    return <Provider store={store}>
        <AppContainer />
    </Provider>
}

export default MainApp;
