import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage}
                     addPost={props.addPost}
                     onPostChange={props.onPostChange}/>
        </div>
    )
}

export default Profile;