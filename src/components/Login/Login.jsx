import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {loginThunk, logOutThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    const onSubmit = (formData) => {

        props.loginThunk(formData.email,formData.pass,formData.captcha,formData.rememberMe)

    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    } else {
        return (
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
        captchaUrl:state.auth.captchaUrl,
    }
}

export default connect(mapStateToProps,{loginThunk,logOutThunk })(Login);