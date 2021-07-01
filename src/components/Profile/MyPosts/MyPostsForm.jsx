import React from "react";
import {Field, reduxForm} from "redux-form";

const MyPostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={'d-flex mb-3'}>
            <Field type={'text'} name={'post'} component={'input'} className={'form-control mr-sm-2 w-25'} />
            <button className={'btn btn-outline-dark my-2 my-sm-0'} >Add post</button>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({form:'post'}) (MyPostsForm)

export default MyPostsReduxForm;