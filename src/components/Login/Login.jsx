import LoginReduxForm from "./LoginForm";

const Login = () => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    )
}

export default Login;