import styles from './PostForm.module.css';
import {StateType} from '../../../redux/state';
import React from 'react';

type PropsType = {
    state: StateType
    addPost: (message: string) => void
}

export const PostForm = (props: PropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        debugger
        const text = newPostElement.current?.value
        text && props.addPost(text)
    }

    return (
        <div className={styles.root}>
            <div className={styles.imgAndTextarea}>
                <img className={styles.avatar} src={props.state.currentUser.avatar} alt="avatar-currentUser"/>
                <textarea ref={newPostElement} className={styles.textarea} placeholder={'What\'s Your Mind ? Hamse!'}></textarea>
            </div>
            <div className={styles.buttonBlock}>
                <button onClick={addPostHandler} className={styles.button}>Add post</button>
            </div>
        </div>
    )
}