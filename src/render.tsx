import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/styles.css'
import './index.css';

import {App} from './App/App';
import {StateType, addPost, addMessage, updateNewMessageText, updateNewPostText} from './redux/state'

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    addMessage={addMessage}
                    updateNewMessageText={updateNewMessageText}
                />,
        document.getElementById('root')
    );
}