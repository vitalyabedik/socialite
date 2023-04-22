import styles from './Profile.module.css';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostForm} from './PostForm';
import {Posts} from './Posts/Posts';
import {Sidebar} from './Sidebar/Sidebar';
import {StateType} from '../../redux/state';

type PropsType = {
    state: StateType
    addPost: (message: string) => void
}

export const Profile = (props: PropsType) => {

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <ProfileInfo/>
                <div className={styles.items}>
                    <div className={styles.timeline}>
                        <PostForm state={props.state} addPost={props.addPost}/>
                        <Posts currentUser={props.state.currentUser} posts={props.state.profilePage.posts}/>
                    </div>
                    <Sidebar state={props.state.profilePage.sidebar}/>
                </div>
            </div>
        </div>
    )
}