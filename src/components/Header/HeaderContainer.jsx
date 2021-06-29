import React from 'react';
import { connect } from "react-redux";
import axios from "axios";
import Header from "./Header";
import { setAuthUserDataAC } from "../../redux/authReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
            withCredentials :true
        })
            .then(response  => {

                if(response.data.resultCode ===0) {
                    this.props.setAuthUserDataAC(response.data.data)
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