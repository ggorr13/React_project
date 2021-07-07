import s from './ProfileInfo.module.css';

const Description = (props) => {

    return (
        <div className={'p-5 mr-5'} >
            <div className={s.button}>
                {props.isOwner && <button onClick={ () => props.setEditMode(true)} className={'btn btn-danger w-25'}>Edit</button>}
            </div>


            {props.profile.map(val => {
                return <div key={val}>
                    <div className={'mt-3'}>
                        <b>Full Name</b>: {val.fullName}
                    </div>
                    <div>
                        <b>Looking for a job</b>: {val.lookingForAJob ? "Yes":"No"}
                    </div>
                    {val.lookingForAJob &&
                    <div>
                        <b>My professional skills</b>: {val.lookingForAJobDescription}
                    </div>}
                    <div>
                        <b>About me</b>: {val.aboutMe}
                    </div>
                    <div>
                        <b>Contacts</b>{!val.contacts ? '' :Object.keys(val.contacts).map(key => {
                            return <div className={'m-1'} key={key}>
                                <Contact contactTitle={key}  contactValue={val.contacts[key]}/>
                            </div>
                        })}
                    </div>
                </div>})
            }
        </div>
    )
}

const Contact = ({contactTitle,contactValue}) => {
    return <div className={'ml-2'}><b>{contactTitle}</b>: {contactValue}</div>
}

export default Description