import { addPostAC } from '../../../redux/profileReducer';
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {

    return {
        profilePage: state.profilePage
    }
}

export default connect(mapStateToProps,{addPostAC}) (MyPosts)
