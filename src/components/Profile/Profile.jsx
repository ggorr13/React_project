import s from './Profile.module.css';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer profilePage={props.profilePage}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;