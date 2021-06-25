import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

let rerenderRntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 onPostChange={store.onPostChange.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 onMessageChange={store.onMessageChange.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderRntireTree(store.getState());

store._subscribe(rerenderRntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
