import {createField, Input} from '../../Common/FormsControls/FormControls';
import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../../Helper/Validation/validator";

const DescriptionForm = (props) => {

    return <form onSubmit={props.handleSubmit} className={'w-50 d-flex justify-content-center flex-column'}>

        <div className={'mt-2 form-check'}>
            <Field component={"input"} type={'checkbox'} className={"form-check-input"} name={'lookingForAJob'} id={"exampleCheck1"}/>
            <label className={"form-check-label"} htmlFor={"exampleCheck1"}>Looking for a job</label>
        </div>

        {createField('text','AboutMe',"About Me",required)}

        {createField('text','LookingForAJobDescription',"Looking for a job Description",required)}

        {createField('text','FullName',"Full Name",required)}

        <div>
            {props.profile.map(val => {
                return <div key={val}>
                    {Object.keys(val.contacts).map(key => {
                        return <div key={key}>
                           <Field type={'text'} component={Input} name={`contacts.${key}`} placeholder={key}/>
                        </div>
                    })}
                </div>
            })}
        </div>
        <h6 className={'text-danger'}>{props.error}</h6>
        <div className={'mt-1'}>
            <button className={"btn btn-success w-25 mt-3"}>Save</button>
        </div>
    </form>
}

const ProfileForm = reduxForm({form:'Description'})(DescriptionForm)

export default ProfileForm;