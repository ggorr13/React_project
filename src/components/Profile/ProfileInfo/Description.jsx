const Description = (props) => {

    return (
        <div>
            {props.isOwner && <button onClick={ () => props.setEditMode(true)} className={'btn btn-danger'}>Edit</button>}

            {props.profile.map(val => {
                return <div key={val}>
                    <div>
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
                        <b>Contacts</b>{Object.keys(val.contacts).map(key => {
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