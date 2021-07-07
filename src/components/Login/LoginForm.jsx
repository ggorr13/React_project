import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormControls";
import {maxLengthThunk, required} from "../../Helper/Validation/validator";
import s from './LoginForm.module.css'

const maxLength30 = maxLengthThunk(30)

const LoginForm = (props) => {

    return (
        <div className={s.form}>
            <form onSubmit={props.handleSubmit} className={''}>
                <h1 >Login</h1>
                <div className={'mt-3'}>
                    <Field component={Input} type={'text'} name={'email'}
                           placeholder={"Enter email"} className={s.input} validate={[required,maxLength30]}/>
                </div>
                <div className={'mt-3'}>
                    <Field component={Input} type={'password'} className={'display-1'}  name={'pass'}
                           placeholder={"Password"} validate={[required,maxLength30]}
                    />
                </div>
                <div className={'mt-2 form-check'}>
                    <Field component={"input"} type={'checkbox'} className={"form-check-input"} name={'rememberMe'} id={"exampleCheck1"}/>
                    <label className={"form-check-label"} htmlFor={"exampleCheck1"}>Remember me</label>
                </div>
                <div>
                    <h6 className={'text-danger'}>{props.error}</h6>
                </div>
                <div>
                    {props.captchaUrl &&
                    <div>
                        <img src={props.captchaUrl}/>
                        <Field component={Input} name={'captcha'} validate={[required]}/>
                    </div>
                    }
                </div>
                <div className={'mt-1'}>
                    <button className={"btn btn-dark mt-3"}>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form:'login'}) (LoginForm)

export default LoginReduxForm;