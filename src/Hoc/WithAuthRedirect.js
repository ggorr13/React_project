import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {

    return {
        login: state.auth.login,
    }
}

export const WithAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {

        render() {

            if(this.props.login === null) return  <Redirect to={'/login'} />

            return <Component {...this.props} />
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}