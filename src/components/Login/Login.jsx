import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {loginThunk, logOutThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    const onSubmit = (formData) => {

        props.loginThunk(formData.email,formData.pass,formData.rememberMe)

    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    } else {
        return (
            <LoginReduxForm onSubmit={onSubmit}/>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps,{loginThunk,logOutThunk })(Login);