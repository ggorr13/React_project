import './App.css';
import Navbar  from './components/Navbar/Navbar';
import {Route, BrowserRouter, Redirect} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import UsersContainer from "./components/Users/UsersContainer";
import React, {Suspense} from "react";
import {connect, Provider} from "react-redux";
import { compose } from "redux";
import { initializedThunk } from "./redux/appReducer";
import store from "./redux/redux-store";
import MainSpinner from "./components/Common/MainSpinner/MainSpinner";
import Spiner from "./components/Common/Spiner/Spiner";


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializedThunk();
    }

    render() {
        if(!this.props.initialized){
            return <Spiner />
        }

        return (
            <BrowserRouter>
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <Navbar/>

                    <div className={'app-wrapper-content'}>

                        <Suspense fallback={<MainSpinner/>}>
                            <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>
                        </Suspense>

                        <Suspense fallback={<MainSpinner/>}>
                            <Route exact path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        </Suspense>

                        <Route exact path="/users" render={() => <UsersContainer/>}/>

                        <Route exact path="/login" render={() => <Login/>}/>

                        <Route exact path="/" render={() => <Redirect to={'/profile'} />}/>

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
