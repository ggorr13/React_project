import React from "react";
import {Field,reduxForm} from "redux-form";

const DialogsForm = (props) => {

    return (
        <form className={"d-flex"} onSubmit={props.handleSubmit}>
            <Field component={'input'} name={'message'} className={"form-control mr-sm-2"}
                   type={"text"} placeholder={"Add message"} />

            <button className={"btn btn-outline-dark my-2 my-sm-0 m-1"} type={"submit"}>Add</button>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form:'dialogs'})(DialogsForm)

export default DialogsReduxForm;