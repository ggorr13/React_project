import React from 'react';
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserDataAC } from "../../redux/authReducer";
import {usersAPI} from "../../api/api";



class HeaderContainer extends React.Component {

    componentDidMount() {

        usersAPI.authMe().then(response  => {

            if(response.resultCode ===0) {
                this.props.setAuthUserDataAC(response.data)
            }
        })
    }

    render() {

        return <Header {...this.props}/>
    }
}

let  mapStateToProps = (state) => {

    return {
        login: state.auth.login
    }
}

export default connect(mapStateToProps,{setAuthUserDataAC}) (HeaderContainer)