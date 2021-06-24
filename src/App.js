import './App.css';
import Header  from './components/Header/Header';
import Navbar  from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from "react-router-dom";


const App = (props) => {

  return (
    <BrowserRouter>
          <div className={'app-wrapper'}>
          <Header />
          <Navbar />
          <div className={'app-wrapper-content'}>
              <Route path="/dialogs" render={() => <Dialogs dialogs={props.store.dialogsPage}/>}/>
              <Route path="/profile" render={() => <Profile profile={props.store.profilePage} addPost={props.addPost}/>}/>
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
