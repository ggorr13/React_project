import s from './FormControls.module.css';

export const Input = ({input,meta, ...props}) => {

    return (
        <div className={s.formControl+ " " +(meta.touched  && meta.error ? s.error: "")}>
            <label for={'input'}>
                <input {...input} {...props} id={'input'} className={'form-control w-100'}/>
                {meta.touched && meta.error}
            </label>
        </div>
    )
}