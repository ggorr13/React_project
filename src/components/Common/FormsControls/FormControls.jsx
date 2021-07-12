import s from './FormControls.module.css';
import {Field} from "redux-form";
import React from "react";

export const Input = ({input,meta, ...props}) => {

    return (
        <div className={s.formControl+ " " +(meta.touched  && meta.error ? s.error: "")}>
            <label form={'input'}>
                <input {...input} {...props} id={'input'} className={'form-control'}/>
                {meta.touched && meta.error}
            </label>
        </div>
    )
}

export const createField = (type,name,placeholder,validate) => {

    return (
        <div className={'mt-3'}>
            <Field component={Input} type={type} name={name} placeholder={placeholder} validate={[validate]}/>
        </div>
    )
}