import s from './ProfileInfo.module.css';
import Spiner from "../../Spiner/Spiner";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Spiner />
    }

    return (
        <div>
            <div>
                <img src={'https://pro2-bar-s3-cdn-cf.myportfolio.com/1106987f9c1a3d30352889dad7e52919/83e9d427-a1f9-44be-ab14-5c9c90fb3e1d_rwc_0x130x1920x1082x1920.jpeg?h=a3887ed5e9f83372c1a460c9cc1b9618'} className={s.contentImg}/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large}/>
                    <h4>{props.profile.fullName}</h4>
                    <h6>{props.profile.lookingForAJobDescription}</h6>
                </div>
               <ProfileStatus status={'Hello World'} />
            </div>
        </div>
    )
}

export default ProfileInfo;