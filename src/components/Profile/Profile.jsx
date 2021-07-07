import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Component} from "react";

class Profile extends Component {

    render() {

        return (
            <div>
                <ProfileInfo {...this.props} isOwner={this.props.isOwner}/>
                <MyPostsContainer/>
            </div>
        )
    }
}

export default Profile;