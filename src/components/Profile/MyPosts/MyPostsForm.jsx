import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthThunk, required} from "../../../Helper/Validation/validator";
import {Input} from "../../Common/FormsControls/FormControls";

const maxLength20 = maxLengthThunk(20);

const MyPostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={'d-flex mb-3'}>
            <Field type={'text'} name={'post'} component={Input}
                   validate={[required,maxLength20]} placeholder={'Add post'}/>
            <div>
                <button className={'btn btn-outline-dark my-2 my-sm-0 m-1'} >Post</button>
            </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({form:'post'}) (MyPostsForm)

export default MyPostsReduxForm;