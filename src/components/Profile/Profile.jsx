import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Component} from "react";

class Profile extends Component {

    render() {

        return (
            <div>
                <ProfileInfo {...this.props} profile={this.props.profile} isOwner={this.props.isOwner}/>
                <MyPostsContainer/>
            </div>
        )
    }
}

export default Profile;