import React from 'react';
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserThunkCreator } from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthUserThunkCreator()
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

export default connect(mapStateToProps,{setAuthUserThunkCreator}) (HeaderContainer)