import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from './redux/state';

export let rerenderRntireTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
