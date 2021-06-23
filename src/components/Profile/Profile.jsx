import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {

    return (
        <div>
            <div>
                 <img src={'https://pro2-bar-s3-cdn-cf.myportfolio.com/1106987f9c1a3d30352889dad7e52919/83e9d427-a1f9-44be-ab14-5c9c90fb3e1d_rwc_0x130x1920x1082x1920.jpeg?h=a3887ed5e9f83372c1a460c9cc1b9618'} className={s.contentImg}/>
            </div>
            <div>
                 ava + description
            </div>
            <div>
                 <MyPosts />
            </div>
        </div>
    )
}

export default Profile;