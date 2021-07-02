import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormControls";
import {maxLengthThunk, required} from "../../Helper/Validation/validator";

const maxLength30 = maxLengthThunk(30)

const LoginForm = (props) => {

    return (
        <div className={'d-flex justify-content-center align-content-center'}>
            <form onSubmit={props.handleSubmit} className={'w-50 d-flex justify-content-center flex-column'}>
                <h1 >Login</h1>
                <div className={'mt-3'}>
                    <Field component={Input} type={'text'} name={'login'}
                           placeholder={"Enter email"} validate={[required,maxLength30]}/>
                </div>
                <div className={'mt-3'}>
                    <Field component={Input} type={'password'}  name={'pass'}
                           placeholder={"Password"} validate={[required,maxLength30]}
                    />
                </div>
                <div className={'mt-2 form-check'}>
                    <Field component={"input"} type={'checkbox'} className={"form-check-input"} name={'rememberMe'} id={"exampleCheck1"}/>
                    <label className={"form-check-label"} htmlFor={"exampleCheck1"}>Remember me</label>
                </div>
                <div className={'mt-1 '}>
                    <button type={"submit"} className={"btn btn-dark w-25 mt-3"}>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form:'login'}) (LoginForm)

export default LoginReduxForm;