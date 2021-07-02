import React from "react";
import {Field,reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormControls";
import {maxLengthThunk, required} from "../../Helper/Validation/validator";

const maxLength10 = maxLengthThunk(10)

const DialogsForm = (props) => {

    return (
        <form className={"d-flex"} onSubmit={props.handleSubmit}>
            <Field component={Input} name={'message'}
                   type={"text"} placeholder={"Add message"} validate={[required,maxLength10]} />

            <div>
                <button className={"btn btn-outline-dark my-2 my-sm-0 m-1"} type={"submit"}>Add</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form:'dialogs'})(DialogsForm)

export default DialogsReduxForm;