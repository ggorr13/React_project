import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Component} from "react";

class Profile extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        return this.props !== nextProps || this.state !== nextState;
    }

    render() {

        return (
            <div>
                <ProfileInfo profile={this.props.profile} status={this.props.status}
                             updateStatusThunk={this.props.updateStatusThunk}/>
                <MyPostsContainer/>
            </div>
        )
    }
}

export default Profile;