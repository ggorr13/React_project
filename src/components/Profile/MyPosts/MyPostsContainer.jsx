import { addPostAC } from '../../../redux/profileReducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {

    return {
        profilePage: state.profilePage
    }
}

const MyPostsContainer = connect(mapStateToProps,{addPostAC}) (MyPosts)

export default MyPostsContainer;