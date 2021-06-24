import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts profile={props.profile} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;